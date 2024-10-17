function Calculadora() {
  this.display = document.querySelector(".display");
  this.btnClear = document.querySelector(".btn-clear");
  this.el;

  this.iniciar = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      this.el = e.target;
      if (this.el.classList.contains("btn-num")) {
        this.btnParaDisplay(this.el.innerText);
      }
      if (this.el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }
      if (this.el.classList.contains("btn-del")) {
        this.apagaUm();
      }
      if (this.el.classList.contains("btn-eq")) {
        this.realizaConta(this.display.value);
      }
      this.display.focus();
    });
  };

  this.pressionaEnter = () => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        this.realizaConta(this.display.value);
      }
    });
  };

  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizaConta = (valor) => {
    try {
      if (!valor) {
        alert("Conta inválida!");
        return;
      }
      this.display.value = eval(valor);
    } catch (e) {
      alert("Conta inválida!");
      this.clearDisplay();
    }
  };
}

const calc = new Calculadora();
calc.iniciar();
