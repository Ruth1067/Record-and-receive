using FinalProject.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Repositories
{
    public interface IUserRepository
    {
        User GetById(int id);
        IEnumerable<User> GetAll();
        void Add(User user);
        void Update(User user);
        void Delete(int id);
        IEnumerable<Folder> GetFolderByTeacherId(int teacherId);
        IEnumerable<User> GetUsersFolderByFolderId(int folderId);
    }

    //public interface IUserRepository
    //{
    //    //User GetById(int id);
    //    //IEnumerable<User> GetAll();
    //    //void Add(User user);
    //    //void Update(User user);
    //    //void Delete(int id);


    //    //List<User> GetList();
    //    //User GetUser(int id);
    //    //User PostUser(User value);
    //    //User PutUser(string d, User value);
    //    //User DeleteUser(int id);
    //    //void Update(User value);
    //    //User GetById(int id);
    //    //object GetAll();

    //    User GetById(int id);
    //    IEnumerable<User> GetAll();
    //    void Add(User user);
    //    void Update(User user);
    //    void Delete(int id);
    //}

}
