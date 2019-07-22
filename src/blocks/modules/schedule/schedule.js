(function () {

    const matchSchedule = $(".match_schedule, .popular_matches"),
        endpoint = "/api/matches",
        popupTickets = $(".popup_tickets");

    if (matchSchedule.length) {
        matchSchedule.on("click", ".btn_order:not(.is_loaded)", function () {
            let _this = $(this),
                matchId = _this.attr("data-match");

            return jQuery.ajax({
                type: "GET",
                dataType: "html",
                url: endpoint + "/" +  matchId,
                beforeSend: function() {
                    return _this.addClass("is_loaded");
                },
                success: function (data) {
                    return popupTickets.html(data) && popupTickets.fadeIn() && _this.removeClass("is_loaded");
                }
            });
        });

        const paginator = $(".paginator");

        if (paginator.length) {
            paginator.on("click", ".btn", function () {
                const _this = $(this),
                    lastPage = parseInt(_this.attr("data-last-page"));

                let currentPage = parseInt(_this.attr("data-current-page")) + 1;

                return $.get(endpoint + "?page=" + currentPage, function (response) {
                    _this.attr("data-current-page", currentPage);

                    _this.attr("data-current-page", currentPage);

                    paginator.before(response);

                    if (currentPage >= lastPage ) {
                        paginator.remove();
                    }

                    return true;
                });
            });
        }
    }
})($);
