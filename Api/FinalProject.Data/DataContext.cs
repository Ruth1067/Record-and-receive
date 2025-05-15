//////using System;
//////using System.Collections.Generic;
//////using System.Linq;
//////using System.Text;
//////using System.Threading.Tasks;

//////namespace FinalProject.Data
//////{
////using Microsoft.EntityFrameworkCore;
////using FinalProject.Core.Entities;
////using global::FinalProject.Core.Entities;

////namespace FinalProject.Infrastructure
////{
////    public class DataContext : DbContext
////    {
////        public DataContext(DbContextOptions<DataContext> options) : base(options)
////        {
////        }

////        public DbSet<User> Users { get; set; } // Represents the Users table in the database

////        protected override void OnModelCreating(ModelBuilder modelBuilder)
////        {
////            // You can configure your entity mappings here if needed
////            modelBuilder.Entity<User>().ToTable("Users");
////        }
////    }
////}

//////}
//using firstWebApi;
//using FinalProject.Core.Entities;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.DependencyInjection;

//namespace FinalProject
//{
//    public class DataContext : DbContext
//    {
//        public DataContext(DbContextOptions<DataContext> options) : base(options)
//        {
//        }
//        public DbSet<User> Users { get; set; }
//        public DbSet<Folder> Folders { get; set; }
//        // public DbSet<Baby> babies { get; set; }
//        //public DbSet<Nurse> nurses { get; set; }


//        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        //{
//        //    optionsBuilder.UseSqlServer(@"Server=bklae8to1zb68cllgzjv-mysql.services.clever-cloud.com;Database=bklae8to1zb68cllgzjv-mysql.services.clever-cloud.com");
//        //}
//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=newDB");
//        }
//        //public void ConfigureServices(IServiceCollection services)
//        //{
//        //    services.AddDbContext<DbContext>(static options =>
//        //        options.UseMySql("Server=bklae8to1zb68cllgzjv-mysql.services.clever-cloud.com;Database=bklae8to1zb68cllgzjv-mysql.services.clever-cloud.com;",
//        //            new MySqlServerVersion(new Version(8, 0, 21))));
//        //}
//    }
//}

using FinalProject.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace FinalProject
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=DBProject");
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Folder> Folders { get; set; }
    }
}




