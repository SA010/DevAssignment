using JEX.CompanyService.Data;
using JEX.CompanyService.Models;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using JEX.CompanyService.DTO;

namespace JEX.CompanyService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private readonly ICompanyRepository _companyRepository;
        private readonly IMapper _mapper;

        public CompaniesController(ICompanyRepository companyService, IMapper mapper)
        {
            _companyRepository = companyService;
            _mapper = mapper;
        }

        // GET: api/Companies
        [HttpGet]        
        public async Task<ActionResult<IEnumerable<Company>>> Get()
        {
            IEnumerable<Company> companies = await _companyRepository.GetAllCompaniesAsync();

            return Ok(_mapper.Map<IEnumerable<CompanyDto>>(companies));
        }

        // GET: api/Companies/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Company>> GetById(int id)
        {
            var company = await _companyRepository.GetCompanyByIdAsync(id);

            if (company == null) return NotFound();
            return Ok(_mapper.Map<CompanyDto>(company));
        }

        // PUT: api/Companies
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, CompanyDto companyDto)
        {
            if (id != companyDto.Id) return BadRequest();
            
            var company = await _companyRepository.GetCompanyByIdAsync(id);

            if (company == null) return NotFound();

            _mapper.Map(companyDto, company);

            await _companyRepository.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/Companies
        [HttpPost]
        public async Task<ActionResult<CompanyDto>> Post(CompanyDto companyDto)
        {
            var company = _mapper.Map<Company>(companyDto);

            _companyRepository.AddCompany(company);
            await _companyRepository.SaveChangesAsync();

            var companyNewDto = _mapper.Map<CompanyDto>(company);

            return CreatedAtAction(nameof(GetById), new { id = company.Id }, companyNewDto);
        }

        // DELETE: api/Company/1
        [HttpDelete("{id}")]
        public async Task<ActionResult<CompanyDto>> Delete(int id)
        {
            var company = await _companyRepository.GetCompanyByIdAsync(id);
            if (company == null)
            {
                return NotFound();
            }

            _companyRepository.RemoveCompany(company);
            await _companyRepository.SaveChangesAsync();

            return NoContent();
        }
    }
}
