var names= [];

function add1(){
 var name1= document.getElementById("input1").value;

 names.push(name1);
 console.log(names);
 document.getElementById("display").innerHTML=names.toString();

}

function show(){
    showname= names.join("<br>")
    console.log(showname);
    document.getElementById("display2").innerHTML=showname;
}

function sorting(){
    showname= names.sort().join("<br>")
    document.getElementById("display3").innerHTML=showname;
}

function search(){
    var s = document.getElementById("search").value;
    var found = 0;
    var j;
    for (j=0;j<names.length;j++){
        if(s==names[j]){
            found=found+1
        }
    }
    document.getElementById("display4").innerHTML="Name found " + found + " " + "time/s";
    console.log("Found name " + found + "time/s");
}