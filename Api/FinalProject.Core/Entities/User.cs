using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Entities
{
    public class User
    {
        public int? Id { get; set; } // מספר זהות
        public string? UserName { get; set; } // שם משתמש
        public string? Password { get; set; } // סיסמא
        public string PasswordHash { get; set; } // סיסמא
        //public bool IsTeacher { get; set; } //האם הוא מורה
        public string? Email { get; set; } // כתובת מייל
        public string? PhoneNumber { get; set; } // מספר פלאפון
        public string[]? Roles { get; set; }//תפקידים
        public List<Folder>? Folders { get; set; }
    }
}
