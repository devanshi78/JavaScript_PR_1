let name = "john";
let rollno = 10;
let sub1 = 40;
let sub2 = 80;
let sub3 = 70;

let total = sub1 + sub2 + sub3;
let avg = (total/300) * 100;

console.log(`Student name : ${name}`);
console.log(`Roll no : ${rollno}`);
console.log(`subject 1 : ${sub1}`);
console.log(`subject 2 : ${sub2}`);
console.log(`subject 3 : ${sub3}`);
console.log(`Total : ${total}`);

if(sub1 <= 35 || sub2 <= 35 || sub3 <= 35){
    console.log("Student is FAIL");
}else{
    console.log("Student is PASS.");
    if(avg >= 90){
        console.log(`A+ grade ${avg.toFixed(2)}`);
    }else if(avg >= 80){
        console.log(`A grade ${avg.toFixed(2)}`);
    }else if(avg >= 70){
        console.log(`B+ grade ${avg.toFixed(2)}`);
    }else if(avg >= 60){
        console.log(`B grade ${avg.toFixed(2)}`);
    }else if(avg >= 50){
        console.log(`C grade ${avg.toFixed(2)}`);
    }else{
        console.log(`D grade ${avg.toFixed(2)}`);
    }
}