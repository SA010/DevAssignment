using JEX.CompanyService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JEX.CompanyService.Data
{
    public static class DbInitializer
    {
        public static void Initialize(CompaniesDbContext context)
        {
            if (context.Companies.Any())
            {
                return;   // DB has been seeded
            }

            var companies = new Company[]
            {
                new Company{CompanyName="JEX"}
            };

            context.Companies.AddRange(companies);
            context.SaveChanges();

        }
    }
}
