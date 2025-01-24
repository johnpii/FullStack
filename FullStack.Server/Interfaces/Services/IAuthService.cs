using FullStack.Server.Models;
using System.Security.Claims;

namespace FullStack.Server.Interfaces.Services
{
    public interface IAuthService
    {
        List<Claim> GetClaims(User user);
        string GenerateJWT(List<Claim> claims);
    }
}
