//Uma chave deve ser referencia com this dentro do próprio objeto
function criarCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta(valor) {
      try {
        if (!valor) {
          alert("Conta inválida!");
          return;
        }
        this.display.value = eval(valor);
      } catch (e) {
        alert("Conta inválida!");
      }
    },

    iniciar() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keydown", (e) => {
        //onsole.log(e);
        if (e.keyCode === 13) {
          this.realizaConta(this.display.value);
        }
      });
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

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta(this.display.value);
        }

        this.display.focus();
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criarCalculadora();
calculadora.iniciar();
