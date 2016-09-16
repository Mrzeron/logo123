$.aniAuto();
$("#trbtn").hover(function () {
    $(".logo").find(".img2").addClass("fadeInLeft").removeClass("fadeOutLeft");
    $(".logo").find(".img1").addClass("fadeOutRight").removeClass("fadeInRight");
},function(){
    $(".logo").find(".img2").addClass("fadeOutLeft").removeClass("fadeInLeft");
    $(".logo").find(".img1").addClass("fadeInRight").removeClass("fadeOutRight");
});
caseload();
function caseload(){
    loadcase(24);
    $("#showmorelogo").on("click",function(){
        loadcase(8);
    })
    function loadcase(num){
        $.ajax({
            "url":"js/caseload.txt",
            "data":{},
            "success":function(data){
                for(var i=0;i<num;i++){
                    $('<div class="case" data-toggle="modal" data-target="#myModal"><div class="tpouter">                    <img src='+data.src+' alt="" class="winning">                    <div class="desc">                    <span class="package bg-red pull-right">'+data.descName+'</span>                    <p>'+data.descTxt+'</p>                </div>             </div>                <p class="hyal">'+data.hyal+'</p>                    </div>').appendTo($("#logo-list-wrapper"))
                }
            },
            "dataType":"json"
        });
    }


}