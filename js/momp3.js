window.addEventListener('load', function () {
  var body = this.document.body
  var box = document.querySelector('.bgmusic_box')
  var bgmusic = document.querySelector('#bgmusic').querySelector('img')
  var song = document.querySelector('#song')
  var flag = true
  body.onscroll = function () {
    var height = parseInt(
      document.documentElement.scrollTop || document.body.scrollTop
    )
    if (height >= 700) {
      box.style.display = 'block'
    } else if (height < 600) {
      box.style.display = 'none'
    }
  }
  bgmusic.addEventListener('click', function () {
    if (song.paused && flag == true) {
      song.play()
      bgmusic.setAttribute('class', 'songRotate')
      bgmusic.style.animationPlayState = 'running'
      flag = false
    } else if (song.play && flag == false) {
      song.pause()
      bgmusic.style.animationPlayState = 'paused'
      flag = true
    }
  })
})
