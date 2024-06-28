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
        console.log(`Saldo sebelum ditambah Rp.${this.balance}`);
        setTimeout(() => {
          this.balance += amount;
          console.log(`Saldo setelah ditambah Rp.${this.balance}`);
          this.currentBalance();
          this.transaction(
            `Menambahkan <b>Rp.${amount}</b> <br> Jumlah saldo <b>Rp.${this.balance}</b>`
          );
        }, 2000);
        console.log("Loading...");
      } else {
        throw new ValidationError("Jumlah saldo tidak valid.");
      }
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
    }
  }

  withdraw(amount) {
    amount = parseFloat(amount);
    try {
      if (!isNaN(amount) && amount > 0) {
        if (amount <= this.balance) {
          console.log(`Saldo sebelum dikurangi Rp.${this.balance}`);
          setTimeout(() => {
            this.balance -= amount;
            console.log(`Saldo setelah dikurangi Rp.${this.balance}`);
            this.currentBalance();
            this.transaction(
              `Mengurangi <b>Rp.${amount}</b> <br> Jumlah saldo <b>Rp.${this.balance}</b>`
            );
          }, 2000);
          console.log("Loading...");
        } else {
          throw new ValidationError("Saldo tidak mencukupi.");
        }
      } else {
        throw new ValidationError("Jumlah saldo tidak valid.");
      }
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
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
}

const account = new BankingSystem();

// display current balance
document.addEventListener("DOMContentLoaded", () => {
  account.currentBalance();
});

// deposit
document.getElementById("deposit").addEventListener("click", () => {
  const addAmount = window.prompt(
    "Masukkan jumlah saldo yang ingin ditambahkan:"
  );
  account.deposit(addAmount);
});

// withdraw
document.getElementById("withdraw").addEventListener("click", () => {
  const subtractAmount = window.prompt(
    "Masukkan jumlah saldo yang ingin dikurangi:"
  );
  account.withdraw(subtractAmount);
});
