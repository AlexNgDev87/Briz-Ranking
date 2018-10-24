using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebsiteRanking.Models;
using WebsiteRanking.Services;

namespace WebsiteRanking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebsiteController : ControllerBase
    {
        [HttpPost("rank")]
        public async Task<IActionResult> RankAgain([FromBody] SearchViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var service = new RankService(model.Url, model.Keyword);
            var results = await service.GetRankings();

            return Ok(results.ToList());
        }
    }
}