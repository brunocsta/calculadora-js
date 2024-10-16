function criarCalculadora() {
  return {
    display: document.querySelector(""),
    iniciar() {
      alert("Olá Mundo");
    },
    cliqueBotoes() {
      document.addEventListener("click", function (e) {
        const el = e.target;
      });
    },
  };
}

const calculadora = criarCalculadora();
calculadora.iniciar();
