function start_vimeo(vimeo_ID, color, overlay) {
    $("#kh-vimeo-iframe").attr("src", "http://player.vimeo.com/video/" + vimeo_ID + "?color=" + color);
    $("#kh-vimeo-player").css("opacity", 1);
    $("#kh-vimeo-player").css("zIndex", 200);
    if (overlay) {
        $("#kh-vimeo-overlay").css("opacity", .65);
        $("#kh-vimeo-overlay").css("zIndex", 150);
    }
}

function stop_vimeo() {
    $("#kh-vimeo-iframe").attr("src", "");
    $("#kh-vimeo-player").css("opacity", 0);
    $("#kh-vimeo-player").css("zIndex", -1);
    $("#kh-vimeo-overlay").css("opacity", 0);
    $("#kh-vimeo-overlay").css("zIndex", -1);
}

function start_reel() {
    start_vimeo("75998400", "DE743B", false);
}

function init() {
    document.getElementById("kh-radio-reel").checked = true;
}
