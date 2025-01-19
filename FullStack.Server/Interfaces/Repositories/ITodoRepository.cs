using FullStack.Server.Models;

namespace FullStack.Server.Interfaces.Repositories
{
    public interface ITodoRepository
    {
        Task<List<Todo>> GetTodos();
    }
}
