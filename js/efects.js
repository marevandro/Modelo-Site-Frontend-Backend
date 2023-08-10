$(function () {
  $(".thumbnails .item").on("click", function () {

    $("video").attr({
      "src": "mp4/" + $(this).data('video') + ".mp4",
      "poster": "img/" + $(this).data('video') + ".jpg"
    })

  })

  $("#volume").on("mousemove", function () {

    $("video")[0].volume = parseFloat($(this).val())
  })

  $("#btn-play-pause").on("click", function () {

    var video = $("video")[0]

    if ($(this).hasClass("btn-success")) {
      $(this).text("STOP")
      video.play()
    } else {
      $(this).text("PLAY")
      video.pause()
    }

    $(this).toggleClass("btn-success btn-danger")
  })
})



