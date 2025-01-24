using FullStack.Server.Interfaces.Repositories;
using FullStack.Server.Interfaces.Services;
using FullStack.Server.Models;
using FullStack.Server.Utilities;

namespace FullStack.Server.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepo;

        public UserService(IUserRepository userRepo)
        {
            _userRepo = userRepo;
        }
        public void AddUser(RegistModel data)
        {
            User user = new User();
            user.Email = data.Email;
            user.Username = data.Username;
            user.Password = PasswordEncryption.EncryptPassword(data.Password);
            user.Role = "user";
            _userRepo.AddUser(user);
        }

        public bool ExistByEmail(string email)
        {
            return _userRepo.ExistByEmail(email);
        }

        public async Task<User> FindByEmailAndPassWord(string email, string password)
        {
            return await _userRepo.FindByEmailAndPassWord(email, password);
        }
    }
}
