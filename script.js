function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar tag da imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se tiver light mode
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Barbara fazendo carinha de fofa")
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Barbara fazendo carão com roupa verde")
  }
}
