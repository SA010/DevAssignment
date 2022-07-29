using System.ComponentModel.DataAnnotations;

namespace JEX.CompanyService.DTO
{
    public class CompanyUpdateDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string CompanyName { get; set; }
    }
}
