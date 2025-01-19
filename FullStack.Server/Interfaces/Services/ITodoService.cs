using FullStack.Server.Models;

namespace FullStack.Server.Interfaces.Services
{
    public interface ITodoService
    {
        Task<List<Todo>> GetTodos();
    }
}
