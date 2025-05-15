using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Entities
{
    public class Folder
    {
        public int? FolderId { get; set; }
        //public bool IsPurchased {  get; set; }
        public int? CategoryId { get; set; }
        public int? CourseId { get; set; }
        public int? TeacherId { get; set; }
        public int? LessonId { get; set; }
        public string Title { get; set; }
        public string? TeacherName { get; set; }
        public string? description { get; set; }
        public int? numberOfLessons { get; set; }
        public List<User>? Users { get; set; }
    }
}
