(function () {

    let tabs = jQuery(".tabs");
    if(tabs.length){
        tabs.lightTabs();
    }

    let listCommands = $(".list_commands");
    if(listCommands.length){
        listCommands.on("click", " > div", function () {
            let _this = $(this);
            return _this.siblings("div").removeClass("active") && _this.addClass("active");
        });
    }

})($);
