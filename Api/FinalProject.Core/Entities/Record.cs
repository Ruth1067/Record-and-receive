using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Entities
{
    public class Record
    {
        public int TeacherId { get; set; }
        public int RecordingId { get; set; }
        public string Title { get; set; }
        public TimeSpan Duration { get; set; }
    }
}

