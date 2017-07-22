var Index = new function () {
    var self = this;

    this.Ready = function () {
        
        var winHt = $(window).height();
        $(".BannerImage").height(winHt);

        
        $(".freebirdFormviewerViewFormBanner").css({ "display": "none" });
    }
}
$(document).ready(Index.Ready);