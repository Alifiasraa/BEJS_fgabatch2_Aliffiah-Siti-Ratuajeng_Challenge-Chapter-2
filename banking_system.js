import ValidationError from "./customError.js";

class BankingSystem {
  constructor() {
    this.balance = 1000000;
  }

  // methods
  deposit(amount) {
    this.amount = parseFloat(amount);
    console.log(`Saldo sebelum ditambah Rp.${this.balance}`);
    try {
      if (!isNaN(this.amount) && this.amount > 0) {
        this.balance += this.amount;
        setTimeout(() => {
          console.log(`Saldo setelah ditambah Rp.${this.balance}`);
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
    this.amount = parseFloat(amount);
    console.log(`Saldo sebelum dikurangi Rp.${this.balance}`);
    try {
      if (!isNaN(amount) && amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          setTimeout(() => {
            console.log(`Saldo setelah dikurangi Rp.${this.balance}`);
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
}

const account = new BankingSystem();

// deposit
document.getElementById("deposit").addEventListener("click", () => {
  const addAmount = window.prompt(
    "Masukkan jumlah saldo yang ingin ditambahkan:"
  );
  account.deposit(addAmount);
});

// withdraw
document.getElementById("withdraw").addEventListener("click", () => {
  const addAmount = window.prompt(
    "Masukkan jumlah saldo yang ingin dikurangi:"
  );
  account.withdraw(addAmount);
});
