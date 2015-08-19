angular.module('templates-dist', ['../app/common/footer/footerView.html', '../app/common/header/headerView.html', '../app/components/about/aboutView.html', '../app/components/blog/blogView.html', '../app/components/contact/contactView.html', '../app/components/home/homeView.html', '../app/components/work/workView.html', '../app/components/workDetails/workDetailsView.html']);

angular.module("../app/common/footer/footerView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/common/footer/footerView.html",
    "This is my footer.");
}]);

angular.module("../app/common/header/headerView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/common/header/headerView.html",
    "<div class=\"sky\"></div>\n" +
    "<div class=\"ground\"></div>\n" +
    "<div class=\"name\"></div>\n" +
    "<nav>\n" +
    "	This is my header.\n" +
    "</nav>");
}]);

angular.module("../app/components/about/aboutView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/about/aboutView.html",
    "");
}]);

angular.module("../app/components/blog/blogView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/blog/blogView.html",
    "");
}]);

angular.module("../app/components/contact/contactView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/contact/contactView.html",
    "");
}]);

angular.module("../app/components/home/homeView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/home/homeView.html",
    "<div class=\"home\">\n" +
    "	{{test}}\n" +
    "\n" +
    "\n" +
    "	<div class=\"palette\">\n" +
    "		<div class=\"grass-light\"></div>\n" +
    "		<div class=\"grass-base\"></div>\n" +
    "		<div class=\"grass-dark\"></div>\n" +
    "\n" +
    "		<div class=\"leaves-light\"></div>\n" +
    "		<div class=\"leaves-base\"></div>\n" +
    "		<div class=\"leaves-dark\"></div>\n" +
    "\n" +
    "		<div class=\"trunk-light\"></div>\n" +
    "		<div class=\"trunk-base\"></div>\n" +
    "		<div class=\"trunk-dark\"></div>\n" +
    "\n" +
    "		<div class=\"mountain-light\"></div>\n" +
    "		<div class=\"mountain-base\"></div>\n" +
    "		<div class=\"mountain-dark\"></div>\n" +
    "\n" +
    "		<div class=\"snow-light\"></div>\n" +
    "		<div class=\"snow-base\"></div>\n" +
    "		<div class=\"snow-dark\"></div>\n" +
    "\n" +
    "		<div class=\"sky-light\"></div>\n" +
    "		<div class=\"sky-base\"></div>\n" +
    "		<div class=\"sky-dark\"></div>\n" +
    "\n" +
    "		<div class=\"water-light\"></div>\n" +
    "		<div class=\"water-base\"></div>\n" +
    "		<div class=\"water-dark\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("../app/components/work/workView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/work/workView.html",
    "");
}]);

angular.module("../app/components/workDetails/workDetailsView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/workDetails/workDetailsView.html",
    "");
}]);
