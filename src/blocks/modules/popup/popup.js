(function () {

    const tickets = $(".tickets");
    if (tickets.length) {
        tickets.on("click", ".plus", function () {
            let count = $(this).prev("div");
            return count.text(parseInt(count.text()) + 1);
        });
        tickets.on("click", ".minus", function () {
            let count = $(this).next("div");
            let value = parseInt(count.text()) - 1;
            return count.text(value < 1 ? 1 : value);
        });
    }

    const callFormOrder = $(".call_form-order"),
        popup = $(".popup");
    if(callFormOrder.length) {
        popup.after('<div class="popup_bg"></div>');
        let popupBg = $(".popup_bg");
        callFormOrder.on("click", function () {
            return popup.fadeIn() && popupBg.fadeIn();
        });
        popup.on("click", ".close", function () {
            return popup.fadeOut() && popupBg.fadeOut();
        });
    }

})($);
