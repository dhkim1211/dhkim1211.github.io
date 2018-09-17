// Home Page
var HomePage = HomePage || {};

HomePage.toggleMobileMenu = function() {
  $('.mobile-menu').slideToggle( "slow", function() {
    $('.cover-section').toggleClass('nav-mobile--expanded');
  });
}

$(function() {
  $('.toggle-menu').on('click', HomePage.toggleMobileMenu);
})
