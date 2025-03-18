using FinalProject.Core.Repositories;
using FinalProject.Core.Services;
using FinalProject.Data;
using FinalProject.Data.Repositories;
using FinalProject.Service;
using System.Text.Json.Serialization;

namespace TipatChalav
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                options.JsonSerializerOptions.WriteIndented = true;
            });
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(opt => opt.AddPolicy("MyPolicy", policy =>
            {
                policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
            }));

            // builder.Services.AddTransient<IDataContext,DataContext>();

            builder.Services.AddScoped<IUserRepository, UserService>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();

            //builder.Services.AddScoped<ITeacherService, TeacherService>();
            //builder.Services.AddScoped<ITeacherRepository, TeacherRepository>();

            builder.Services.AddScoped<IRecordService, RecordService>();
            builder.Services.AddScoped<IRecordRepository, RecordRepository>();

            builder.Services.AddDbContext<DataContext>();
            // builder.Services.AddSingleton<DataContext>();
            //builder.Services.AddAutoMapper(typeof(MappingProfile));
            //builder.Services.AddSingleton<Mapping>();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors("MyPolicy");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}