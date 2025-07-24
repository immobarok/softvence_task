$("#menu-toggle").on("click", function () {
  const $menu = $("#mobile-menu");
  if ($menu.hasClass("hidden")) {
    $menu.removeClass("hidden").addClass("flex");
  } else {
    $menu.addClass("hidden").removeClass("flex");
  }
});