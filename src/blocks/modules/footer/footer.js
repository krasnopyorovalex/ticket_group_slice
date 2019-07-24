(function () {

    const formSubscribe = $(".form_subscribe");

    if (formSubscribe.length) {
        formSubscribe.on("submit", "form", function (e) {
            e.preventDefault();

            let _this = $(this),
                url = _this.attr('action'),
                data = _this.serialize(),
                submitBtn = _this.find(".submit .btn");

            return jQuery.ajax({
                type: "POST",
                dataType: "json",
                url: url,
                data: data,
                beforeSend: function() {
                    return submitBtn.addClass("is_loaded");
                },
                success: function (data) {
                    _this.trigger("reset") && submitBtn.removeClass("is_loaded");

                    return $(".notify").notify(data.message);
                }
            });
        });
    }
})($);
