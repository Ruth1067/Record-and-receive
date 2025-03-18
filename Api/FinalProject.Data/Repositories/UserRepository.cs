using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Data.Repositories
{
    using FinalProject.Core.Entities;
    using FinalProject.Core.Repositories;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Linq;

    public class UserRepository : IUserRepository
    {
        private readonly DbContext _context;

        public UserRepository(DbContext context)
        {
            _context = context;
        }

        public User GetById(int id) => _context.Users.Find(id);

        public IEnumerable<User> GetAll() => _context.Users.ToList();

        public void Add(User user) => _context.Users.Add(user);

        public void Update(User user) => _context.Users.Update(user);

        public void Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user != null) _context.Users.Remove(user);
        }
    }
}
