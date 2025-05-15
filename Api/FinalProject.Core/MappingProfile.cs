using AutoMapper;
using FinalProject.Core.DTOs;
using FinalProject.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using static System.Runtime.InteropServices.JavaScript.JSType;

namespace FinalProject.Core
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
          //  CreateMap<Baby, BabyDTO>().ReverseMap();
           // CreateMap<Nurse, NurseDTO>().ReverseMap();
            CreateMap<User, UserDTO>().ReverseMap();
            CreateMap<Folder, FolderDTO>().ReverseMap();
            //CreateMap<PurchasedCourses,PurchasedCoursesDTO>().ReverseMap();

        }
    }
}
