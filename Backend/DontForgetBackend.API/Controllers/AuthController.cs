using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DontForgetBackend.Core.Interfaces;
using DontForgetBackend.Application.Service;
using DontForgetBackend.API.Contracts;

namespace DontForgetBackend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        public async Task<IResult> Authorization( LoginUserRequest request)
        {
            var token = await _authService.Login(request.Login, request.Password);

            HttpContext.Response.Cookies.Append("Token", token);

            return Results.Ok(token);
        }
    }
}
