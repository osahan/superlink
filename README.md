# superLink
Make block level element clickable

jQuery plugin and an Angularjs Directive for making any block element clickable without adding anchor around it. 

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.superLink.js`:

**jQuery plugin**

```html
<script src="jQuery.min.js"></script>  
<script src="dist/jQuery.superLink.min.js"></script>
```

**Angular Directive**

```html
<script src="angular.min.js"></script>  
<script src="dist/gs.superLink.min.js"></script>
```


## How to Use

**Syntax Example**
```css 
    [gs-super-link] {
        cursor: pointer;
    }
```
```html
    <div gs-super-link="http://www.google.com">
      
      This whole div is now clickable and will go to www.google.com
      
      <a href="http://www.cnn.com">This will still go to CNN.com</a>
      <button>This button will do whatever it is assigned to do :) </button>
      
    </div>
```

**jQuery**
```javascript
    $("[gs-super-link]").superLink();
```
**Live Demo:** [http://jsfiddle.net/jpf9gnor/](http://jsfiddle.net/jpf9gnor/)

**Angular**
```javascript
var myapp = angular.module('myapp', ['gs']);
```
**Live Demo:** [http://jsfiddle.net/em6x1d90/](http://jsfiddle.net/em6x1d90/)
