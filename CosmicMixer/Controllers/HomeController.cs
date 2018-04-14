using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CosmicMixer.Models;

namespace CosmicMixer.Controllers
{
    public class Tile
    {
        public int Id { get; private set; }
        public string Title { get; private set; }
        public string UrlImage { get; private set; }
        public string UrlArticle { get; private set; }

        public Tile(int id, string title, string urlImage, string urlAritcle)
        {
            this.Id = id;
            this.Title = title;
            this.UrlImage = urlImage;
            this.UrlArticle = urlAritcle;
        }
    }

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetTiles(int fromId)
        {
            //object data = new { Id = fromId + 1 };

            // object tile1 = new { Id = fromId + 1 };
            // object tile2 = new { Id = fromId + 2 };
            // object tile3 = new { Id = fromId + 3 };
            // object data = new object[] { tile1, tile2, tile3 };

            var tile1 = new Tile(fromId + 1, "Tile-1", "http://localhost:3000/tileimage1", "http://localhost:3000/article1");
            var tile2 = new Tile(fromId + 2, "Tile-2", "http://localhost:3000/tileimage2", "http://localhost:3000/article2");
            var tile3 = new Tile(fromId + 3, "Tile-3", "http://localhost:3000/tileimage3", "http://localhost:3000/article3");

            var data = new List<Tile>() { tile1, tile2, tile3 };

            return Json(data);
        }

        /// <summary>
        /// Route 
        /// ../home/aspdotnetproject
        /// </summary>
        /// <returns></returns>
        public IActionResult AspDotNetProject()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
