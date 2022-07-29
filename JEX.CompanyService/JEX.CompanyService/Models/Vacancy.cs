using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JEX.CompanyService.Models
{
    public class Vacancy
    {
        [Required]
        public int Id { get; private set; }
        [Required]
        public string Title { get; set; }

        public string Description { get; set; }

        public Company Company { get; set; }
    }
}
