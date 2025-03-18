using FinalProject.Core.DTOs;
using FinalProject.Core.Entities;
using FinalProject.Core.Repositories;


//[Route("api/[controller]")]
//[ApiController]
//public class UsersController : ControllerBase
//{
//    private readonly IUserRepository _repository;

//    public UsersController(IUserRepository repository)
//    {
//        _repository = repository;
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
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly IUserRepository _repository;

    public UsersController(IUserRepository repository)
    {
        _repository = repository;
    }

    [HttpGet("{id}")]
    public ActionResult<UserDTO> GetById(int id)
    {
        var user = _repository.GetById(id);
        if (user == null) return NotFound();
        return new UserDTO
        {
            Id = user.Id,
            Username = user.Username,
            Email = user.Email,
            PhoneNumber = user.PhoneNumber
        };
    }

    [HttpPost]
    public ActionResult<UserDTO> Create(User user)
    {
        _repository.Add(user);
        return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
    }
}
