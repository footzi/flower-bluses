import React from "react"; 
//jivosite

//(function(){ var widget_id = 'WeuwmmB6yg';var d=document;var w=window;function l(){
//var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

//яндекс метрика

    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter44294474 = new Ya.Metrika({
                    id:44294474,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");

<noscript><div><img src="https://mc.yandex.ru/watch/44294474" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

//переход по страничкам 

function navigationPage () {
        $(".pages-numbers-link1").addClass("pages-numbers-link-active");
         $(".product-preview").hide();
         $(".product-preview").slice(0,9).show();

         $(".pages-numbers-link1").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(0,9).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link1").addClass("pages-numbers-link-active");
        })
        
         $(".pages-numbers-link2").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(9,18).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link2").addClass("pages-numbers-link-active");
         })

          $(".pages-numbers-link3").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(18,27).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link3").addClass("pages-numbers-link-active");
         })

         $(".pages-numbers-link4").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(27,36).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link4").addClass("pages-numbers-link-active");
         })

         $(".pages-numbers-link5").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(36,45).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link5").addClass("pages-numbers-link-active");
         })

         $(".pages-numbers-link6").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(45,54).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link6").addClass("pages-numbers-link-active");
         })

         $(".pages-numbers-link7").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(54,63).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link7").addClass("pages-numbers-link-active");
         })

         $(".pages-numbers-link8").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(63,72).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link8").addClass("pages-numbers-link-active");
         })

          $(".pages-numbers-link9").click(function(){
            $(".product-preview").hide();
            $(".product-preview").slice(72,81).show();
            $(".pages-numbers-link").removeClass("pages-numbers-link-active");
            $(".pages-numbers-link9").addClass("pages-numbers-link-active");
         })

         $(".pages-numbers-link").click(function(){
             window.scrollTo(0,0)
          })
}

export default navigationPage;