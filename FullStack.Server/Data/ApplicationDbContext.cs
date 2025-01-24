using FullStack.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace FullStack.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Todo> Todos { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Todo>().Property(x => x.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<Todo>().Property(t => t.Deadline).IsRequired();

            modelBuilder.Entity<Todo>().HasData(
                new Todo
                {
                    Id = 1,
                    Title = "Task with title and description",
                    Description = "This is a task with both a title and a description.",
                    Deadline = DateTime.Now.AddDays(2)
                },
                new Todo
                {
                    Id = 2,
                    Title = "Task with title only",
                    Deadline = DateTime.Now.AddDays(5)
                },
                new Todo
                {
                    Id = 3,
                    Description = "This task has no title but has a description.",
                    Deadline = DateTime.Now.AddDays(3)
                },
                new Todo
                {
                    Id = 4,
                    Title = "Complete task",
                    Description = "This task is completely filled.",
                    Deadline = DateTime.Now.AddDays(10)
                },
                new Todo
                {
                    Id = 5,
                    Deadline = DateTime.Now.AddDays(1)
                }
            );
        }
    }
}
