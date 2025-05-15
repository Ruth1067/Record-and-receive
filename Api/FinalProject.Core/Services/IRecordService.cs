using FinalProject.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Services
{
    public interface IRecordService
    {
        void AddRecording(Record recording);
        Record GetRecording(int recordingId);
        IEnumerable<Record> GetAllRecordings();
    }
}
