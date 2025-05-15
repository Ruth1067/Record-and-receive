//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Amazon.S3;
//using Amazon.S3.Model;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Authorization;

//namespace FinalProject.Api.Controllers
//{
//    [ApiController]
//    [Route("api/upload")]
//    public class UploadController : ControllerBase
//    {
//        private readonly IAmazonS3 _s3Client;

//        public UploadController(IAmazonS3 s3Client)
//        {
//            _s3Client = s3Client;
//        }

//        [HttpPost("upload-file")]
//        //[Authorize(Policy = "TeacherOrAdmin")]
//        public async Task<IActionResult> UploadFile(IFormFile file)
//        {
//            if (file == null || file.Length == 0)
//            {
//                return BadRequest("No file uploaded.");
//            }

//            // זיהוי סוג הקובץ
//            var contentType = file.ContentType;

//            // בדיקות נוספות על סוג הקובץ
//            if (contentType != "image/jpeg" && contentType != "image/png" &&
//                contentType != "application/pdf" &&
//                contentType != "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
//            {
//                return BadRequest("Unsupported file type.");
//            }

//            // כאן תוכל להעלות את הקובץ ל-S3
//            var request = new PutObjectRequest
//            {
//                BucketName = "adminpermission", // שם הדלי שלך
//                Key = file.FileName,
//                InputStream = file.OpenReadStream(),
//                ContentType = contentType
//            };

//            await _s3Client.PutObjectAsync(request);

//            return Ok("File uploaded successfully.");
//        }
//    }
//}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Amazon.S3;
using Amazon.S3.Model;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace FinalProject.Api.Controllers
{
    [ApiController]
    [Route("api/upload")]
    public class UploadController : ControllerBase
    {
        private readonly IAmazonS3 _s3Client;
        //private const string BucketName = "adminpermission";

        public UploadController(IAmazonS3 s3Client)
        {
            _s3Client = s3Client;
        }

        [HttpPost("upload-file")]
        //[Authorize(Policy = "TeacherOrAdmin")]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            // כאן תוכל להעלות את הקובץ ל-S3
            var request = new PutObjectRequest
            {
                BucketName = "adminpermission", // שם הדלי שלך
                Key = file.FileName,
                InputStream = file.OpenReadStream(),
                ContentType = file.ContentType // נשמור את סוג הקובץ כפי שהוא
            };

            await _s3Client.PutObjectAsync(request);

            return Ok("File uploaded successfully.");
        }


        //[HttpGet("download-file/{fileName}")]
        //public async Task<IActionResult> DownloadFile(string fileName)
        //{
        //    try
        //    {
        //        var request = new GetObjectRequest
        //        {
        //            BucketName = "adminpermission", // שם הדלי שלך
        //            Key = fileName
        //        };

        //        using (var response = await _s3Client.GetObjectAsync(request))
        //        using (var responseStream = response.ResponseStream)
        //        {
        //            var memoryStream = new MemoryStream();
        //            await responseStream.CopyToAsync(memoryStream);
        //            memoryStream.Position = 0; // לאתחל את המיקום של ה-stream

        //            // קביעת סוג תוכן על בסיס סיומת הקובץ
        //            var contentType = GetContentType(fileName);

        //            // החזרת הקובץ עם סוג תוכן
        //            return File(memoryStream.ToArray(), contentType, fileName);
        //        }
        //    }
        //    catch (AmazonS3Exception e)
        //    {
        //        return NotFound("שגיאה בהורדת הקובץ: " + e.Message);
        //    }
        //    catch (Exception e)
        //    {
        //        return StatusCode(500, "שגיאה בלתי צפויה: " + e.Message);
        //    }
        //}

        //private string GetContentType(string fileName)
        //{
        //    var extension = Path.GetExtension(fileName).ToLowerInvariant();
        //    return extension switch
        //    {
        //        ".pdf" => "application/pdf",
        //        ".jpg" => "image/jpeg",
        //        ".jpeg" => "image/jpeg",
        //        ".png" => "image/png",
        //        ".txt" => "text/plain",
        //        // הוסף סוגי תוכן נוספים לפי הצורך
        //        _ => "application/octet-stream", // סוג תוכן ברירת מחדל
        //    };
        //}

        [HttpGet]
        public async Task<IActionResult> GetFiles()
        {
            var request = new ListObjectsV2Request
            {
                BucketName = "adminpermission"
            };

            var response = await _s3Client.ListObjectsV2Async(request);
            var files = response.S3Objects.Select(o => o.Key).ToList();

            return Ok(files);
        }
    }

    //[HttpGet("download-file/{fileName}")]
    //public async Task<IActionResult> DownloadFile(string fileName)
    //{
    //    try
    //    {
    //        var request = new GetObjectRequest
    //        {
    //            BucketName = "adminpermission", // שם הדלי שלך
    //            Key = fileName
    //        };

    //        using (var response = await _s3Client.GetObjectAsync(request))
    //        using (var responseStream = response.ResponseStream)
    //        {
    //            var memoryStream = new MemoryStream();
    //            await responseStream.CopyToAsync(memoryStream);
    //            memoryStream.Position = 0; // לאתחל את המיקום של ה-stream

    //            // החזרת הקובץ באמצעות FileContentResult
    //            return new FileContentResult(memoryStream.ToArray(), response.ContentType)
    //            {
    //                FileDownloadName = fileName // הגדרת שם הקובץ להורדה
    //            };
    //        }
    //    }
    //    catch (AmazonS3Exception e)
    //    {
    //        return NotFound("שגיאה בהורדת הקובץ: " + e.Message);
    //    }
    //    catch (Exception e)
    //    {
    //        return StatusCode(500, "שגיאה בלתי צפויה: " + e.Message);
    //    }
    //}
}

