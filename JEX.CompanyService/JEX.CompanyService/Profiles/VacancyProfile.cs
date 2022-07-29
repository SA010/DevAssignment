using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
