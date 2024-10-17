//Uma chave deve ser referencia com this dentro do próprio objeto
function criarCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),
    clearDisplay() {
      this.display.value = "";
    },

    iniciar() {
      this.cliqueBotoes();
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        //com arrow function não preciso me preocupar com o .bind(), this
        //definido pelo escopo lexico é bem mais tranquilo
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criarCalculadora();
calculadora.iniciar();
