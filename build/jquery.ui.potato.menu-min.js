/*
 * jquery.ui.potato.menu
 * 
 * Copyright (c) 2009-2010 makoto_kw, http://www.makotokw.com
 * Licensed under the MIT license.
 * 
 * @author makoto_kw
 * @version 1.1
 */
(function(a){var b={vertical:false,menuItemSelector:"li",menuGroupSelector:"ul",rootClass:"potato-menu",menuItemClass:"potato-menu-item",menuGroupClass:"potato-menu-group",verticalClass:"potato-menu-vertical",holizontalClass:"potato-menu-holizontal",hasVerticalClass:"potato-menu-has-vertical",hasHolizontalClass:"potato-menu-has-holizontal",hoverClass:"potato-menu-hover",showDuration:350,hideDuration:100};function c(){var e=(typeof(arguments[0])!="string")?a.extend(b,arguments[0]):a.extend(b,{});var d=a(this).addClass(e.rootClass+" "+e.menuGroupClass).addClass((e.vertical)?e.verticalClass:e.holizontalClass);var g=d.find(e.menuItemSelector).addClass(e.menuItemClass);var f=d.find(e.menuGroupSelector).addClass(e.menuGroupClass);g.hover(function(h){a(this).addClass(e.hoverClass)},function(h){a(this).removeClass(e.hoverClass)});f.parent().each(function(h){var k=a(this);var i=(k.parent().hasClass(e.holizontalClass))?"bottom":"right";k.addClass((i=="bottom")?e.hasVerticalClass:e.hasHolizontalClass);var j=k.find(e.menuGroupSelector+":first").addClass(e.verticalClass);k.hover(function(l){var m=(i=="bottom")?{left:"0",top:""}:{left:a(this).width()+"px",top:"0"};j.css({left:m.left,top:m.top}).fadeIn(e.showDuration)},function(l){j.fadeOut(e.hideDuration)})});d.find('a[href^="#"]').click(function(){f.fadeOut(e.hideDuration);return(a(this).attr("href")!="#")});return this}a.fn.extend({ptMenu:c})})(jQuery);