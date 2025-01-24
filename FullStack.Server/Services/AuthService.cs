using FullStack.Server.Helpers;
using FullStack.Server.Interfaces.Services;
using FullStack.Server.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace FullStack.Server.Services
{
    public class AuthService : IAuthService
    {
        public List<Claim> GetClaims(User user)
        {
            var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.Username),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
                };

            return claims;
        }

        public string GenerateJWT(List<Claim> claims)
        {
            var now = DateTime.UtcNow;

            var jwt = new JwtSecurityToken(
            notBefore: now,
            claims: claims,
            expires: now.Add(AuthSettings.expirationTime),
            signingCredentials: new SigningCredentials(AuthSettings.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }
    }
}
