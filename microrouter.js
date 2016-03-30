/**
 * MicroRouter v0.1
 * ©2016 by Eduard Razhapov 
 * License: MIT
 */


;(function() {

var RouteItem = function (path, template, event) {
    this.path = path;
    this.template = template;
    this.event = event;
}

this.MicroRouter = function (options) {

    if (!options) {
        options = {
            view: ".view"
        };
    }

    this.routesList = [];
    var viewElement = document.querySelector(options.view);

    function doRoute() {
        var url = location.hash.slice(2) || '';
        var route = getRouteByUrl.call(this, url);
        loadTemplate(route);
    }


    function loadTemplate(route) {
        if (viewElement && route) {
            var templateElement = document.querySelector(route.template);
            if (templateElement) {
                viewElement.innerHTML = templateElement.innerHTML;
                if (route.event) route.event.call(window);
            }
        }
    }

    function getRouteByUrl(url) {
        for (var i = 0; i < this.routesList.length; i++) {
            if (this.routesList[i].path == url) {
                return this.routesList[i];
            }
        }
         if (this.routesList.length > 0) return this.routesList[0];
    }
    
    
    this.addRoute = function (path, template, event) {
    var templateElement = document.querySelector(template);
    if (templateElement) {
        templateElement.style.display = 'none';
        this.routesList.push(new RouteItem(path, template, event));
    } else {
        throw template + " not found in current DOM";
    }


    this.forceRoute = function (url) {
        var route = getRouteByUrl.call(this, url);
        window.location.hash = "/" + url;
        loadTemplate(route);
        };

    };

    window.addEventListener('load', doRoute.bind(this));
    window.addEventListener('hashchange', doRoute.bind(this));

};

})();