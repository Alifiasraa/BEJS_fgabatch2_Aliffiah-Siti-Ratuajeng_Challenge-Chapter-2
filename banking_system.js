import ValidationError from "./customError.js";

class BankingSystem {
  constructor() {
    this.balance = 10000;
  }

  // methods
  deposit(amount) {
    amount = parseFloat(amount);
    try {
      if (!isNaN(amount) && amount > 0) {
        this.loading(true);
        setTimeout(() => {
          this.balance += amount;
          this.currentBalance();
          this.transaction(
            `Menambahkan <b>Rp.${amount}</b> <br> Jumlah saldo <b>Rp.${this.balance}</b>`
          );
          this.loading(false);
        }, 2000);
      } else {
        throw new ValidationError("Jumlah saldo tidak valid.");
      }
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
      alert(`${error.name}: ${error.message}`);
    }
  }

  withdraw(amount) {
    amount = parseFloat(amount);
    try {
      if (!isNaN(amount) && amount > 0) {
        if (amount <= this.balance) {
          this.loading(true);
          setTimeout(() => {
            this.balance -= amount;
            this.currentBalance();
            this.transaction(
              `Mengurangi <b>Rp.${amount}</b> <br> Jumlah saldo <b>Rp.${this.balance}</b>`
            );
            this.loading(false);
          }, 2000);
        } else {
          throw new ValidationError("Saldo tidak mencukupi.");
        }
      } else {
        throw new ValidationError("Jumlah saldo tidak valid.");
      }
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
      alert(`${error.name}: ${error.message}`);
    }
  }

  currentBalance() {
    document.getElementById(
      "balance"
    ).innerText = `Saldo saat ini: Rp.${this.balance}`;
  }

  transaction(description) {
    const ul = document.getElementById("transaction-history");
    const li = document.createElement("li");
    const empty = document.getElementById("empty");

    li.innerHTML = description;
    ul.appendChild(li);

    if (ul.children.length >= 1) {
      empty.style.display = "none";
    }
  }

  loading(show) {
    const loading = document.getElementById("loading");
    if (show) {
      loading.style.display = "block";
    } else {
      loading.style.display = "none";
    }
  }
}

export default BankingSystem;
