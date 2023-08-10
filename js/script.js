function handleSearch() {
  var searchButton = document.querySelector('.search');
  var btnAtivo = searchButton.classList.toggle('ativo');
  console.log("🚀 ~ file: script.js:4 ~ handleSearch ~ btnAtivo:", btnAtivo)
  if(btnAtivo){
    searchButton.classList.add('ativo')
  }else{
    searchButton.classList.remove('ativo')
  } 
}

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