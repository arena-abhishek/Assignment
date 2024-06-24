
function result(){
    let score=0;
    if(document.getElementById("q1o3").checked){score++}
    if(document.getElementById("q2o1").checked){score++}
    if(document.getElementById("q3o2").checked){score++}
    if(document.getElementById("q4o1").checked){score++}
    if(document.getElementById("q5o2").checked){score++}
    else{
        // alert("Please fill the all mcqs")
        alert("your score is"+score);
    }
    // document.write("your score is"+score)
}