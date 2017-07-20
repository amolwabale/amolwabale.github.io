var Index = new function () {
    var self = this;

    this.Ready = function () {
        
        var winHt = $(window).height();
        $(".BannerImage").height(winHt);
    }
}
$(document).ready(Index.Ready);