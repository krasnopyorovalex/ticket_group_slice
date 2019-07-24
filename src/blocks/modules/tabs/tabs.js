(function () {

    const tabs = jQuery(".tabs");
    if(tabs.length){
        tabs.lightTabs();
    }

    const boxSelect = $(".list_teams, .tab_list-stages"),
        matchSchedule = $(".match_schedule");

    let state = {
        stage: 0,
        team: 0,
        setStage: function (value) {
            this.stage = value;
        },
        setTeam: function (value) {
            this.team = value;
        },
        getStage: function () {
            return this.stage;
        },
        getTeam: function () {
            return this.team;
        },
    };

    if(boxSelect.length){
        boxSelect.on("click", " > div:not(.active)", function () {
            let _this = $(this);
            const stage = parseInt(_this.attr("data-stage")),
                team = parseInt(_this.attr("data-team"));

            if (stage) {
                state.setStage(stage);
            }

            if (team) {
                state.setTeam(team);
            }

            return jQuery.ajax({
                type: "GET",
                dataType: "html",
                url: "/api/stage/" +  state.getStage() + "/team/" + state.getTeam(),
                beforeSend: function() {
                    return _this.addClass("is_loaded") && _this.siblings("div").removeClass("active") && _this.addClass("active");
                },
                success: function (response) {
                    return matchSchedule.find("> .container").html(response) && _this.removeClass("is_loaded");
                }
            });
        });
    }

})($);
