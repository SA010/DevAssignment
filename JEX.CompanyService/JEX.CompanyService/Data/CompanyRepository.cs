using JEX.CompanyService.Models;
using Microsoft.EntityFrameworkCore;

namespace JEX.CompanyService.Data
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly CompaniesDbContext _dbContext;

        public CompanyRepository(CompaniesDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void AddCompany(Company company)
        {
            if (company == null)
            {
                throw new ArgumentNullException(nameof(company));
            }

            _dbContext.Companies.Add(company);
        }

        public void RemoveCompany(Company company)
        {
            if (company == null)
            {
                throw new ArgumentNullException(nameof(company));
            }

            _dbContext.Companies.Remove(company);
        }
        
        public async Task<IEnumerable<Company>> GetAllCompaniesAsync(bool includeVacancy = false, bool hideWhenNoVacancy = true)
        {
            var x = from c in _dbContext.Companies
                    select c;
            if (includeVacancy)
                x = x.Include(c => c.Vacancies);
            if (hideWhenNoVacancy) 
                x = x.Where(c => c.Vacancies.Any());

            return await x.ToListAsync();
        }

        public async Task<Company> GetCompanyByIdAsync(int id)
        {
            return await _dbContext.Companies.FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<bool> SaveChangesAsync()
        {
            var writtenCount = await _dbContext.SaveChangesAsync();
            return writtenCount >= 0;
        }

    }
}
