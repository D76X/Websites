using CodeRambo.Entities;
using CodeRambo.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace CodeRambo.Controllers {    

    public class HomeController : Controller {

        readonly SiteDbContext siteDbContext;

        public HomeController(SiteDbContext siteDbContext) {

            this.siteDbContext = siteDbContext;
        }

        public IActionResult Index() {
            return View();
        }

        //public IActionResult GetTiles(int fromId, int numTeils) {

        //    return Error();            
        //}

        public IActionResult GetTiles(int fromId, int numTeils)
        {

            //return Error();

            if (fromId < 0 || numTeils < 0)
            {
                return Error();
            }

            string baseUrl = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";

            int tileId = fromId;
            var data = new List<Tile>();

            //if (fromId > 18) {
            //    return Json(data);
            //}

            for (int i = 0; i < numTeils; i++)
            {

                data.Add(new Tile(
                    tileId,
                    $"header{tileId}",
                    $"Title{tileId}",
                    $"/images/tile_placeholder_red_300x150.svg",
                    $"{baseUrl}/content/{tileId}",
                    null, //$"Davide Spano",
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
        public IActionResult AspDotNetProject() {
            return View();
        }

        public IActionResult About() {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact() {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error() {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
