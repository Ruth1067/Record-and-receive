using FinalProject.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Repositories
{
    public interface IFolderRepository
    {
        Folder GetFolderById(int id);
        IEnumerable<Folder> GetFolders();
        void AddFolder(Folder folder);
        void UpdateFolder(Folder folder);
        void DeleteFolder(int id);
        //IEnumerable<Folder> GetCoursesByTeacherId(int teacherId);
    }
}
