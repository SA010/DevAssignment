using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JEX.CompanyService.DTO
{
    public class CompanyDto
    {
        public int? Id { get; private set; }
        [Required]
        public string CompanyName { get; set; }
    }
}
