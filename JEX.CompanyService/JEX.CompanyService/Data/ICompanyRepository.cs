using JEX.CompanyService.Models;

namespace JEX.CompanyService.Data
{
    public interface ICompanyRepository
    {
        Task<bool> SaveChangesAsync();
        Task<IEnumerable<Company>> GetAllCompaniesAsync(bool includeVacancy = false, bool hideWhenNoVacancy = true);
        Task<Company> GetCompanyByIdAsync(int id);
        void AddCompany(Company company);
        void RemoveCompany(Company company);
    }
}
