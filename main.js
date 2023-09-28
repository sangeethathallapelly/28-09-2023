function space1(){
    let name="Jupiter";
    document.getElementById("planet1").textContent=name;
}
function space2(){
    let noOfPlanets=8;
    document.getElementById("planet2").textContent=noOfPlanets;
}

function space3(){
    let saturn=true;
    document.getElementById("planet3").textContent=saturn;
}
function space4(){
    let new1=null;
    document.getElementById("planet4").textContent=new1??"No we can't see the all the planets at a time"; 
}
function space5(){
    let myUndefinedVariable=null;
    document.getElementById("planet5").textContent=myUndefinedVariable??"undefined";
}
function space6(){
    var info={
    shape:"sphere",
        radius:6317,
        colour:"blue"
};
document.getElementById("planet6").textContent=info.shape;

}
function space7(){
    let myArray=["Mercury","venus","earth","Mars"];
    document.getElementById("planet7").textContent=myArray[0];
}
