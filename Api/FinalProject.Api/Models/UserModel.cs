namespace FinalProject.Api.Models
{
    public class UserModel
    {
        public string? UserName { get; set; } // שם משתמש
        public string? Password { get; set; } // סיסמא
        //public bool IsTeacher { get; set; }
        public string? Email { get; set; } // כתובת מייל
        //public string? PhoneNumber { get; set; } // מספר פלאפון
        public string[]? Roles { get; set; }//תפקידים
    }
}
