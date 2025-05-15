//using FinalProject.Core.DTOs;
//using FinalProject.Core.Entities;
//using FinalProject.Core.Repositories;


////[Route("api/[controller]")]
////[ApiController]
////public class UsersController : ControllerBase
////{
////    private readonly IUserRepository _repository;

////    public UsersController(IUserRepository repository)
////    {
////        _repository = repository;
////    }

////    [HttpGet("{id}")]
////    public ActionResult<UserDTO> GetById(int id)
////    {
////        var user = _repository.GetById(id);
////        if (user == null) return NotFound();
////        return new UserDTO
////        {
////            Id = user.Id,
////            Username = user.Username,
////            Email = user.Email,
////            PhoneNumber = user.PhoneNumber
////        };
////    }

////    [HttpPost]
////    public ActionResult<UserDTO> Create(User user)
////    {
////        _repository.Add(user);
////        return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
////    }
////}
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Mvc;

//[Route("api/[controller]")]
//[ApiController]
//public class UsersController : ControllerBase
//{
//    private readonly IUserRepository _repository;

//    public UsersController(IUserRepository repository)
//    {
//        _repository = repository;
//    }

//    [HttpGet]
//    public IEnumerable<UserDTO> Get()
//    {
//        return 
//    }

//    [HttpGet("{id}")]
//    public ActionResult<UserDTO> GetById(int id)
//    {
//        var user = _repository.GetById(id);
//        if (user == null) return NotFound();
//        return new UserDTO
//        {
//            Id = user.Id,
//            Username = user.Username,
//            Email = user.Email,
//            PhoneNumber = user.PhoneNumber
//        };
//    }

//    [HttpPost]
//    public ActionResult<UserDTO> Create(User user)
//    {
//        _repository.Add(user);
//        return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
//    }
//}
using AutoMapper;
using FinalProject.Api.Models;
using FinalProject.Core.DTOs;
using FinalProject.Core.Entities;
using FinalProject.Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinalProject.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    //public class UserController : ControllerBase
    //{

    //    private readonly IUserService _userService;
    //    private readonly IMapper _mapper;

    //    public UserController(IUserService userService, IMapper mapper)
    //    {
    //        _userService = userService;
    //        _mapper = mapper;
    //    }

    //    // GET: api/<TurnController>
    //    [HttpGet]
    //    public ActionResult<IEnumerable<User>> Get()
    //    {
    //        var user = _userService.GetAllAsync();
    //        var userDTO = _mapper.Map<IEnumerable<UserDTO>>(user);
    //        return Ok(userDTO);
    //    }

    //    // GET api/<TurnController>/5
    //    [HttpGet("{id}")]
    //    public ActionResult<User> Get(int id)
    //    {
    //        var user = _userService.GetByIdAsync(id);
    //        var userDTO = _mapper.Map<UserDTO>(user);

    //        if (userDTO is null)
    //        {
    //            return NotFound();
    //        }
    //        return Ok(userDTO);
    //    }

    //    ////POST api/<TurnController>
    //    //[HttpPost]
    //    //public ActionResult Post([FromBody] UserModel value)
    //    //{
    //    //    var user = new User { Id = 111, Username = "value.IdNurse", Password = "value.DateOfTurn", Email = "aaa", PhoneNumber = "aaa" };

    //    //    var newUser = _userService.PostUserAsync(user);

    //    //    if (value == null)
    //    //    {
    //    //        return NotFound();
    //    //    }

    //    //    return Ok(newUser);
    //    //}
    //    [HttpPost]
    //    public async Task<ActionResult<UserDTO>> Post([FromBody] UserModel value)
    //    {
    //        if (value == null)
    //        {
    //            return BadRequest();
    //        }

    //        var user = new User { Username = value.Username, Password = value.Password };
    //        var newUser = await _userService.PostUserAsync(user);

    //        return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
    //    }

    //    // PUT api/<TurnController>/5
    //    [HttpPut("{d}")]
    //    public ActionResult Put(string d, [FromBody] UserModel value)
    //    {
    //        var user = new User { Id = 111, Username = "value.IdNurse", Password = "value.DateOfTurn", Email = "aaa", PhoneNumber = "aaa" };

    //        var newUser = _userService.PutUserAsync(d, user);

    //        if (newUser is null)
    //            return NotFound();

    //        return Ok(newUser);
    //    }

    //    // DELETE api/<TurnController>/5
    //    [HttpDelete("{id}")]
    //    public ActionResult Delete(int id)
    //    {
    //        var user = _userService.DeleteUserAsync(id);

    //        if (user is null)
    //            return NotFound();
    //        else
    //            return Ok(user);
    //    }
    //}

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        // GET: api/<TurnController>
        [HttpGet]
        //[HttpGet("admin-only")]
        [Authorize(Policy = "AdminOnly")]
        public ActionResult<IEnumerable<User>> Get()
        {
            var user = _userService.GetAll();
            var userDTO = _mapper.Map<IEnumerable<UserDTO>>(user);
            return Ok(userDTO);
        }








        //GET api/<TurnController>/5
        //[HttpGet("admin-only")]
       
        [HttpGet("{id}")]
        [Authorize(Policy = "AdminOnly")]
        public ActionResult<User> Get(int id)
        {
            var user = _userService.GetById(id);
            var userDTO = _mapper.Map<UserDTO>(user);

            if (userDTO is null)
            {
                return NotFound();
            }
            return Ok(userDTO);
        }

        [HttpGet("{id}/folders")]
        [Authorize] // ניתן גישה לכל המשתמשים
        public ActionResult<IEnumerable<FolderDTO>> GetCoursesByUserId(int id)
        {
            var courses = _userService.GetFoldersByTeacherId(id); // הנחה שיש מתודה כזו בשירות המשתמשים
            var courseDTOs = _mapper.Map<IEnumerable<FolderDTO>>(courses);

            if (courseDTOs == null || !courseDTOs.Any())
            {
                return NotFound();
            }
            return Ok(courseDTOs);
        }

        [HttpGet("{id}/usersFolders")]
        [Authorize] // ניתן גישה לכל המשתמשים
        public ActionResult<IEnumerable<UserDTO>> GetUsersCoursesByUserId(int id)
        {
            var users = _userService.GetUsersFoldersByFolderId(id); // הנחה שיש מתודה כזו בשירות המשתמשים
            var userDTOs = _mapper.Map<IEnumerable<UserDTO>>(users);

            if (userDTOs == null || !userDTOs.Any())
            {
                return NotFound();
            }
            return Ok(userDTOs);
        }







        //POST api/<TurnController>
        //[HttpPost]
        //public ActionResult Post([FromBody] UserModel value)
        //{
        //    var user = new User { Id = 111, Username = "value.IdNurse", Password = "value.DateOfTurn", Email = "aaa", PhoneNumber = "aaa" };

        //    var newUser = _userService.PostUser(user);

        //    if (value == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(newUser);
        //}





        //[HttpPost]
        //    public ActionResult Post([FromBody] UserModel value)
        //    {
        //        var user = new User { Username = value.Username, Password = value.Password };
        //        var newUser = _userService.PostUser(user);
        //        var newUserDTO = _mapper.Map<UserDTO>(newUser); // הוספת המרה ל-DTO

        //        return CreatedAtAction(nameof(Get), new { Id = newUserDTO.PhoneNumber }, newUserDTO);
        //    }




        //////////not it
        // PUT api/<TurnController>/5
        //[HttpPut("{d}")]
        //public ActionResult Put(string d, [FromBody] UserModel value)
        //{
        //    var user = new User { Id = 111, Username = "value.IdNurse", Password = "value.DateOfTurn", Email = "aaa", PhoneNumber = "aaa" };

        //    var newUser = _userService.PutUser(d, user);

        //    if (newUser is null)
        //        return NotFound();

        //    return Ok(newUser);
        //}
        /////////


        ////////////////////
        //[HttpPut("{id}")]
        //[Authorize(Policy = "AdminOnly")]
        //public ActionResult Put(string id, [FromBody] UserModel value)
        //{
        //    // המרת id למספר שלם
        //    if (!int.TryParse(id, out var userId))
        //        return BadRequest("Invalid user ID.");

        //    // יצירת משתמש חדש
        //    var user = new User { Id = userId, Email = value.Email, Password = value.Password };

        //    // עדכון המשתמש
        //    _userService.PutUser(userId.ToString(), user);

        //    // קבלת המשתמש המעודכן
        //    var updatedUser = _userService.GetById(userId);
        //    if (updatedUser is null)
        //        return NotFound();

        //    var updatedUserDTO = _mapper.Map<UserDTO>(updatedUser);
        //    return Ok(updatedUserDTO);
        //}
        ///////////////////

        //[HttpPut("{id}")]
        //[Authorize(Policy = "AdminOnly")]
        //public ActionResult Put(string id, [FromBody] UserModel value)
        //{
        //    var user = new User { Email = value.Email, Password = value.Password };
        //    _userService.PutUser(id, user);

        //    var updatedUser = _userService.GetById(int.Parse(id));
        //    if (updatedUser is null)
        //        return NotFound();

        //    var updatedUserDTO = _mapper.Map<UserDTO>(updatedUser);
        //    return Ok(updatedUserDTO);
        //}

        ////////////////////////
        //[HttpDelete("{id}")]
        //[Authorize(Policy = "AdminOnly")]
        //public ActionResult Delete(int id)
        //{
        //    // מחיקת המשתמש
        //    var user = _userService.DeleteUser(id);

        //    if (user == null)
        //        return NotFound();
        //    else
        //        return Ok(user);
        //}
        /////////////////////////////////
        //DELETE api/<TurnController>/5
        //[HttpDelete("{id}")]
        //[Authorize(Policy = "AdminOnly")]
        //public ActionResult Delete(int id)
        //{
        //    var user = _userService.DeleteUser(id);

        //    if (user is null)
        //        return NotFound();
        //    else
        //        return Ok(user);
        //}
    }
}









    //private readonly IUserService _userService;
    //private readonly IMapper _mapper;

//public UserController(IUserService userService, IMapper mapper)
//{
//    _userService = userService;
//    _mapper = mapper;
//}

//// GET: api/user
//[HttpGet]
//[Authorize]
//public async Task<ActionResult<IEnumerable<UserDTO>>> Get()
//{
//    var users = await _userService.GetAllAsync();
//    var userDTOs = _mapper.Map<IEnumerable<UserDTO>>(users);
//    return Ok(userDTOs);
//}

//// GET api/user/5
//[HttpGet("{id}")]
//[Authorize]
//public async Task<ActionResult<UserDTO>> Get(int id)
//{
//    var user = await _userService.GetByIdAsync(id);
//    var userDTO = _mapper.Map<UserDTO>(user);

//    if (userDTO is null)
//    {
//        return NotFound();
//    }
//    return Ok(userDTO);
//}

//// POST api/user
////[HttpPost]
////public async Task<ActionResult<UserDTO>> Post([FromBody] UserPostModel value)
////{
////    var user = new User { Username = value.Username, Email = value.Email, PhoneNumber = value.PhoneNumber };
////    var newUser = await _userService.PostUserAsync(user);

////    return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
////}
//// POST api/user
//[HttpPost]
//public async Task<ActionResult<UserDTO>> Post([FromBody] UserModel value)
//{
//    var user = new User { Username = value.Username, Password = value.Password };
//    var newUser = await _userService.PostUserAsync(user);
//    var newUserDTO = _mapper.Map<UserDTO>(newUser); // הוספת המרה ל-DTO

//    return CreatedAtAction(nameof(Get), new { Password = newUserDTO.Password }, newUserDTO);
//}

//// PUT api/user/5
//[HttpPut("{id}")]
//[Authorize]
//public async Task<ActionResult<UserDTO>> Put(string id, [FromBody] UserModel value)
//{
//    var user = new User { Username = value.Username, Password = value.Password };
//    await _userService.PutUserAsync(id, user);

//    var updatedUser = await _userService.GetByIdAsync(int.Parse(id));
//    if (updatedUser is null)
//        return NotFound();

//    var updatedUserDTO = _mapper.Map<UserDTO>(updatedUser);
//    return Ok(updatedUserDTO);
//}

//// DELETE api/user/5
//[HttpDelete("{id}")]
//[Authorize]
//public async Task<ActionResult> Delete(int id)
//{
//    var result = await _userService.DeleteUserAsync(id);

//    if (!result)
//        return NotFound();
//    else
//        return NoContent();
//}

