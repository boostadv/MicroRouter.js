# MicroRouter.js
Simple and lighweight (less than 1KB) router for your Single Page Applications. 

## Installation

Put this text into `<head>` section:

```html
<script type="text/javascript" src="microrouter.min.js"></script>
``` 

## Getting started

1. Create a empty view `<div>` for content. 
2. Create MicroRouter object with view div selector as option:
```javascript
		var router = new MicroRouter({
			view: "#view"
		});
``` 
3. Create a `<div>` (or other elements) with content:
```html
	<div id="content_page1">Start Page</div>
	<div id="content_page2">Page 2</div>
``` 

**NOTE: All this elements will be hidden automaticly by**  `display: none`  **attribute**

4. Add routes:
```javascript
    router.addRoute("home", "#content_page1");
    router.addRoute("page2", "#content_page2");
``` 

**NOTE: The first route is a default route**

5. Profit!

## Functions

### addRoute(path, contentSelector, event) 

```javascript
    router.addRoute("home", ".content_page1", function() {
        //do something after content load
    });
``` 

### forceRoute(path) 

If you want to change view from yours JS code.

```javascript
 router.forceRoute("home");
``` 

## Options

* `routesList` array of `RouteItem` objects


