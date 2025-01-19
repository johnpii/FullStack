using FullStack.Server.Data;
using FullStack.Server.Interfaces.Repositories;
using FullStack.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace FullStack.Server.Repositories
{
    public class TodoRepository : ITodoRepository
    {
        private readonly ApplicationDbContext _context;

        public TodoRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<Todo>> GetTodos()
        {
            return await _context.Todos.ToListAsync();
        }
    }
}
