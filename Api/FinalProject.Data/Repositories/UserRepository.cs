//using FinalProject.Core.Entities;
//using FinalProject.Core.Repositories;
//using Microsoft.EntityFrameworkCore;

//namespace FinalProject.Data.Repositories
//{
//    public class UserRepository : IUserRepository
//    {
//        private readonly DataContext _context;

//        public UserRepository(DataContext context)
//        {
//            _context = context;
//        }

//        public User GetById(int id)
//        {
//            return _context.Users.Find(id);
//        }

//        public IEnumerable<User> GetAll() => _context.Users.ToList();

//        public void Add(User user)
//        {
//            _context.Users.Add(user);
//            _context.SaveChanges(); // שומר את השינויים
//        }

//        public void Update(User user)
//        {
//            _context.Users.Update(user);
//            _context.SaveChanges(); // שומר את השינויים
//        }

//        public void Delete(int id)
//        {
//            var user = _context.Users.Find(id);
//            if (user != null)
//            {
//                _context.Users.Remove(user);
//                _context.SaveChanges(); // שומר את השינויים
//            }
//        }
//    }

//public class UserRepository : IUserRepository
//{
//    private readonly DataContext _context;

//    public UserRepository(DataContext context)
//    {
//        _context = context;
//    }

//    public User GetById(int id)
//    {
//        return _context.Users.Find(id);
//    }

//    public IEnumerable<User> GetAll() => _context.Users.ToList();

//    public void Add(User user) => _context.Users.Add(user);

//    public void Update(User user) => _context.Users.Update(user);

//    public void Delete(int id)
//    {
//        var user = _context.Users.Find(id);
//        if (user != null) _context.Users.Remove(user);
//    }

//}
using FinalProject.Core.Entities;
using FinalProject.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Linq;
using System.Security.Principal;
using static FinalProject.Data.Repositories.UserRepository;

namespace FinalProject.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public User GetById(int id)
        {
            return _context.Users.Find(id);
        }

        public IEnumerable<User> GetAll() => _context.Users.ToList();

        public void Add(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges(); // שומר את השינויים
        }

        public void Update(User user)
        {
            _context.Users.Update(user);
            _context.SaveChanges(); // שומר את השינויים
        }

        public void Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges(); // שומר את השינויים
            }
        }

        public IEnumerable<Folder> GetFolderByTeacherId(int teacherId)
        {
            return _context.Folders.Where(course => course.TeacherId == teacherId).ToList();
        }

        public IEnumerable<User> GetUsersFolderByFolderId(int folderId)
        {
            return _context.Users
                .Where(user => user.Folders.Any(folder => folder.FolderId == folderId))
                .ToList();
        }
    }

}


    //    public class UserRepository : IUserRepository
    //    {
    //        private readonly DataContext _context;

    //        public UserRepository(DataContext context)
    //        {
    //            _context = context;
    //        }

    //        public User GetById(int id)
    //        {
    //            return _context.Users.Find(id);
    //        }

    //        public IEnumerable<User> GetAll() => _context.Users.ToList();

    //        public void Add(User user)
    //        {
    //            if (user.Roles == null)
    //            {
    //                user.Roles = new WindowsBuiltInRole[; // אתחול לרשימה ריקה אם Roles הוא null
    //            }

    //            _context.Users.Add(user);
    //            _context.SaveChanges(); // שומר את השינויים
    //        }

    //        public void Update(User user)
    //        {
    //            if (user.Roles == null)
    //            {
    //                user.Roles = new Role(); // אתחול לרשימה ריקה אם Roles הוא null
    //            }

    //            _context.Users.Update(user);
    //            _context.SaveChanges(); // שומר את השינויים
    //        }

    //        public void Delete(int id)
    //        {
    //            var user = _context.Users.Find(id);
    //            if (user != null)
    //            {
    //                _context.Users.Remove(user);
    //                _context.SaveChanges(); // שומר את השינויים
    //            }
    //        }
    //    }
    //}

