let boton = document.querySelector("#btnp")

boton.addEventListener("click", respuestaClick)
function respuestaClick(){
    alert("Respuesta de evento")
}
function onClicks(){alert("Respuesta 2")}
let texto = document.querySelector("#text")
texto.addEventListener("click", cha)
function cha(){
    return(this.innerHTML = 'Basta!')
  }

  function mOver(obj) {
    obj.innerHTML = "..."
  }
  
  function mOut(obj) {
    obj.innerHTML = "Te lo adverti..."
  }