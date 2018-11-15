
// 进度条
NProgress.configure({ showSpinner: false });

$(document).ajaxStart(function(){
    NProgress.start();
});
$(document).ajaxStop(function(){
    NProgress.done();
})

// 分类切换
$(function(){
    $(".category").click(function(){
        // console.log(111);
        $(this).next().stop().slideToggle();
    })
})

// 菜单栏
$(".icon-menu").click(function(){
    // console.log(111);
    
    $(".lt_topbar").toggleClass(".hideMenu");
    $(".lt_main").toggleClass(".hideMenu");
    $(".lt_aside").toggleClass(".hideMenu");
})

// 模态框显示
$(".icon-logout").click(function(){
    console.log(1);
    $("#logoutModal").modal("show");
})
