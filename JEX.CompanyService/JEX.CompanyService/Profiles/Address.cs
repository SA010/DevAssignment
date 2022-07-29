using AutoMapper;

namespace JEX.CompanyService.Profiles
{
    public class AddressProfile : Profile
    {
        public AddressProfile()
        {
            CreateMap<Models.Address, DTO.AddressDto>().ReverseMap();

        }
    }
}
