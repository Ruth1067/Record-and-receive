using AutoMapper;
using FinalProject;
using FinalProject.Core.DTOs;
using FinalProject.Core.Entities;
using FinalProject.Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


[Route("api/[controller]")]
[ApiController]
//[Authorize]
public class FolderController : ControllerBase
{
    private readonly IFolderService _folderService;
    private readonly IMapper _mapper;

    public FolderController(IFolderService folderService, IMapper mapper)
    {
        _folderService = folderService;
        _mapper = mapper;
    }

    // GET: api/<TurnController>
    [HttpGet]
    //[Authorize]
    public ActionResult<IEnumerable<Folder>> Get()
    {
        var folder = _folderService.GetAllFolders();
        var folderDTO = _mapper.Map<IEnumerable<FolderDTO>>(folder);
        return Ok(folderDTO);
    }
}

//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;

//[ApiController]
//[Route("api/[controller]")]
//public class FilesController : ControllerBase
//{
//    [HttpGet("admin-only")]
//    [Authorize(Policy = "AdminOnly")] // רק Admin יכול לגשת
//    public IActionResult AdminOnly()
//    {
//        return Ok("This is accessible only by Admins.");
//    }

//    [HttpGet("editor-or-admin")]
//    [Authorize(Policy = "EditorOrAdmin")] // Editor או Admin יכולים לגשת
//    public IActionResult EditorOrAdmin()
//    {
//        return Ok("This is accessible by Editors and Admins.");
//    }

//    [HttpGet("viewer-only")]
//    [Authorize(Policy = "ViewerOnly")] // רק Viewer יכול לגשת
//    public IActionResult ViewerOnly()
//    {
//        return Ok("This is accessible only by Viewers.");
//    }

//    [HttpGet("authenticated-only")]
//    [Authorize] // כל משתמש מאומת יכול לגשת
//    public IActionResult AuthenticatedOnly()
//    {
//        return Ok("This is accessible by any authenticated user.");
//    }
//}