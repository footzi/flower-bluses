
$(function(){
    $(window).hashchange([{
        hash:"/#/?_catalog?_k=",
        onSet:function(){
            $("#main").css({"display":"none"})
        },
         onRemove:function(){
                        $("#main").css({"display":"none"});

                        },
    }])
})