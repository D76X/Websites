using Microsoft.AspNetCore.Mvc;

namespace CosmicMixer.Areas.SampleApp.Controllers {

    [Area("SampleApp")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
