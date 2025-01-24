using FullStack.Server.Models;

namespace FullStack.Server.Interfaces.Services
{
    public interface IUserService
    {
        bool ExistByEmail(string email);
        void AddUser(RegistModel user);
        Task<User> FindByEmailAndPassWord(string email, string password);
    }
}
