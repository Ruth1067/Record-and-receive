using FinalProject.Core.Entities;
using FinalProject.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Services
{
    public interface IUserService
    {
        List<User> GetAll();
        User GetById(int id);
        User PostUser(User value);
        User PutUser(string d, User value);
        User DeleteUser(int id);
        IEnumerable<Folder> GetFoldersByTeacherId(int teacherId);
        IEnumerable<User> GetUsersFoldersByFolderId(int folderId);

    }

    //public interface IUserService
    //{
    //    //User GetById(int id);
    //    //IEnumerable<User> GetAll();
    //    //void Add(User user);
    //    //void Update(User user);
    //    //void Delete(int id);

    //    //List<User> GetAll();
    //    //User GetById(int id);
    //    //User PostUser(User value);
    //    //User PutUser(string d, User value);
    //    //User DeleteUser(int id);
    //    //Task GetAllAsync();

    //    //Task<List<User>> GetAllAsync();
    //    //Task<User> GetByIdAsync(int id);
    //    //Task<User> PostUserAsync(User user);
    //    //Task PutUserAsync(string id, User user);
    //    //Task<bool> DeleteUserAsync(int id);
    //    List<User> GetAll();
    //    User GetById(int id);
    //    User PostUser(User value);
    //    User PutUser(string d, User value);
    //    User DeleteUser(int id);
    //}
}
