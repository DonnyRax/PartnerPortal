$(document).ready(function(){
    $("#sidebar-toggle-switch").click(function(){
        toggleSideBar();
        toggleContent();
    })

    $(".dropdown.nav-item").click(function(){
        var _this = $(this);
        _this.find(".nav-dropdown-menu").toggleClass("collapsed");
    });
});

function toggleSideBar(){
    $(".sidebar-wrapper").toggleClass("sidebar-wrapper-collapsed");
};

function toggleContent(){
    $(".content-wrapper").toggleClass("content-wrapper-collapsed");
};