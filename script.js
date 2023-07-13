let button = document.getElementById("button");
let output = document.getElementById("calculate");
let input = 0 ;
let time = 0; 
let now = 0;

let nowcalculate = 0;

button.addEventListener("click", function(){
    input = document.getElementById("date").value;
    time = new Date (input);
    let timecalculate = time.getTime();
    now =  new Date();
    nowcalculate = now.getTime();
    timecalculate = Math.floor(timecalculate / 1000 / 60 / 60  ); // to hours
    nowcalculate = Math.floor(nowcalculate / 1000 / 60 / 60 ) // to hours
    let result = nowcalculate - timecalculate
    output.innerText = `You have lived ${result}  HOURS so far!`
});
