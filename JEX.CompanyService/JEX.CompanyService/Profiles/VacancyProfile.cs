using AutoMapper;

namespace JEX.CompanyService.Profiles
{
    public class VacancyProfile : Profile
    {
        public VacancyProfile()
        {
            CreateMap<Models.Vacancy, DTO.VacancyDto>().ReverseMap();

        }
    }
}
