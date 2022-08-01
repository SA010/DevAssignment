using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JEX.CompanyService.Models
{
    public class Address
    {
        [Required]
        public int Id { get; private set; }
        [Required]
        public string AddressLine { get; set; } //Single line to save time

        public Company Company { get; set; }
        public int CompanyId { get; set; }
        //TODO: add address type

    }
}
