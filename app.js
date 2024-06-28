import BankingSystem from "./banking_system.js";

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
