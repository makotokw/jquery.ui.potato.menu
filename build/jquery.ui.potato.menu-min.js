/*!
 * jquery.ui.potato.menu
 * 
 * Copyright (c) 2009-2011 makoto_kw, http://www.makotokw.com
 * Licensed under the MIT license.
 * 
 * @author makoto_kw
 * @version 1.1
 */
(function(a){function c(){var c=typeof arguments[0]!="string"?a.extend(b,arguments[0]):a.extend(b,{});var d=c.alignBottom===true;var e=a(this).addClass(c.rootClass+" "+c.menuGroupClass).addClass(c.vertical?c.verticalClass:c.horizontalClass);var f=e.find(c.menuItemSelector).addClass(c.menuItemClass);var g=e.find(c.menuGroupSelector).addClass(c.menuGroupClass);f.hover(function(b){a(this).addClass(c.hoverClass)},function(b){a(this).removeClass(c.hoverClass)});g.parent().each(function(b){var e=a(this);var f=e.parent().hasClass(c.horizontalClass)?"bottom":"right";e.addClass(f=="bottom"?c.hasVerticalClass:c.hashorizontalClass);var g=e.find(c.menuGroupSelector+":first").addClass(c.verticalClass);e.hover(function(b){var h=f=="bottom"?{left:"0",top:""}:{left:a(this).width()+"px",top:d?e.height()-g.height()+"px":"0px"};g.css({left:h.left,top:h.top}).fadeIn(c.showDuration)},function(a){g.fadeOut(c.hideDuration)})});e.find('a[href^="#"]').click(function(){g.fadeOut(c.hideDuration);return a(this).attr("href")!="#"});return this}var b={vertical:false,alignBottom:false,menuItemSelector:"li",menuGroupSelector:"ul",rootClass:"potato-menu",menuItemClass:"potato-menu-item",menuGroupClass:"potato-menu-group",verticalClass:"potato-menu-vertical",horizontalClass:"potato-menu-horizontal",hasVerticalClass:"potato-menu-has-vertical",hashorizontalClass:"potato-menu-has-horizontal",hoverClass:"potato-menu-hover",showDuration:350,hideDuration:100};a.fn.extend({ptMenu:c})})(jQuery)