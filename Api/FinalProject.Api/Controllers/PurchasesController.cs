///////using Microsoft.AspNetCore.Mvc;

//////namespace FinalProject.Api.Controllers
//////{
//////    [Route("api/[controller]")]
//////    [ApiController]
//////    public class RecordController : ControllerBase
//////    {
//////        // GET: api/<RecordController>
//////        [HttpGet]
//////        public IEnumerable<string> Get()
//////        {
//////            return new string[] { "value1", "value2" };
//////        }

//////        // GET api/<RecordController>/5
//////        [HttpGet("{id}")]
//////        public string Get(int id)
//////        {
//////            return "value";
//////        }

//////        // POST api/<RecordController>
//////        [HttpPost]
//////        public void Post([FromBody] string value)
//////        {
//////        }

//////        // PUT api/<RecordController>/5
//////        [HttpPut("{id}")]
//////        public void Put(int id, [FromBody] string value)
//////        {
//////        }

//////        // DELETE api/<RecordController>/5
//////        [HttpDelete("{id}")]
//////        public void Delete(int id)
//////        {
//////        }
//////    }
//////}
////using FinalProject.Core.Entities;
////using Microsoft.AspNetCore.Mvc;
////using System.Collections.Generic;

////[ApiController]
////[Route("api/[controller]")]
////public class PurchasesController : ControllerBase
////{
////    private static List<User> users = new List<User>();
////    private static List<Folder> courses = new List<Folder>(); // רשימת הקורסים

////    [HttpPost("{userId}/purchase/{courseId}")]
////    public ActionResult Purchase(int userId, int courseId)
////    {
////        var user = users.Find(u => u.Id == userId);
////        var course = courses.Find(c => c.CourseId == courseId);

////        if (user == null || course == null)
////        {
////            return NotFound("User or Course not found.");
////        }

////        // הוספת הקורס לרכישות של המשתמש
////        user.PurchasedCourses.Add(courseId);
////        course.IsPurchased = true; // עדכון מצב הקורס

////        return Ok($"Successfully purchased course {courseId}");
////    }

////    [HttpGet("{userId}/purchased")]
////    public ActionResult<List<Folder>> GetPurchasedCourses(int userId)
////    {
////        var user = users.Find(u => u.Id == userId);
////        if (user == null)
////        {
////            return NotFound("User not found.");
////        }

////        var purchasedCourses = courses.FindAll(c => user.PurchasedCourses.Contains(c.CourseId));
////        return Ok(purchasedCourses);
////    }
////}
////using Google.Cloud.Speech.V1;
////using System;

////class Program
////{
////    static void Main(string[] args)
////    {
////        var speech = SpeechClient.Create();
////        var response = speech.Recognize(new RecognitionConfig()
////        {
////            Encoding = RecognitionConfig.Types.AudioEncoding.Flac,
////            SampleRateHertz = 16000,
////            LanguageCode = "en-US",
////        }, RecognitionAudio.FromFile("C:\\Users\\user1\\Desktop\\‏‏תיקיה חדשה\\שירים צביקי מאהרל'ה\\נפתלי קמפה - חמול.mp3"));

////        foreach (var result in response.Results)
////        {
////            Console.WriteLine($"Transcript: {result.Alternatives[0].Transcript}");
////        }
////    }
////}
//using Google.Cloud.Speech.V1;
//using System;

//class Program
//{
//    //static void Main(string[] args)
//    //{
//        var speech = SpeechClient.Create();
//        var response = speech.Recognize(new RecognitionConfig()
//        {
//            Encoding = RecognitionConfig.Types.AudioEncoding.Mp3, // עדכון לקידוד MP3
//            SampleRateHertz = 16000,
//            LanguageCode = "en-US",
//            //LanguageCode = "he-IL",

//        }, RecognitionAudio.FromFile("C:\\Users\\user1\\Desktop\\REC026.WAV"));

//        foreach (var result in response.Results)
//        {
//            Console.WriteLine($"Transcript: {result.Alternatives[0].Transcript}");
//        }
//    //}
//}
