(function () {

    const popupTickets = $(".popup_tickets"),
        popup = $(".popup"),
        popupBg = $(".popup_bg");

    if (popupTickets.length) {
        popupTickets.on("click", ".plus", function () {
            let count = $(this).prev("div");
            return count.text(parseInt(count.text()) + 1);
        });
        popupTickets.on("click", ".minus", function () {
            let count = $(this).next("div");
            let value = parseInt(count.text()) - 1;
            return count.text(value < 1 ? 1 : value);
        });
        popupTickets.on("click", ".close", function () {
            const box = $(this).closest(".popup_tickets");
            return box.fadeOut() && box.html("");
        });

        popupTickets.on("click", ".call_form-order", function () {
            const _this = $(this),
                box = _this.closest(".popup_tickets"),
                ticket = _this.closest(".tickets_item").find(".tickets_item-name");
            if (box.length) {
                box.hide() && box.html("");
            }

            const ticketsCount = _this.closest(".tickets_item").find(".tickets_count").text();

            popup.find(".match_info").val(_this.attr("data-match") + ", " + _this.attr("data-time"));
            popup.find(".ticket_info").val(ticket.text().trim() + " - " + parseInt(ticketsCount));
            return popup.fadeIn() && popupBg.fadeIn();
        });
        popup.on("click", ".close", function () {
            popup.find("form").trigger("reset");
            return popup.fadeOut() && popupBg.fadeOut();
        });
    }

})($);
