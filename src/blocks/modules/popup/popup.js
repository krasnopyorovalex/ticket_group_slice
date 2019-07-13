(function () {

    let tickets = $(".tickets");
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

})($);
