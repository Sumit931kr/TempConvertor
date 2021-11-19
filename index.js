

console.log("This is temperature Convertor");
const celcius =  document.getElementById('cel')
const farenhiet = document.getElementById('far');

let s = document.getElementById('find')
s.addEventListener("click", function(e) {
let celciusValue = celcius.value;
let farenhietValue = farenhiet.value;

if(farenhietValue == ""){
let f = 9/5*celciusValue+32;
console.log(f);
farenhiet.value = f;

}
else{
let c = ((farenhietValue-32)*5)/9;
console.log(c);
celcius.value = c;
}

});

let clear = document.getElementById('clear')
clear.addEventListener("click",function(e){
celcius.value = "";
farenhiet.value = "";
})


