$(function () {

  $("#logotipo").on("mouseover", function () {
    $("#banner h1").addClass("efeito")
  }).on("mouseout", function () {
    $('#banner h1').removeClass("efeito")
  })


  $("#input-search").on("focus", function () {
    $("li.search").addClass("ativo")
  }).on("blur", function () {
    $("li.search").removeClass("ativo")
  })

  $(".thumbnails").owlCarousel({
    loop: true,
    nav: true,
    margin: 100,
    navText: ["Back", "Next"],
    responsive: {
      0: {
        item: 1
      },
      400: {
        item: 3
      },
      700:{
        item: 4
      }
    }
  })
})