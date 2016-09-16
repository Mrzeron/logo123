$.aniAuto();
$("#trbtn").hover(function () {
    $(".logo").find(".img2").addClass("fadeInLeft").removeClass("fadeOutLeft");
    $(".logo").find(".img1").addClass("fadeOutRight").removeClass("fadeInRight");
},function(){
    $(".logo").find(".img2").addClass("fadeOutLeft").removeClass("fadeInLeft");
    $(".logo").find(".img1").addClass("fadeInRight").removeClass("fadeOutRight");
});
mainload();
itemload();
listload();
$(".works-list .item").on("click",function(){
    $('#spmodal').modal("show")
});
$(".designtypes .item").on("click",function(){
    if($(this).index()==0){
        $('#disign').modal("show");


    }
});
$("#ifdl").on("click",function(event){
    if($(this).html()=="有账号？立即登录"){
        $("#showname").html("账号");
        $(this).html("没有账号？快速注册");
        $("#dl").hide();
        $("#zc").show();

    }else {
        $("#showname").html("登录");
        $(this).html("有账号？立即登录");
        $("#zc").hide();
        $("#dl").show();

    };
    event.preventDefault()
})
$('#navlist a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})
$("#navlist a").on("click",function(){
    var $text=$(this).text();
    $(".is-icon1").css({"background-position":"0 -19px"});
    $(".is-icon2").css({"background-position":"-22px -19px"});
    $(".is-icon3").css({"background-position":"-43px -19px"});
    $(".is-icon4").css({"background-position":"-64px -19px"});
    if($text=="VI"){
        $(".is-icon1").css({"background-position":"0 0"})
    }else if($text=="广告"){
        $(".is-icon2").css({"background-position":"-22px 0"})
    }
    else if($text=="包装"){
        $(".is-icon3").css({"background-position":"-43px 0"})
    }
    else if($text=="其他"){
        $(".is-icon4").css({"background-position":"-64px 0"})
    }
})
function mainload(){
    for(var i=0;i<12;i++){
        $(' <div class="item">            <div class="w">            <p class="title">甜品点餐手册设计</p>            </div>            </div>').appendTo($(".works-list"))
    }
}
function itemload(){
    for(var i=0;i<4;i++){
        $('  <div class="item clearfix">            <div class="img-cover">            <div class="img-inner"></div>            </div>            <div class="comments">            <i class="fa fa-quote-left"></i>            设计很满意,人也兢兢业业不厌其烦的帮忙修改,谢谢        <i class="fa fa-quote-right"></i>            </div>            </div>').appendTo($(".comments-list"))
    }
}
function listload(){
    for(var i=0;i<6;i++){
        $('<div class="list_item">            <p class="q">具体可以提供那些种类的设计服务？</p>        <p class="a">            我们的设计服务涵盖平面设计的多个领域，主要分为品牌VI，广告海报，和产品包装3个大类。 请根据您需要设计的内容选择合适的分类提交需求。 如果您不确定您需求的具体分类，请选择“其他”，我们的设计顾问将尽快与您联系。    </p>        </div>').appendTo($(".faqs-list"))
    }
}