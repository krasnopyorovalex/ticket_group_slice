(function($){
    jQuery.fn.lightTabs = function(){

        let createTabs = function(){
            const tabs = this;
            let i = 0;

            let showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).fadeIn("fast");
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            };

            showPage(0);

            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").click(function(){
                let that = $(this);
                if (that.hasClass("active")) {
                    return false;
                }

                return showPage(parseInt(that.attr("data-page")));
            });
        };

        return this.each(createTabs);
    };
})(jQuery);
