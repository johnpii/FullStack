using FullStack.Server.Interfaces.Services;
using FullStack.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FullStack.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : Controller
    {
        private readonly IUserService _userService;
        private readonly IAuthService _authService;

        public AuthController(IUserService userService, IAuthService authService)
        {
            _userService = userService;
            _authService = authService;
        }
        [HttpPost("Regist")]
        public async Task<IActionResult> Regist(RegistModel data)
        {
            if (ModelState.IsValid)
            {
                if (!_userService.ExistByEmail(data.Email))
                {
                    _userService.AddUser(data);
                    return Ok();
                }
                else
                {
                    return BadRequest("Пользователь с такой почтой уже существует ! ");
                }
            }
            else
            {
                return BadRequest("Некорректные данные ! ");
            }
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginModel data)
        {
            if (ModelState.IsValid)
            {
                User? user = await _userService.FindByEmailAndPassWord(data.Email, data.Password);
                if (user is null)
                {
                    return BadRequest("Пользователь не найден или неправильные данные ! ");
                }

                var claims = _authService.GetClaims(user);


                var jwt = _authService.GenerateJWT(claims);

                Response.Cookies.Append("test_jwt", jwt);

                return Ok();
            }
            else
            {
                return BadRequest("Некорректные данные ! ");
            }
        }

        [Authorize(Roles = "user")]
        [HttpGet("Logout")]
        public void Logout()
        {
            Response.Cookies.Delete("test_jwt");
        }
    }
}
