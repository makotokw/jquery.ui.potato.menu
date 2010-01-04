/*
 * jquery.ui.potato.menu
 * 
 * Copyright (c) 2009-2010 makoto_kw, http://www.makotokw.com
 * Licensed under the MIT license.
 * 
 * @author makoto_kw
 * @version 1.0
 */
(function(a){a.fn.extend({ptMenu:function(c){var b={vertical:false,menuItemSelector:"li",menuGroupSelector:"ul",firstClass:"potato-menu",menuItemClass:"potato-menu-item",menuGroupClass:"potato-menu-group",verticalClass:"potato-menu-vertical",holizontalClass:"potato-menu-holizontal",hasVerticalClass:"potato-menu-has-vertical",hasHolizontalClass:"potato-menu-has-holizontal",showDuration:350,hideDuration:100};var e=(typeof(c)!="string")?a.extend(b,c):a.extend(b,{});var d=a(this).addClass(e.firstClass).addClass((e.vertical)?e.verticalClass:e.holizontalClass);var g=d.find(e.menuItemSelector).addClass(e.menuItemClass);var f=d.find(e.menuGroupSelector).addClass(e.menuGroupClass);f.parent().each(function(i){var h=a(this).parent(e.menuGroupSelector+"."+e.firstClass).length==1&&!e.vertical;var j=a(this).addClass((h)?e.hasVerticalClass:e.hasHolizontalClass).children(e.menuGroupSelector+":first").addClass(e.verticalClass);a(this).hover(function(k){var l=(h)?{left:"0",top:""}:{left:a(this).width()+"px",top:"0"};j.css({left:l.left,top:l.top}).fadeIn(e.showDuration)},function(k){j.fadeOut(e.hideDuration)})});d.find('a[href^="#"]').click(function(){f.fadeOut(e.hideDuration);return(a(this).attr("href")=="#")?false:true});return this}})})(jQuery);