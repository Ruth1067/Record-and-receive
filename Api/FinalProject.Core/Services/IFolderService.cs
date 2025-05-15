using FinalProject.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Services
{
    public interface IFolderService
    {
        List<Folder> GetAllFolders();
        Folder GetFolderById(int id);
        Folder PostFolder(Folder value);
        Folder PutFolder(string d, Folder value);
        Folder DeleteFolder(int id);
        //IEnumerable<Folder> GetCoursesByTeacherId(int teacherId);
    }
}
