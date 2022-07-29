using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JEX.CompanyService.DTO
{
    public class AddressDto
    {
        public int Id { get; private set; }
        [Required]
        public string AddressLine { get; set; }
    }
}
