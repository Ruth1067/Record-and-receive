using FinalProject.Core.Entities;
using FinalProject.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Service
{
    public class RecordService : IRecordService
    {
        private readonly List<Record> _recordings = new();

        public void AddRecording(Record recording)
        {
            _recordings.Add(recording);
        }

        public Record GetRecording(int recordingId)
        {
            return _recordings.FirstOrDefault(r => r.RecordingId == recordingId);
        }

        public IEnumerable<Record> GetAllRecordings()
        {
            return _recordings;
        }
    }
}

