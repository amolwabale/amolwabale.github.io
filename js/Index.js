var Index = new function () {
    var self = this;
    this.Release = true;

    this.Ready = function () {
        
        var winHt = $(window).height();
        $(".BannerImage").height(winHt);

        $("#portfolio").height(winHt);

        if(self.Release == true)
        {
            $("#debug").css({ "display": "none" })
            $("#release").css({ "display": "block" })
        }
        else
        {
            $("#release").remove();
            $(".loadingText").text("Profile closed by Author")
        }
    }
}
$(document).ready(Index.Ready);
