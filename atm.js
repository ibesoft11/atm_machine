/**
 * ATM simulation using JavaScript
 * Author : Ibe Ogele
 * For : NodeJS_Class
 */

function atm(){
    var accountBalance = 0;
    var defaultPassword = '0000';
    this.deposit = function(amountToDeposit){
        accountBalance +=amountToDeposit;
        return console.log("Credit alert, your account has been deposited with the sum of : " + amountToDeposit);
    }
    this.changePassword = function(oldPassword, newPassword){
        if (oldPassword == defaultPassword){
            defaultPassword = newPassword;
            return console.log("Password successfully changed");
        } else {
            return console.log("Error, Incorrect password provided");
        }
    }
    this.withdrawMoney = function (password, amount, printReciept){
        if (password == defaultPassword){
            //user verified, proceed
            if (amount <= accountBalance - 500){
                accountBalance -= amount;
                if (printReciept){
                    //print reciept
                    console.log("-------------- NodeLand's ATM -------------\n Transaction ID : NDLATM"+accountBalance+password+"XXX ");
                    console.log(" Amount Recieved : " + amount + "\n Date : " + Date.now());
                    console.log(" Account Balance : " + accountBalance);
                    console.log("-------------- End Of Reciept -------------");
                } else {
                    console.log("Transaction complete... \nThank you");
                }
            } else {
                console.log("Insufficient Funds... Try a smaller amount.");
            }
        } else {
            console.log("Incorrect password, check and try again");
        }
    }
}
var atm = new atm();
atm.deposit(6000);
atm.changePassword('0000','2002');
atm.withdrawMoney('2002',4000,true);
atm.withdrawMoney('2002',1000,false);
