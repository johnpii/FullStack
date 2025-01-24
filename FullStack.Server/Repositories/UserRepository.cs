using FullStack.Server.Data;
using FullStack.Server.Interfaces.Repositories;
using FullStack.Server.Models;
using FullStack.Server.Utilities;
using Microsoft.EntityFrameworkCore;

namespace FullStack.Server.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public bool ExistByEmail(string email)
        {
            return _context.Users.Any(p => p.Email == email);
        }

        public void AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public async Task<User> FindByEmailAndPassWord(string email, string password)
        {
            return await _context.Users.FirstOrDefaultAsync(p => p.Email == email && p.Password == PasswordEncryption.EncryptPassword(password));
        }
    }
}
