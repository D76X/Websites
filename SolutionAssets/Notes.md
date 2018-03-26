# Angular

## Multiple Angular applications in the same website

1. [Add Angular 4 to an ASP.NETCore Project
](https://stackoverflow.com/questions/44684179/add-angular-4-to-an-asp-netcore-project/44684239#44684239)
1. [Mixing ASP.NET Web api with Angular 4 or Aurelia [closed]
](https://stackoverflow.com/questions/45508979/mixing-asp-net-web-api-with-angular-4-or-aurelia)
1. [Multi-Page Angular Applications](https://www.learnhowtoprogram.com/javascript/angular-extended/multi-page-angular-applications)
1. [Single-page application vs. multiple-page application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)
1. [Is AngularJS just for single-page applications (SPAs)?
](https://stackoverflow.com/questions/15231251/is-angularjs-just-for-single-page-applications-spas)
1. [Multiple Apps integration](https://github.com/angular/angular-cli/wiki/stories-multiple-apps)
1. [AngularJS: structuring a web application with multiple ng-apps](https://softwareengineering.stackexchange.com/questions/239056/angularjs-structuring-a-web-application-with-multiple-ng-apps)

***
# ASP.NET Core

## Set up the APS.NET Core application

- [TUTORIAL: CREATING BASIC ASP.NET CORE + ANGULAR 4 APPLICATION IN WINDOWS 10](https://www.infopulse.com/blog/tutorial-creating-basic-asp-net-core-angular-4-application-in-windows-10/)
 
---

### Setting up the watcher build in VSCODE or VS to rebuild and redeploy on changing \*.cs/*.ts.

- [Setting up the watcher build](https://app.pluralsight.com/player?course=visual-studio-code-aspdotnet-projects&author=shawn-wildermuth&name=visual-studio-code-aspdotnet-projects-m3&clip=8&mode=live)
- [Develop ASP.NET Core apps using dotnet watch](https://docs.microsoft.com/en-us/aspnet/core/tutorials/dotnet-watch)

You must learn how to set up the watcher build on the web project so that the site is rebuilt and redeployed to the development server each time a change is detected to one of the copiled files such as *.cs or *.ts ,etc. Changes to *.cshtml, *.css and *.html files will not cause a rebuild and redeploy of the project. for that you will need some other kind of watch over client side files.

1- In Visual Studio edit the *csproj file and add the following.

```
<ItemGroup>
    <DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="2.0.0" />
  </ItemGroup>
``` 

Afterwards run the following command.

``` dotnet restore``` 

It will restore the packages for the solution. The **ItemGroup** that was just added is for a meta-mutli-package so several packages will be imported and dowloaded to the solution. 

In order to start the build watch in the terminal set to the root of the web project run the following commad. 

``` dotnet watch run```

Notice that the **watch** option is used before the command run.

---

### Debug in VSCODE or VS with the watcher build

Now that you have the watcher build going you might want to debug from the IDE or VSCODE editor without having to stop the watcher build evry time. This is easily achived by **attaching the debugger to the process that runs the web application**. 

The instructions are similar for Visual Studio and VSCODE.

1. Open the debugger pane **CTRL+SHIF+D**.
2. From the drop downselect attach.
3. Select the **dotnet.exe** process running the **YouWebSide.dll**

Now set appropriate breakpoint in the relevant *cshtml and or *.cs files and reload the page to break on them, you can also inspecty locals and set up watches, of course.

---

### Set up a client side watch for automatic browser refreshing.

1. [Build Layout with CSS Grid - Development Environment](https://app.pluralsight.com/player?course=building-layouts-css-grid&author=gary-simon&name=5250b241-9183-439d-b8ec-c1e09e05cf66&clip=3&mode=live)
1. [Asp.Net Core 1.0 (aka Asp.Net 5) website refresh with any file change?
](https://stackoverflow.com/questions/35898746/asp-net-core-1-0-aka-asp-net-5-website-refresh-with-any-file-change)
1. [Browser Reload on Save Visual Studio Extension](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.BrowserReloadonSave)

There are a few ways to achieve this sort of set up we have used the following.

1. Make sure that npm is globally installed on your machine 
    - ```npm -v``` if not install it from the terminal. 
    - ```npm i -g npm``` or 
    - ```npm i -g npm to update```.

2. In the folder of your *.csproj run the following command.
    - ```npm init -y```  

    This creats a ```package.json``` file in the solution

3. Install **Gulp** as a development dependency with the following command.

    -```npm install browser-sync gulp --save-dev```

---

### Webpack

http://www.ryansouthgate.com/2017/08/29/asp-net-core-and-webpack-part-1/
https://app.pluralsight.com/library/courses/webpack-fundamentals/table-of-contents

### BrowserLink

https://docs.microsoft.com/en-us/aspnet/core/client-side/using-browserlink?tabs=aspnetcore2x 

### Use Gulp?
https://docs.microsoft.com/en-us/aspnet/core/client-side/bundling-and-minification?tabs=visual-studio%2Caspnetcore2x