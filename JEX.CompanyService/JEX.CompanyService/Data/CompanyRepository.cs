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
        
        public async Task<IEnumerable<Company>> GetAllCompaniesAsync()
        {
            return await _dbContext.Companies.ToListAsync();
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

        public async Task<IEnumerable<Company>> GetAllCompaniesVacancyAsync()
        {
            return await _dbContext.Companies.ToListAsync();
        }
    }
}
