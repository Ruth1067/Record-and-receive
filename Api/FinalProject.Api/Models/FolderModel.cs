namespace FinalProject.Api.Models
{
    public class FolderModel
    {
        public int? FolderId { get; set; }
        public int? TeacherId { get; set; }
        public string Title { get; set; }
        public string? TeacherName { get; set; }
        public string? description { get; set; }
        public int? numberOfLessons { get; set; }
        //public List<string>? Lessons { get; set; }
    }
}
