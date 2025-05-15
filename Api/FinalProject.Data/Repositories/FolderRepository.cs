using FinalProject.Core.Entities;
using FinalProject.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static FinalProject.Data.Repositories.FolderRepository;

namespace FinalProject.Data.Repositories
{
    public class FolderRepository : IFolderRepository
    {
        private readonly DataContext _context;

        //public FolderRepository(DataContext context)
        //{
        //    _context = context;
        //}
        //public List<Folder> GetList() => _context.Folders.Include(e=>e.Lessons).ToList();


        public FolderRepository(DataContext context)
        {
            _context = context;
        }

        public Folder GetFolderById(int id)
        {
            return _context.Folders.Find(id);
        }
        public IEnumerable<Folder> GetFolders() => _context.Folders.ToList();

        public void AddFolder(Folder folder) => _context.Folders.Add(folder);

        public void UpdateFolder(Folder folder) => _context.Folders.Update(folder);

        public void DeleteFolder(int id)
        {
            var folder = _context.Folders.Find(id);
            if (folder != null) _context.Folders.Remove(folder);
        }
    }

}

