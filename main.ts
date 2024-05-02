let maxMax: number = 840;
let obtainMax: number = 450;
let persenTage = obtainMax * 100/maxMax;

if(persenTage >=90 && persenTage <=100){
    console.log("your Grade is A++");
}
else if (persenTage >=70 && persenTage <=89){
    console.log("your Grade is A");
}
else if(persenTage >=60 && persenTage <=69){
    console.log("your Grade is B");
}
else if(persenTage >=50 && persenTage <=59){
    console.log("your Grade is C");
}
else if(persenTage >=40 && persenTage <=49){
    console.log("your Grade is D");
}
else {
    console.log("you are fail");
}

console.log(persenTage);