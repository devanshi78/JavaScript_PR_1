let e_name = "Sunny";
let e_id = 7;
let basicsalary = 45000;

let hra = basicsalary * 0.20;
let da = basicsalary * 0.10;
let grossSalary = basicsalary + hra + da;
let tax;

if (grossSalary >= 50000) {
    tax = grossSalary * 0.20;
} else if (grossSalary >= 40000) {
    tax = grossSalary * 0.15;
} else if (grossSalary >= 30000) {
    tax = grossSalary * 0.10;
} else {
    tax = grossSalary * 0.05;
}

let netSalary = grossSalary - tax;

console.log(`Employee name :    ${e_name}`);
console.log(`Employee ID :      ${e_id}`);
console.log(`Basic salary :     ${basicsalary}`);
console.log(`Gross Salary:      ₹${grossSalary.toFixed(2)}`);
console.log(`Tax Deducted:      ₹${tax.toFixed(2)}`);
console.log(`Net Salary:        ₹${netSalary.toFixed(2)}`);