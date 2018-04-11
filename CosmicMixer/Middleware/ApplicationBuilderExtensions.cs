using Microsoft.Extensions.FileProviders;
using System.IO;

/// <summary>
/// These extension methods for IApplicationBuilder are added to the same 
/// Microsoft.AspNetCore.Builder namespace used by Microsoft for consistency
/// and to make them available in intellisense in Startup.cs without having 
/// to add any additional namespace using statements.
/// </summary>
namespace Microsoft.AspNetCore.Builder {

    public static class ApplicationBuilderExtensions {


        /// <summary>
        /// This extension method is used to add an instance of the Static Files middleware to the 
        /// middleware pipeline of an ASP.NET Core application to serve content from the node_modules
        /// folder when npm is installed in the project. This may be useful during development in 
        /// order to serve static files contet directly from node_modules. The default Static Files 
        /// middleware only serves static files located under the root od the site wwwroot but the 
        /// distributable files such as *.js, *min.js, *.css, *.min.css that may be available in the 
        /// npm packages downloaded to the project folder node_modules are not under the wwwroot folder.
        /// </summary>
        /// <param name="app">The instance of the <see cref="IApplicationBuilder"/></param>
        /// <param name="projectRoot">The absolute path of the ASP.NET Core project</param>
        /// <returns></returns>
        public static IApplicationBuilder UseNodeModules(
            this IApplicationBuilder app, 
            string projectRoot) {

            // options for the static file middleware
            var options = new StaticFileOptions();

            // this middleware will match requests for static files that starts with /node_modules
            // For example the inclusion of this script in teh <head> of a page or _Layout.cshtml.
            // <script src="~/node_modules/jquery/dist/jquery.min.js"></script>
            options.RequestPath = @"/node_modules";

            // The middleware must know where to look for the resorces asked in the request on the 
            // file system. We use the Path class to take care of the differences in the path syntax
            // on the different OSs.
            var node_modules_path = Path.Combine(projectRoot, "node_modules");
            options.FileProvider = new PhysicalFileProvider(node_modules_path);

            // add the instance of the static file middleware
            app.UseStaticFiles(options);

            return app;
        }
    }
}
