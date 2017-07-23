var Index = new function () {
    var self = this;
    this.Release = false;

    this.Ready = function () {
        
        var winHt = $(window).height();
        $(".BannerImage").height(winHt);

        if(self.Release == true)
        {
            $("#debug").css({ "display": "none" })
            $("#release").css({ "display": "block" })
        }
        else
        {
            $("#release").css({ "display": "none" })
            $("#release").remove();
        }
    }
}
$(document).ready(Index.Ready);