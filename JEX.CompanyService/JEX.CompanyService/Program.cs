using JEX.CompanyService.Data;
using Microsoft.EntityFrameworkCore;
using AutoMapper;


var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
                          policy =>
                          {
                              policy.AllowAnyOrigin()
                                    .AllowAnyHeader()
                                    .AllowAnyMethod();
                          });
});

if (builder.Environment.IsProduction())
{
    Console.WriteLine("--- In Production: " + builder.Configuration.GetConnectionString("CompaniesConn"));
    //TODO: Move this to DbContext
    builder.Services.AddDbContext<CompaniesDbContext>(opt =>
        opt.UseSqlServer(builder.Configuration.GetConnectionString("CompaniesConn")));
}
else
{
    Console.WriteLine("--- In Dev mode");
    builder.Services.AddDbContext<CompaniesDbContext>(opt =>
         opt.UseInMemoryDatabase("InMem"));
}

builder.Services.AddScoped<ICompanyRepository, CompanyRepository>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    var context = services.GetRequiredService<CompaniesDbContext>();
    context.Database.EnsureCreated();
    DbInitializer.Initialize(context);
}

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();