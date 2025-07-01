let name = "john";
let rollno = 10;
let sub1 = 60;
let sub2 = 80;
let sub3 = 70;

console.log(`Student name : ${name}`);
console.log(`Roll no : ${rollno}`);
console.log(`subject 1 : ${sub1}`);
console.log(`subject 2 : ${sub2}`);
console.log(`subject 3 : ${sub3}`);

if(sub1 <= 35 || sub2 <= 35 || sub3 <= 35){
    console.log("Student is FAIL");
}else{
    console.log("Student is PASS.");
}