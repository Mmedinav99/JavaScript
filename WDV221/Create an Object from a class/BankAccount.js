// BankAccount.js

class BankAccount {
    constructor(inBalance = 0) {
        if (inBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this._accountNumber = "";
        this._accountName = "";
        this._accountBalance = inBalance;
        this._accountTransactions = [];
    }

    // Getter and Setter for accountNumber
    get accountNumber() {
        return this._accountNumber;
    }
    set accountNumber(num) {
        this._accountNumber = num;
    }

    // Getter and Setter for accountName
    get accountName() {
        return this._accountName;
    }
    set accountName(name) {
        this._accountName = name;
    }

    // Getter and Setter for accountBalance
    get accountBalance() {
        return this._accountBalance;
    }
    set accountBalance(balance) {
        if (balance < 0) {
            throw new Error("Balance cannot be set to a negative value.");
        }
        this._accountBalance = balance;
    }

    // Getter and Setter for accountTransactions
    get accountTransactions() {
        return this._accountTransactions;
    }
    set accountTransactions(transactions) {
        this._accountTransactions = transactions;
    }

    // Deposit method
    deposit(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Deposit amount must be a positive number.");
        }
        this._accountBalance += amount;
        this._accountTransactions.push({
            transactionType: "D",
            transactionAmount: amount,
            transactionDate: this._getCurrentDate()
        });
    }

    // Withdraw method
    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Withdraw amount must be a positive number.");
        }
        if (amount > this._accountBalance) {
            throw new Error("Insufficient funds.");
        }
        this._accountBalance -= amount;
        this._accountTransactions.push({
            transactionType: "W",
            transactionAmount: amount,
            transactionDate: this._getCurrentDate()
        });
    }

    // Balance method
    balance() {
        return this._accountBalance;
    }

    // Account info method
    accountInfo() {
        return [this._accountName, this._accountNumber, this._accountBalance];
    }

    // Helper method to format date mm/dd/yyyy
    _getCurrentDate() {
        const today = new Date();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const yyyy = today.getFullYear();
        return `${mm}/${dd}/${yyyy}`;
    }
}

export default BankAccount;
