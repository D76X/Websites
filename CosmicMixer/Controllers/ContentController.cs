using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CodeRambo.Controllers {

    public class ArticleModel {

        public readonly int Id;

        public ArticleModel(int id) {
            Id = id;
        }
    }

    public class ContentController : Controller {        

        // GET: Content
        //[Route("Content/Index")]
        public IActionResult Article(int id) {

            var articleModel = new ArticleModel(id);

            return View(articleModel);
        }

        //// GET: Content/Details/5
        //public ActionResult Details(int id)
        //{
        //    return View();
        //}

        //// GET: Content/Create
        //public ActionResult Create()
        //{
        //    return View();
        //}

        // POST: Content/Create
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Create(IFormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add insert logic here

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: Content/Edit/5
        //public ActionResult Edit(int id)
        //{
        //    return View();
        //}

        // POST: Content/Edit/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add update logic here

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: Content/Delete/5
        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        //// POST: Content/Delete/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Delete(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add delete logic here

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}
    }
}