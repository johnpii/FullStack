using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace FullStack.Server.Helpers
{
    public static class AuthSettings
    {
        const string Key = "secret12secret12secret12secret12";
        public static TimeSpan expirationTime { get; set; } = TimeSpan.FromMinutes(4);

        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Key));
        }
    }
}
