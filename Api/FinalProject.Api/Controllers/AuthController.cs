////////using FinalProject.Core.DTOs;
////////using FinalProject.Core.Entities;
////////using FinalProject.Core.Repositories;


//////////[Route("api/[controller]")]
//////////[ApiController]
//////////public class UsersController : ControllerBase
//////////{
//////////    private readonly IUserRepository _repository;

//////////    public UsersController(IUserRepository repository)
//////////    {
//////////        _repository = repository;
//////////    }

//////////    [HttpGet("{id}")]
//////////    public ActionResult<UserDTO> GetById(int id)
//////////    {
//////////        var user = _repository.GetById(id);
//////////        if (user == null) return NotFound();
//////////        return new UserDTO
//////////        {
//////////            Id = user.Id,
//////////            Username = user.Username,
//////////            Email = user.Email,
//////////            PhoneNumber = user.PhoneNumber
//////////        };
//////////    }

//////////    [HttpPost]
//////////    public ActionResult<UserDTO> Create(User user)
//////////    {
//////////        _repository.Add(user);
//////////        return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
//////////    }
//////////}
////////using Microsoft.AspNetCore.Mvc;
////////using Microsoft.AspNetCore.Mvc;

////////[Route("api/[controller]")]
////////[ApiController]
////////public class UsersController : ControllerBase
////////{
////////    private readonly IUserRepository _repository;

////////    public UsersController(IUserRepository repository)
////////    {
////////        _repository = repository;
////////    }

////////    [HttpGet]
////////    public IEnumerable<UserDTO> Get()
////////    {
////////        return 
////////    }

////////    [HttpGet("{id}")]
////////    public ActionResult<UserDTO> GetById(int id)
////////    {
////////        var user = _repository.GetById(id);
////////        if (user == null) return NotFound();
////////        return new UserDTO
////////        {
////////            Id = user.Id,
////////            Username = user.Username,
////////            Email = user.Email,
////////            PhoneNumber = user.PhoneNumber
////////        };
////////    }

////////    [HttpPost]
////////    public ActionResult<UserDTO> Create(User user)
////////    {
////////        _repository.Add(user);
////////        return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
////////    }
////////}
//////using AutoMapper;
//////using FinalProject.Api.Models;
//////using FinalProject.Core.DTOs;
//////using FinalProject.Core.Entities;
//////using FinalProject.Core.Services;
//////using Microsoft.AspNetCore.Mvc;

//////namespace FinalProject.Controllers
//////{
//////    [Route("api/[controller]")]
//////    [ApiController]
//////    public class UserController : ControllerBase
//////    {

//////        private readonly IUserService _userService;
//////        private readonly IMapper _mapper;

//////        public UserController(IUserService userService, IMapper mapper)
//////        {
//////            _userService = userService;
//////            _mapper = mapper;
//////        }

//////        // GET: api/<TurnController>
//////        [HttpGet]
//////        public ActionResult<IEnumerable<User>> Get()
//////        {
//////            var user = _userService.GetAll();
//////            var userDTO = _mapper.Map<IEnumerable<UserDTO>>(user);
//////            return Ok(userDTO);
//////        }

//////        // GET api/<TurnController>/5
//////        [HttpGet("{id}")]
//////        public ActionResult<User> Get(int id)
//////        {
//////            var user = _userService.GetById(id);
//////            var userDTO = _mapper.Map<UserDTO>(user);

//////            if (userDTO is null)
//////            {
//////                return NotFound();
//////            }
//////            return Ok(userDTO);
//////        }

//////        //POST api/<TurnController>
//////        [HttpPost]
//////        public ActionResult Post([FromBody] UserPostModel value)
//////        {
//////            var user = new User { Id = 111, Username = "value.IdNurse", Password = "value.DateOfTurn", Email = "aaa", PhoneNumber = "aaa" };

//////            var newUser = _userService.PostUser(user);

//////            if (value == null)
//////            {
//////                return NotFound();
//////            }

//////            return Ok(newUser);
//////        }

//////        // PUT api/<TurnController>/5
//////        [HttpPut("{d}")]
//////        public ActionResult Put(string d, [FromBody] UserPostModel value)
//////        {
//////            var user = new User { Id = 111, Username = "value.IdNurse", Password = "value.DateOfTurn", Email = "aaa", PhoneNumber = "aaa" };

//////            var newUser = _userService.PutUser(d, user);

//////            if (newUser is null)
//////                return NotFound();

//////            return Ok(newUser);
//////        }

//////        // DELETE api/<TurnController>/5
//////        [HttpDelete("{id}")]
//////        public ActionResult Delete(int id)
//////        {
//////            var user = _userService.DeleteUser(id);

//////            if (user is null)
//////                return NotFound();
//////            else
//////                return Ok(user);
//////        }
//////    }
//////}
////using FinalProject;
////using FinalProject.Api.Models;
////using FinalProject.Core.Entities;
////using Microsoft.AspNetCore.Mvc;
////using Microsoft.IdentityModel.Tokens;
////using System.IdentityModel.Tokens.Jwt;
////using System.Security.Claims;
////using System.Text;

////[Route("api/[controller]")]
////[ApiController]
////public class AuthController : ControllerBase
////{
////    private readonly IConfiguration _configuration;
////    private readonly DataContext _dataContext;

////public AuthController(IConfiguration configuration, DataContext dataContext)
////    {
////        _configuration = configuration;
////        _dataContext = dataContext;
////    }


////    [HttpPost("/api/login")]
////    public IActionResult Login([FromBody] LoginModel loginModel)
////    {
////        var user = _dataContext.Users?.FirstOrDefault(u => u.Email == loginModel.Email && u.Password == loginModel.Password);
////        if (user is not null)
////        {
////            var jwt = CreateJWT(user);
////            //AddSession(user);
////            return Ok(jwt);
////        }
////        return Unauthorized();
////    }

////    //[HttpPost("/api/teacherLogin")]
////    //public IActionResult TeacherLogin([FromBody] UserModel loginModel)
////    //{
////    //    var user = _dataContext.Users?.FirstOrDefault(u => u.Email == loginModel.Email && u.Password == loginModel.Password&&u.IsTeacher==loginModel.IsTeacher&&loginModel.IsTeacher==true);
////    //    if (user is not null)
////    //    {
////    //        var jwt = CreateJWT(user);
////    //        //AddSession(user);
////    //        return Ok(jwt);
////    //    }
////    //    return Unauthorized();
////    //}

////    [HttpPost("/api/register")]
////    public IActionResult Register([FromBody] RegisterModel registerModel)
////    {
////        var newUser = new User {Username = registerModel.Username, Password = registerModel.Password, Email = registerModel.Email, PhoneNumber = registerModel.PhoneNumber };
////        _dataContext.Users?.Add(newUser);
////        _dataContext.SaveChanges();
////        var jwt = CreateJWT(newUser);
////        return Ok(jwt);
////    }

////    private object CreateJWT(User user)
////    {
////        var claims = new List<Claim>()
////                {
////                    new Claim("id", user.Id.ToString()),
////                    new Claim("name", user.Username),
////                    new Claim("email", user.Email),
////                    new Claim("phoneNumber", user.PhoneNumber)
////                };

////        var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("JWT:Key")));
////        var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
////        var tokeOptions = new JwtSecurityToken(
////            issuer: _configuration.GetValue<string>("JWT:Issuer"),
////            audience: _configuration.GetValue<string>("JWT:Audience"),
////            claims: claims,
////            expires: DateTime.Now.AddDays(30),
////            signingCredentials: signinCredentials
////        );
////        var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
////        return new { Token = tokenString };
////    }
////}
//using FinalProject;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using Org.BouncyCastle.Crypto.Generators;
//using BCrypt.Net;
//using FinalProject.Api.Models;
//using FinalProject.Core.Entities;

//[ApiController]
//[Route("api/[controller]")]
//public class AuthController : ControllerBase
//{
//    private readonly AuthService _authService;
//    private readonly DataContext _dataContext;
//    public AuthController(AuthService authService, DataContext dataContext)
//    {
//        _authService = authService;
//        _dataContext = dataContext;
//    }

//    //    [HttpPost("login")]
//    //    public IActionResult Login([FromBody] LoginModel model)
//    //    {
//    //        // כאן יש לבדוק את שם המשתמש והסיסמה מול מסד הנתונים
//    //        if (model.UserName == "admin" && model.Password == "admin123")
//    //        {
//    //            var token = _authService.GenerateJwtToken(model.UserName, new[] { "Admin" });
//    //            return Ok(new { Token = token });
//    //        }
//    //        else if (model.UserName == "editor" && model.Password == "editor123")
//    //        {
//    //            var token = _authService.GenerateJwtToken(model.UserName, new[] { "Editor" });
//    //            return Ok(new { Token = token });
//    //        }
//    //        else if (model.UserName == "viewer" && model.Password == "viewer123")
//    //        {
//    //            var token = _authService.GenerateJwtToken(model.UserName, new[] { "Viewer" });
//    //            return Ok(new { Token = token });
//    //        }

//    //        return Unauthorized();
//    //    }


//    [HttpPost("login")]
//    public async Task<IActionResult> Login([FromBody] LoginModel model)
//    {
//        // חיפוש המשתמש במסד הנתונים
//        var user = await _dataContext.Users
//            .FirstOrDefaultAsync(u => u.Password == model.Password);

//        // אם המשתמש לא נמצא
//        if (user == null || !VerifyPassword(model.Password, user.PasswordHash))
//        {
//            return Unauthorized();
//        }

//        // אם הכניסה מצליחה, ניצור טוקן JWT
//        var token = _authService.GenerateJwtToken(user.UserName, user.Roles);
//        return Ok(new { Token = token });
//    }

//    // פונקציה לבדוק את הסיסמה
//    private bool VerifyPassword(string password, string passwordHash)
//    {
//        // כאן תוכל להשתמש בספריה כמו BCrypt או SHA256 כדי לבדוק את הסיסמה
//        return BCrypt.Net.BCrypt.Verify(password, passwordHash);
//    }

//    [HttpPost("register")]
//    public async Task<IActionResult> Register([FromBody] RegisterModel model)
//    {
//        // בדוק אם המשתמש כבר קיים
//        var existingUser = await _dataContext.Users
//            .FirstOrDefaultAsync(u => u.UserName == model.UserName);

//        if (existingUser != null)
//        {
//            return Conflict("User already exists.");
//        }

//        // הצפן את הסיסמה
//        var passwordHash = BCrypt.Net.BCrypt.HashPassword(model.Password);

//        // צור משתמש חדש
//        var user = new User
//        {
//            UserName = model.UserName,
//            PasswordHash = passwordHash,
//            Roles = model.Roles // דוגמה לתפקידים
//        };

//        _dataContext.Users.Add(user);
//        await _dataContext.SaveChangesAsync();

//        return Ok();
//    }
//}


////public class LoginModel
////{
////    public string UserName { get; set; }
////    public string Password { get; set; }
////}
///

//using FinalProject;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using BCrypt.Net;
//using FinalProject.Api.Models;
//using FinalProject.Core.Entities;
//using System.Security.Cryptography;
//using System.Text;

//[ApiController]
//[Route("api/[controller]")]
//public class AuthController : ControllerBase
//{
//    private readonly AuthService _authService;
//    private readonly DataContext _dataContext;

//    public AuthController(AuthService authService, DataContext dataContext)
//    {
//        _authService = authService;
//        _dataContext = dataContext;
//    }

//    [HttpPost("login")]
//    public async Task<IActionResult> Login([FromBody] LoginModel model)
//    {
//        // חיפוש המשתמש במסד הנתונים לפי שם המשתמש
//        var user = await _dataContext.Users
//            .FirstOrDefaultAsync(u => u.Email == model.Email);

//        // אם המשתמש לא נמצא או שהסיסמה לא נכונה
//        //if (user == null || !VerifyPassword(model.Password, user.PasswordHash))
//        //{
//        //    return Unauthorized();
//        //}
//        //if (user == null || (model.Password!=user.PasswordHash))
//        //{
//        //    return Unauthorized();
//        //}
//        if (user == null || (model.Password != user.Password))
//        {
//            return Unauthorized();
//        }

//        // אם הכניסה מצליחה, ניצור טוקן JWT
//        var token = _authService.GenerateJwtToken(user.UserName, user.Roles);
//        return Ok(new { Token = token });
//    }

//    // פונקציה לבדוק את הסיסמה
//    //private bool VerifyPassword(string password, string passwordHash)
//    //{
//    //    // כאן תוכל להשתמש בספריה כמו BCrypt כדי לבדוק את הסיסמה
//    //    return BCrypt.Net.BCrypt.Verify(password, passwordHash);
//    //}

//    //    [HttpPost("register")]
//    //    public async Task<IActionResult> Register([FromBody] RegisterModel model)
//    //    {
//    //        // בדוק אם המשתמש כבר קיים
//    //        var existingUser = await _dataContext.Users
//    //            .FirstOrDefaultAsync(u => u.UserName == model.UserName);

//    //        if (existingUser != null)
//    //        {
//    //            return Conflict("User already exists.");
//    //        }

//    //        // הצפן את הסיסמה
//    //        //var passwordHash = BCrypt.Net.BCrypt.HashPassword(model.Password);

//    //        // צור משתמש חדש
//    //        var user = new User
//    //        {
//    //            UserName = model.UserName,
//    //            Email=model.Email,
//    //            //PasswordHash = passwordHash,
//    //            //Password=model.Password,
//    //            PhoneNumber = model.PhoneNumber,
//    //            Roles = model.Roles // דוגמה לתפקידים
//    //        };

//    //        _dataContext.Users.Add(user);
//    //        await _dataContext.SaveChangesAsync();

//    //        var token = _authService.GenerateJwtToken(user.UserName, user.Roles);
//    //        return Ok(new { Token = token });
//    //        //return Ok();
//    //    }
//    //}
////    using Microsoft.AspNetCore.Mvc;
////using Microsoft.EntityFrameworkCore;
////using System;
////using System.Security.Cryptography;
////using System.Text;
////using System.Threading.Tasks;

//[HttpPost("register")]
//public async Task<IActionResult> Register([FromBody] RegisterModel model)
//{
//    // בדוק אם המשתמש כבר קיים
//    var existingUser = await _dataContext.Users
//        .FirstOrDefaultAsync(u => u.UserName == model.UserName);

//    if (existingUser != null)
//    {
//        return Conflict("User already exists.");
//    }

//    // יצירת סיסמה רנדומלית
//    var randomPassword = GenerateRandomPassword(12); // 12 הוא אורך הסיסמה

//    // הצפן את הסיסמה
//    //var passwordHash = BCrypt.Net.BCrypt.HashPassword(randomPassword);

//    // צור משתמש חדש
//    var user = new User
//    {
//        UserName = model.UserName,
//        Email = model.Email,
//        //PasswordHash = passwordHash,
//        Password=randomPassword,
//        PhoneNumber = model.PhoneNumber,
//        Roles = model.Roles // דוגמה לתפקידים
//    };

//    _dataContext.Users.Add(user);
//    await _dataContext.SaveChangesAsync();

//    var token = _authService.GenerateJwtToken(user.UserName, user.Roles);

//    // כאן תוכל לשלוח את הסיסמה הרנדומלית למשתמש בדוא"ל או בכל דרך אחרת
//    // SendEmail(model.Email, randomPassword);

//    return Ok(new { Token = token, Password = randomPassword }); // החזרת הסיסמה למשתמש (אם זה מתאים)
//}

//// פונקציה ליצירת סיסמה רנדומלית
//private string GenerateRandomPassword(int length)
//{
//    const string validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
//    using (var rng = new RNGCryptoServiceProvider())
//    {
//        var randomBytes = new byte[length];
//        rng.GetBytes(randomBytes);
//        var result = new StringBuilder(length);
//        foreach (var b in randomBytes)
//        {
//            result.Append(validChars[b % validChars.Length]);
//        }
//        return result.ToString();
//    }
//}

//}
using FinalProject;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;
using FinalProject.Api.Models;
using FinalProject.Core.Entities;
using System.Security.Cryptography;
using System.Text;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AuthService _authService;
    private readonly DataContext _dataContext;

    public AuthController(AuthService authService, DataContext dataContext)
    {
        _authService = authService;
        _dataContext = dataContext;
    }
    /// <summary>
    /// ////////משהו בכניסה לא עובד טוב. צריך לבדוק הצפנה של סיסמאות .
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel model)
    {
        // חיפוש המשתמש במסד הנתונים לפי דוא"ל
        var user = await _dataContext.Users
            .FirstOrDefaultAsync(u => u.Password == model.Password);

        // אם המשתמש לא נמצא או שהסיסמה לא נכונה
        //if (user == null || !BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
        //{
        //    return Unauthorized();
        //}
        if (user == null || model.Email != user.Email)
        {
            return Unauthorized();
        }

        // אם הכניסה מצליחה, ניצור טוקן JWT
        var token = _authService.GenerateJwtToken(user.UserName, user.Roles);
        return Ok(new { Token = token });
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterModel model)
    {
        // בדוק אם המשתמש כבר קיים
        var existingUser = await _dataContext.Users
            .FirstOrDefaultAsync(u => u.PhoneNumber == model.PhoneNumber);

        if (existingUser != null)
        {
            return Conflict("User already exists.");
        }

        // יצירת סיסמה רנדומלית
        var randomPassword = GenerateRandomPassword(12); // 12 הוא אורך הסיסמה

        // הצפן את הסיסמה
        var passwordHash = BCrypt.Net.BCrypt.HashPassword(randomPassword);

        // צור משתמש חדש
        var user = new User
        {
            UserName = model.UserName,
            Email = model.Email,
            Password = randomPassword,
            PasswordHash = passwordHash, // שמור את ההצפנה של הסיסמה
            PhoneNumber = model.PhoneNumber,
            Roles = model.Roles // דוגמה לתפקידים
        };

        _dataContext.Users.Add(user);
        await _dataContext.SaveChangesAsync();

        // שליחת הסיסמה למשתמש בדוא"ל
        await SendEmail(model.Email, randomPassword, model.UserName);

        var token = _authService.GenerateJwtToken(user.UserName, user.Roles);
        return Ok(new { Token = token }); // החזרת הטוקן למשתמש
    }

    // פונקציה ליצירת סיסמה רנדומלית
    private string GenerateRandomPassword(int length)
    {
        const string validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
        using (var rng = new RNGCryptoServiceProvider())
        {
            var randomBytes = new byte[length];
            rng.GetBytes(randomBytes);
            var result = new StringBuilder(length);
            foreach (var b in randomBytes)
            {
                result.Append(validChars[b % validChars.Length]);
            }
            return result.ToString();
        }
    }

    //[HttpPost("register")]
    //public async Task<IActionResult> Register([FromBody] RegisterModel model)
    //{
    //    // בדוק אם המשתמש כבר קיים
    //    var existingUser = await _dataContext.Users
    //        .FirstOrDefaultAsync(u => u.PhoneNumber == model.PhoneNumber);
    //    ////////////////////////////////////////////////////////////////
    //    if (existingUser != null)
    //    {
    //        return Conflict("User already exists.");
    //    }

    //    // יצירת סיסמה רנדומלית
    //    var randomPassword = GenerateRandomPassword(12); // 12 הוא אורך הסיסמה

    //    // הצפן את הסיסמה
    //    var passwordHash = BCrypt.Net.BCrypt.HashPassword(randomPassword);

    //    // צור משתמש חדש
    //    var user = new User
    //    {
    //        UserName = model.UserName,
    //        Email = model.Email,
    //        PasswordHash = passwordHash,
    //        PhoneNumber = model.PhoneNumber,
    //        Roles = model.Roles // דוגמה לתפקידים
    //    };

    //    _dataContext.Users.Add(user);
    //    await _dataContext.SaveChangesAsync();

    //    // שליחת הסיסמה למשתמש בדוא"ל
    //    await SendEmail(model.Email, randomPassword,model.UserName);

    //    var token = _authService.GenerateJwtToken(user.UserName, user.Roles);
    //    return Ok(new { Token = token }); // החזרת הטוקן למשתמש
    //}

    //// פונקציה ליצירת סיסמה רנדומלית
    //private string GenerateRandomPassword(int length)
    //{
    //    const string validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
    //    using (var rng = new RNGCryptoServiceProvider())
    //    {
    //        var randomBytes = new byte[length];
    //        rng.GetBytes(randomBytes);
    //        var result = new StringBuilder(length);
    //        foreach (var b in randomBytes)
    //        {
    //            result.Append(validChars[b % validChars.Length]);
    //        }
    //        return result.ToString();
    //    }
    //}

    //// פונקציה לשליחת דוא"ל
    //private async Task SendEmail(string toEmail, string randomPassword)
    //{
    //    var fromAddress = new MailAddress("r0548571067@gmail.com", "Ruth Greiniman");
    //    var toAddress = new MailAddress(toEmail);
    //    const string fromPassword = "pftd vcjo cmrb bwtz"; // סיסמת הדוא"ל שלך
    //    const string subject = "Welcome to Our Service";
    //    string body = $"Your account has been created. Your password is: {randomPassword}";

    //    var smtp = new SmtpClient
    //    {
    //        Host = "smtp.gmail.com", // כתובת ה-SMTP שלך
    //        Port = 587, // או 465 אם אתה משתמש ב-SSL
    //        EnableSsl = true,
    //        DeliveryMethod = SmtpDeliveryMethod.Network,
    //        UseDefaultCredentials = false,
    //        Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
    //    };

    //    using (var message = new MailMessage(fromAddress, toAddress)
    //    {
    //        Subject = subject,
    //        Body = body
    //    })
    //    {
    //        await smtp.SendMailAsync(message);
    //    }
    //}
    // פונקציה לשליחת דוא"ל
    //private async Task SendEmail(string toEmail, string randomPassword)
    //{
    //    var fromAddress = new MailAddress("r0548571067@gmail.com", "Ruth Greiniman");
    //    var toAddress = new MailAddress(toEmail);
    //    const string fromPassword = "pftd vcjo cmrb bwtz"; // סיסמת הדוא"ל שלך
    //    const string subject = "Welcome to Our Service";

    //    string body = @"
    //<html>
    //<head>
    //    <style>
    //        body { font-family: Arial, sans-serif; }
    //        .header { background-color: #f2f2f2; padding: 10px; text-align: center; }
    //        .content { margin: 20px; }
    //        .footer { font-size: 12px; color: #888; text-align: center; margin-top: 20px; }
    //    </style>
    //</head>
    //<body>
    //    <div class='header'>
    //        <h1>Welcome to Our Service</h1>
    //    </div>
    //    <div class='content'>
    //        <h2>Your account has been created.</h2>
    //        <h2>Your password is: <strong>" + randomPassword + @"</strong></h2>
    //    </div>
    //    <div class='footer'>
    //        <h2>Thank you for joining us!</h2>
    //    </div>
    //</body>
    //</html>";

    //    var smtp = new SmtpClient
    //    {
    //        Host = "smtp.gmail.com", // כתובת ה-SMTP שלך
    //        Port = 587, // או 465 אם אתה משתמש ב-SSL
    //        EnableSsl = true,
    //        DeliveryMethod = SmtpDeliveryMethod.Network,
    //        UseDefaultCredentials = false,
    //        Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
    //    };

    //    using (var message = new MailMessage(fromAddress, toAddress)
    //    {
    //        Subject = subject,
    //        Body = body,
    //        IsBodyHtml = true // חשוב להגדיר זאת ל-true כדי שהמייל יתפרש כ-HTML
    //    })
    //    {
    //        await smtp.SendMailAsync(message);
    //    }
    //}
    // פונקציה לשליחת דוא"ל
    private async Task SendEmail(string toEmail, string randomPassword, string username)
    {
        var fromAddress = new MailAddress("r0548571067@gmail.com", "Ruth Greiniman");
        var toAddress = new MailAddress(toEmail);
        const string fromPassword = "pftd vcjo cmrb bwtz"; // סיסמת הדוא"ל שלך
        const string subject = "Welcome to Our Service";

        string body = @"
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .header { background-color: #f2f2f2; padding: 10px; text-align: center; }
            .content { margin: 20px; }
            .footer { font-size: 12px; color: #888; text-align: center; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class='header'>
            <h1>Hello " + username + @"!</h1>
            <h1>Welcome to Our Service</h1>
        </div>
        <div class='content'>
            <p>Your account has been created.</p>
            <p>Your password is: <strong>" + randomPassword + @"</strong></p>
        </div>
        <div class='footer'>
            <p>Thank you for joining us!</p>
        </div>
    </body>
    </html>";

        var smtp = new SmtpClient
        {
            Host = "smtp.gmail.com", // כתובת ה-SMTP שלך
            Port = 587, // או 465 אם אתה משתמש ב-SSL
            EnableSsl = true,
            DeliveryMethod = SmtpDeliveryMethod.Network,
            UseDefaultCredentials = false,
            Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
        };

        using (var message = new MailMessage(fromAddress, toAddress)
        {
            Subject = subject,
            Body = body,
            IsBodyHtml = true // חשוב להגדיר זאת ל-true כדי שהמייל יתפרש כ-HTML
        })
        {
            await smtp.SendMailAsync(message);
        }
    }
}
