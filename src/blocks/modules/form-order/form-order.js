(function () {

    const formOrder = $(".popup");

    if (formOrder.length) {
        formOrder.on("submit", "form", function (e) {
            e.preventDefault();

            let _this = $(this),
                url = _this.attr('action'),
                data = _this.serialize(),
                submitBtn = _this.find(".submit .btn"),
                agree = _this.find(".i_agree input[type=checkbox]");

            if (agree.length && ! agree.prop("checked")) {
                agree.closest(".i_agree").find(".error").fadeIn().delay(3000).fadeOut();
                return false;
            }

            return jQuery.ajax({
                type: "POST",
                dataType: "json",
                url: url,
                data: data,
                beforeSend: function() {
                    return submitBtn.addClass("is_loaded");
                },
                success: function (response) {
                    _this.trigger("reset") && submitBtn.removeClass("is_loaded");

                    return formOrder.fadeOut() && $(".notify").notify(response.message);
                }
            });
        });
    }
})($);
