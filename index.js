// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'; // Declaring without var, let, or const makes it a global variable
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Since bestCustomer is global, it can be overwritten
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
    // Attempting to change a constant will result in an error in JavaScript
    leastFavoriteCustomer = 'someone else'; // This line will throw an error
}
