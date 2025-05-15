using FinalProject.Core.Entities;
using FinalProject.Core.Repositories;
using FinalProject.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Service
{
    public class FolderService : IFolderService
    {
        private readonly IFolderRepository _folderRepository;

        public FolderService(IFolderRepository folderRepository)
        {
            _folderRepository = folderRepository;
        }

        public List<Folder> GetAllFolders()
        {
            return _folderRepository.GetFolders().ToList();
        }

        public Folder GetFolderById(int id)
        {
            return _folderRepository.GetFolderById(id);
        }

        public Folder PostFolder(Folder value)
        {
            _folderRepository.AddFolder(value);
            return value;
        }

        public Folder PutFolder(string d, Folder value)
        {
            _folderRepository.UpdateFolder(value);
            return value;
        }

        public Folder DeleteFolder(int id)
        {
            _folderRepository.DeleteFolder(id);
            return new Folder();
        }
    }
}
