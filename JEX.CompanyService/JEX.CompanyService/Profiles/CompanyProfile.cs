using AutoMapper;

namespace JEX.CompanyService.Profiles
{
    public class CompanyProfile : Profile
    {
        public CompanyProfile()
        {
            CreateMap<Models.Company, DTO.CompanyDto>().ReverseMap();

        }
    }
}
