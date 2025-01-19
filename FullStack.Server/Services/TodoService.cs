using FullStack.Server.Interfaces.Repositories;
using FullStack.Server.Interfaces.Services;
using FullStack.Server.Models;

namespace FullStack.Server.Services
{
    public class TodoService : ITodoService
    {
        private readonly ITodoRepository _todoRepository;

        public TodoService(ITodoRepository todoRepository)
        {
            _todoRepository = todoRepository;
        }
        public async Task<List<Todo>> GetTodos()
        {
            return await _todoRepository.GetTodos();
        }
    }
}
