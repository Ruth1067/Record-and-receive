//using Microsoft.AspNetCore.Mvc;
//using Google.Cloud.Speech.V1;
//using System;
//// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

//namespace FinalProject.Api.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class AIController : ControllerBase
//    {
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
//}

//using Google.Cloud.Speech.V1;
//using Microsoft.AspNetCore.Mvc;
//using System.IO;
//using System.Threading.Tasks;

//[Route("api/[controller]")]
//[ApiController]
//public class AIController : ControllerBase
//{
//    [HttpPost("transcribe")]
//    public async Task<IActionResult> TranscribeAudio([FromForm] IFormFile audioFile)
//    {
//        if (audioFile == null || audioFile.Length == 0)
//        {
//            return BadRequest("No audio file uploaded.");
//        }

//        string tempFilePath = Path.GetTempFileName();

//        using (var stream = new FileStream(tempFilePath, FileMode.Create))
//        {
//            await audioFile.CopyToAsync(stream);
//        }

//        var speech = SpeechClient.Create();
//        var response = speech.Recognize(new RecognitionConfig()
//        {
//            Encoding = RecognitionConfig.Types.AudioEncoding.Linear16,
//            SampleRateHertz = 16000,
//            LanguageCode = "he-IL"
//        }, RecognitionAudio.FromFile(tempFilePath));

//        var transcriptions = new List<string>();
//        foreach (var result in response.Results)
//        {
//            transcriptions.Add(result.Alternatives[0].Transcript);
//        }

//        // מחק את הקובץ הזמני
//        System.IO.File.Delete(tempFilePath);

//        return Ok(transcriptions);
//    }
//}
using Google.Cloud.Speech.V1;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class AIController : ControllerBase
{
    /// <summary>
    /// Transcribes the audio file located at the specified file path.
    /// </summary>
    /// <param name="filePath">The path to the audio file to transcribe.</param>
    /// <returns>A list of transcriptions.</returns>
    [HttpPost("transcribe")]
    [ProducesResponseType(typeof(List<string>), 200)]
    [ProducesResponseType(400)]
    public async Task<IActionResult> TranscribeAudio([FromBody] string filePath)
    {
        if (string.IsNullOrWhiteSpace(filePath) || !System.IO.File.Exists(filePath))
        {
            return BadRequest("Invalid file path.");
        }

        var speech = SpeechClient.Create();
        var response = speech.Recognize(new RecognitionConfig()
        {
            Encoding = RecognitionConfig.Types.AudioEncoding.Linear16,
            SampleRateHertz = 16000,
            LanguageCode = "he-IL"
        }, RecognitionAudio.FromFile(filePath));

        var transcriptions = new List<string>();
        foreach (var result in response.Results)
        {
            transcriptions.Add(result.Alternatives[0].Transcript);
        }

        return Ok(transcriptions);
    }
}
