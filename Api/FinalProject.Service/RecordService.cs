//using FinalProject.Core.Entities;
//using FinalProject.Core.Services;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace FinalProject.Service
//{
//    public class RecordService : Core.Services.IRecordService
//    {
//        private readonly List<PurchasedCourse> _recordings = new();

//        public void AddRecording(PurchasedCourse recording)
//        {
//            _recordings.Add(recording);
//        }

//        public PurchasedCourse GetRecording(int recordingId)
//        {
//            return _recordings.FirstOrDefault(r => r.RecordingId == recordingId);
//        }

//        public IEnumerable<PurchasedCourse> GetAllRecordings()
//        {
//            return _recordings;
//        }
//    }
//}

