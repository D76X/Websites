this["Hbs"] = this["Hbs"] || {};
this["Hbs"]["templates"] = this["Hbs"]["templates"] || {};
this["Hbs"]["templates"]["tile"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"teil\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div>"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</div>    \r\n    <a href=\""
    + alias4(((helper = (helper = helpers.urlContent || (depth0 != null ? depth0.urlContent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlContent","hash":{},"data":data}) : helper)))
    + "\">\r\n        <div class=\"teil-image-container\">\r\n            <img class=\"teil-image\" src=\""
    + alias4(((helper = (helper = helpers.urlImage || (depth0 != null ? depth0.urlImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlImage","hash":{},"data":data}) : helper)))
    + "\" />\r\n        </div>\r\n    </a>\r\n    <div>\r\n        <h5>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h5>\r\n    </div>\r\n    <span>Published: "
    + alias4(((helper = (helper = helpers.published || (depth0 != null ? depth0.published : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"published","hash":{},"data":data}) : helper)))
    + ", Author: <a href=\""
    + alias4(((helper = (helper = helpers.urlAuthor || (depth0 != null ? depth0.urlAuthor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlAuthor","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a></span>\r\n</div>";
},"useData":true});