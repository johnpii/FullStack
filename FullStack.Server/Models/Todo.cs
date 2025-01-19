namespace FullStack.Server.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Title { get; set; } = "Untitled";
        public string Description { get; set; } = "No description";
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime Deadline { get; set; }
    }
}
