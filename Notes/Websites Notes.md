# Angular

## Multiple Angular applications in the same website

1.  [Add Angular 4 to an ASP.NETCore Project
    ](https://stackoverflow.com/questions/44684179/add-angular-4-to-an-asp-netcore-project/44684239#44684239)
1.  [Mixing ASP.NET Web api with Angular 4 or Aurelia [closed]
    ](https://stackoverflow.com/questions/45508979/mixing-asp-net-web-api-with-angular-4-or-aurelia)
1.  [Multi-Page Angular Applications](https://www.learnhowtoprogram.com/javascript/angular-extended/multi-page-angular-applications)
1.  [Single-page application vs. multiple-page application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)
1.  [Is AngularJS just for single-page applications (SPAs)?
    ](https://stackoverflow.com/questions/15231251/is-angularjs-just-for-single-page-applications-spas)
1.  [Multiple Apps integration](https://github.com/angular/angular-cli/wiki/stories-multiple-apps)
1.  [AngularJS: structuring a web application with multiple ng-apps](https://softwareengineering.stackexchange.com/questions/239056/angularjs-structuring-a-web-application-with-multiple-ng-apps)

---

# ASP.NET Core

## Set up the APS.NET Core application

* [APS.NET Core Fundamentals](https://app.pluralsight.com/library/courses/aspdotnet-core-fundamentals/table-of-contents?aid=701j0000001heIpAAI)
* [TUTORIAL: CREATING BASIC ASP.NET CORE + ANGULAR 4 APPLICATION IN WINDOWS 10](https://www.infopulse.com/blog/tutorial-creating-basic-asp-net-core-angular-4-application-in-windows-10/)

## ASP.Net Core Configuration

Startup.cs is where most of the configuration is added the Startup.Configuration implements IConfiguration and IConfiguration is just a bit more of a dictionary. There are four sources of configuration which are picked up by the run time in the presented order below that is if a later source of setting redeclares a setting with the same key of a setting already added by ony of the upstream sources the setting value will be overwritten.

1.  appsettings.json
2.  User secrets
3.  Environmental variables
4.  Command line arguments => example `dotnet (watch) run Greetings="Haloha!"`

## launchSettings.json

The file `./Properties/launchSettings.json` controls the properties and settings of the **dotnet** process that is used to run the site when `dotnet run` or `dotnet watch run` are used. For example the port number on which the **Kestrel** web server will be listening to is set in this file.

---

### Setting up the watcher build in VSCODE or VS to rebuild and redeploy on changing \*.cs/\*.ts.

* [Setting up the watcher build](https://app.pluralsight.com/player?course=visual-studio-code-aspdotnet-projects&author=shawn-wildermuth&name=visual-studio-code-aspdotnet-projects-m3&clip=8&mode=live)
* [Develop ASP.NET Core apps using dotnet watch](https://docs.microsoft.com/en-us/aspnet/core/tutorials/dotnet-watch)

You must learn how to set up the watcher build on the web project so that the site is rebuilt and redeployed to the development server each time a change is detected to one of the copiled files such as _.cs or _.ts ,etc. Changes to _.cshtml, _.css and \*.html files will not cause a rebuild and redeploy of the project. for that you will need some other kind of watch over client side files.

1- In Visual Studio edit the \*csproj file and add the following.

```
<ItemGroup>
    <DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="2.0.0" />
</ItemGroup>
```

Afterwards run the following command.

`dotnet restore`

It will restore the packages for the solution. The **ItemGroup** that was just added is for a meta-mutli-package so several packages will be imported and dowloaded to the solution.

In order to start the build watch in the terminal set to the root of the web project run the following commad.

`dotnet watch run`

Notice that the **watch** option is used before the command run.

---

### Debug in VSCODE or VS with the watcher build

Now that you have the watcher build going you might want to debug from the IDE or VSCODE editor without having to stop the watcher build evry time. This is easily achived by **attaching the debugger to the process that runs the web application**.

The instructions are similar for Visual Studio and VSCODE.

1.  Open the debugger pane **CTRL+SHIF+D**.
2.  From the drop downselect attach.
3.  Select the **dotnet.exe** process running the **YouWebSide.dll**

Now set appropriate breakpoint in the relevant _cshtml and or _.cs files and reload the page to break on them, you can also inspecty locals and set up watches, of course.

---

## Gulp Task Runner and Watcher 

### Client side watch & automatic browser refreshing.

1.  [Build Layout with CSS Grid - Development Environment](https://app.pluralsight.com/player?course=building-layouts-css-grid&author=gary-simon&name=5250b241-9183-439d-b8ec-c1e09e05cf66&clip=3&mode=live)
1.  [Asp.Net Core 1.0 (aka Asp.Net 5) website refresh with any file change?
    ](https://stackoverflow.com/questions/35898746/asp-net-core-1-0-aka-asp-net-5-website-refresh-with-any-file-change)
1.  [Browser Reload on Save Visual Studio Extension](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.BrowserReloadonSave)

There are a few ways to achieve this sort of set up we have used the following.

1.  Make sure that npm is globally installed on your machine

    * `npm -v` if not install it from the terminal.
    * `npm i -g npm` or
    * `npm i -g npm to update`.

2.  In the folder of your \*.csproj run the following command.

    * `npm init -y`

    This creats a `package.json` file in the solution
    
---

### Use Gulp as Task Runner.

3.  Install **Gulp** as a development dependency with the following command.

    -`npm install browser-sync gulp --save-dev`

4.  Create `gulpfile.js` at the root of you project then add the following gulp task to it. Notice that in the script below the default task is set to run `'browser-sync'` as `default` task but this might change in time according to you needs.

    ```
    var gulp = require('gulp');
    var browserSync = require('browser-sync').create();

    gulp.task( 'default', [ 'browser-sync' ] )

    gulp.task('browser-sync', function() {

        browserSync.init({
            proxy: "localhost:53436",
            ui: {
                port: 53437
            },
        });
    ```
    ```

        // watch on every file in evry folder - it works but it is heavy handed
        // gulp.watch(["./**/*.*"]).on('change', browserSync.reload);

        gulp.watch(["./**/*.html", "./**/*.css", "./**/*.cshtml"])
        .on('change', browserSync.reload);
    }) ;

    ```

    Few things to notice.

    `proxy: "localhost:53436"` in the initialization of **browserSync** create a proxy to port 53436 on the localhost that is when the **asp.net** **Kestrel** web server is listening to. By default browser sync listen to request on http://localhost:3000/ but by proxying it to `"localhost:53436"` it is possible to forward the request to the asp.net site instead.

    In this version of the `guplfile.js` we set a watch using gulp instead of BrowserSync which would be also possible. The watch is on all `*.html, *.css, *.cshtml`. It is important to include the `*.cshtml` as well because **.cshtml files are not compiled files** hence the process started with `dotnet watch run` does not rebuild the project when \*cshtml files are changed as it is sufficient to just reload the page in the browser to see the changes take effect.

5.  It is now possble to run the gulp task runner so that the `'browser-sync'` is executed and browsersync becomes available. This also kicks start the watch over the changes to the files given to the gulp watch and any changes to such files are detected browsersync is reloaded in real time.
    However, there are a few more things to know in order to run gulp, refer to the following posts for the details. In essence if **Gulp** is not istalled globally and your version of npm is **>5.2** you can run gulp locally to the project using the following command in the terminal when it is executed in the project folder.

        ```npx gulp```

In Visual Studio an alternative way to interact with the gulpfile.js is by means of the **Task Runner Explorer**.

References

* [Why do we need to install gulp globally and locally?
  ](https://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally)
* [Browsersync Time-saving synchronised browser testing.](https://browsersync.io/)
* [Browsersync + Gulp.js](https://browsersync.io/docs/gulp)
* [Browsersync options](https://browsersync.io/docs/options)

---

### Should I use Gulp?

https://docs.microsoft.com/en-us/aspnet/core/client-side/bundling-and-minification?tabs=visual-studio%2Caspnetcore2x

#### Task Runner Explorer errors parsing gulpfine.js

[Error running Gulpfile from Visual Studio 2015 task runner](https://stackoverflow.com/questions/40372213/error-running-gulpfile-from-visual-studio-2015-task-runner)

---

## Webpack

http://www.ryansouthgate.com/2017/08/29/asp-net-core-and-webpack-part-1/
https://app.pluralsight.com/library/courses/webpack-fundamentals/table-of-contents

---

## Web Development in Visual Studio

### BrowserLink in Visual Studio

- [Browser Link in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/client-side/using-browserlink?tabs=aspnetcore2x)

### Format Razor views in Visual Studio Code

* [Formatting Razor Files in Visual Studio Code](https://stackoverflow.com/questions/48235450/formatting-razor-files-in-visual-studio-code)

---

## CDNs

https://www.asp.net/ajax/cdn?WT.mc_id=12833-DEV-sitepoint-othercontent#ajaxmicrosoftcom_renamed_to_ajaxaspnetcdncom_18

### Some popular CDNs

1. [Google Hosted Libraries](https://developers.google.com/speed/libraries/)
2. [Cloudfare](https://cdnjs.cloudflare.com)

---

## RequireJS

Set up the baseUrl to point to wwwroot.

1. [RequireJS - what should I set for the BaseUrl?](https://stackoverflow.com/questions/27869873/requirejs-what-should-i-set-for-the-baseurl)  
2. [ASP.NET MVC 6 application's virtual application root path](https://stackoverflow.com/questions/35082888/asp-net-mvc-6-applications-virtual-application-root-path)  

Use libraries from CDNs with RequireJS 

1. [require js loading scripts from cdn fail](https://stackoverflow.com/questions/14751996/require-js-loading-scripts-from-cdn-fail)  
2. [Require JS, Loading Libraries through CDN fails](https://stackoverflow.com/questions/32986660/require-js-loading-libraries-through-cdn-fails)  
3. [Loading Bootstrap from CDN with Require.js](https://stackoverflow.com/questions/13464846/loading-bootstrap-from-cdn-with-require-js)  

### RequireJS Optimizer

1. [Using jquery UI with require.js and CDN](https://stackoverflow.com/questions/14203974/using-jquery-ui-with-require-js-and-cdn)  

---

## Favicon

1. [How do I force a favicon refresh](https://stackoverflow.com/questions/2208933/how-do-i-force-a-favicon-refresh)

---

## NPM

- [Everything You Wanted To Know About package-lock.json But Were Too Afraid To Ask](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8)

---

### Add comments to articles

### Host on 

## Context

https://coding.abel.nu/2012/03/ef-migrations-command-reference/

https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/?view=aspnetcore-2.1

https://msdn.microsoft.com/en-us/library/jj591621(v=vs.113).aspx

https://stackoverflow.com/questions/19902756/asp-net-identity-dbcontext-confusion
