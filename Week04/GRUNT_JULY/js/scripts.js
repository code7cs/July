/*
 * @Author: Hanfan Wang
 * @Date: 2020-08-06 10:13:36
 * @LastEditTime: 2020-08-06 10:13:39
 */
$(document).ready(function () {
  $(".menu").on("click", function () {
    $(this).toggleClass("open");
  });

  $(".thumbnail").on("click", function () {
    $(".pop-up").fadeIn(100);
  });

  $(".rslides").responsiveSlides();
});
