jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder,
            barheight:64,
            showtitle:true,
            showdescription:false,
            shownavigation:false,
            thumbwidth:80,
            thumbheight:60,
            thumbtopmargin:12,
            thumbbottommargin:8,
            titlebottomcss:'{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}',
            descriptionbottomcss:'{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}'
        });
    }
    jQuery("#amazingcarousel-1").amazingcarousel({
        jsfolder:jsFolder,
        width:350,
        height:450,
        skinsfoldername:"",
        itembottomshadowimagetop:99,
        random:false,
        skin:"Highlight",
        responsive:true,
        itembottomshadowimage:"itembottomshadow-100-98-3.png",
        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",
        showhoveroverlayalways:false,
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        supportiframe:false,
        lightboxthumbwidth:80,
        imagefillcolor:"FFFFFF",
        showwatermark:false,
        arrowwidth:42,
        transparent:false,
        watermarkpositioncss:"display:block;position:absolute;bottom:8px;right:8px;",
        lightboxthumbheight:60,
        navspacing:8,
        playvideoimage:"playvideo-64-64-0.png",
        usescreenquery:false,
        screenquery:{
	tablet: {
		screenwidth: 900,
		visibleitems: 2
	},
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        navwidth:16,
        navheight:16,
        watermarkimage:"",
        watermarkstyle:"text",
        imageheight:271,
        lightboxthumbbottommargin:8,
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        enabletouchswipe:true,
        navstyle:"none",
        arrowstyle:"always",
        navswitchonmouseover:false,
        showitembackgroundimage:false,
        watermarklink:"http://amazingcarousel.com?source=watermark",
        arrowimage:"arrows-42-60-0.png",
        showbackgroundimage:false,
        spacing:4,
        scrollitems:1,
        navdirection:"horizontal",
        watermarktarget:"_blank",
        bottomshadowimagewidth:110,
        donotcrop:false,
        showhoveroverlay:false,
        height:450,
        itembackgroundimagewidth:100,
        backgroundimagetop:-40,
        hoveroverlayimage:"hoveroverlay-64-64-0.png",
        width:350,
        watermarktext:"amazingcarousel.com",
        lightboxshownavigation:false,
        itembackgroundimage:"",
        direction:"horizontal",
        transitioneasing:"easeOutExpo",
        lightboxbarheight:64,
        showplayvideo:false,
        pauseonmouseover:true,
        navimage:"bullet-16-16-0.png",
        lightboxthumbtopmargin:12,
        arrowhideonmouseleave:1000,
        backgroundimagewidth:110,
        loop:0,
        arrowheight:60,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        lightboxshowdescription:false,
        bottomshadowimagetop:95,
        showitembottomshadow:true,
        playvideoimagepos:"center",
        circular:true,
        showbottomshadow:false,
        itembackgroundimagetop:0,
        imagewidth:350,
        scrollmode:"page",
        backgroundimage:"",
        navmode:"page",
        interval:3000,
        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#666;padding:2px 4px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
        itembottomshadowimagewidth:100,
        visibleitems:3,
        lightboxshowtitle:true,
        autoplay:false,
        transitionduration:1000
    });
});