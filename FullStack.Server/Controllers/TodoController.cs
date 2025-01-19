using FullStack.Server.Interfaces.Services;
using FullStack.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace FullStack.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController
    {
        private readonly ITodoService _todoService;

        public TodoController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet("GetTodos")]
        public async Task<List<Todo>> GetTodos() 
        {
            return await _todoService.GetTodos();
        }
    }
}
