let e_name = "Sunny";
let e_id = 7;
let basicsalary = 45000;
let exp = 2;
let bouns = 0;

if(exp >= 5 && basicsalary >= 50000){
    bouns = basicsalary * 0.15;
}else if(exp >= 3 && basicsalary >= 30000){
    bouns = basicsalary * 0.10;
}else if(exp >= 1.5 && basicsalary >= 20000){
    bouns = basicsalary * 0.08;
}else{
    bouns = 0;
}

let HRA = basicsalary * 0.5;
let MA = basicsalary * 0.05;
let TA = basicsalary * 0.2;
let DA = basicsalary * 0.1;
let PF = basicsalary * 0.12;
let PT = 200;

let grossSalary = basicsalary + HRA + DA + TA + MA + bouns;
let netSalary = grossSalary - PF - PT;

console.log(`Employee name :    ${e_name}`);
console.log(`Employee ID :      ${e_id}`);
console.log(`Basic salary :     ₹${basicsalary}`);
console.log(`Bouns :            ₹${bouns}`);
console.log(`Gross Salary:      ₹${grossSalary.toFixed(2)}`);
console.log(`Net Salary:        ₹${netSalary.toFixed(2)}`);