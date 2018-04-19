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
        public string Header { get; private set; }
        public string Title { get; private set; }
        public string UrlImage { get; private set; }
        public string UrlContent { get; private set; }
        public string Author { get; private set; }
        public string UrlAuthor { get; private set; }
        public string Published { get; private set; }

        public Tile(
            int id,
            string header,             
            string title, 
            string urlImage, 
            string urlContent, 
            string author,
            string urlAuthor,
            string publisged)
        {            
            this.Id = id;
            this.Header = header;
            this.Title = title;
            this.UrlImage = urlImage;
            this.UrlContent = urlContent;
            this.Author = author;
            this.UrlAuthor = urlAuthor;
            this.Published = publisged;
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
            if (fromId < 0) {
                return Error();
            }
            
            var baseUrl = "http://localhost:3000/";
            int tileId = fromId;
            var data = new List<Tile>();

            for (int i = 0; i < 3; i++) {

                data.Add(new Tile(
                    tileId,
                    $"header{tileId}",
                    $"Title{tileId}",
                    $"/images/tile_placeholder_red_300x150.svg",
                    //$"{baseUrl}tileimages/{tileId}",
                    $"{baseUrl}content/{tileId}",
                    $"Davide Spano",
                    $"{baseUrl}authors/{tileId}",
                    DateTime.Today.Date.ToString()));

                ++tileId;
            }

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
