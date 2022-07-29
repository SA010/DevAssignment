using JEX.CompanyService.Models;
using Microsoft.EntityFrameworkCore;

namespace JEX.CompanyService.Data
{
    public class CompaniesDbContext: DbContext
    {
        public CompaniesDbContext(DbContextOptions<CompaniesDbContext> options)
            : base(options)
        {
        }

        public DbSet<Company> Companies { get; set; }
        public DbSet<Vacancy> Vacancies { get; set; }
        public DbSet<Address> Addresses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Company>().ToTable("Companies")
                .HasKey(c => c.Id);
            modelBuilder.Entity<Address>().ToTable("Addresses")
                .HasKey(c => c.Id);
            modelBuilder.Entity<Vacancy>().ToTable("Vacancies")
                .HasKey(c => c.Id);

            modelBuilder.Entity<Company>()
                .HasMany(c => c.Addresses)
                .WithOne(c => c.Company);

            modelBuilder.Entity<Company>()
                .HasMany(c => c.Vacancies)
                .WithOne(c => c.Company);

        }
    }
}
