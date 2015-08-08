angular.module('templates-dist', ['../app/common/footer/footerView.html', '../app/common/header/headerView.html', '../app/components/about/aboutView.html', '../app/components/blog/blogView.html', '../app/components/contact/contactView.html', '../app/components/home/homeView.html', '../app/components/work/workView.html', '../app/components/workDetails/workDetailsView.html']);

angular.module("../app/common/footer/footerView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/common/footer/footerView.html",
    "This is my footer.");
}]);

angular.module("../app/common/header/headerView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/common/header/headerView.html",
    "This is my header.\n" +
    "<nav>\n" +
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
    "This is home. {{test}}");
}]);

angular.module("../app/components/work/workView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/work/workView.html",
    "");
}]);

angular.module("../app/components/workDetails/workDetailsView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/workDetails/workDetailsView.html",
    "");
}]);
