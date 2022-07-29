using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JEX.CompanyService.Models
{
    public class Company
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string CompanyName { get; set; }

        public ICollection<Address> Addresses { get; set; }

        public ICollection<Vacancy> Vacancies { get; set; }
    }
}
