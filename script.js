var subjects = document.getElementById("subj_opt");
var num_questions = document.getElementById("number_opt");
var questions = document.getElementById("Question_bar");
var selection = document.getElementById("Selection_bar");




function All_question() {
    var obj = fetch(`https://kit-questions.glitch.me/question/${subjects.value}/${num_questions.value}`)  
.then((response) => response.json())
.then((data) => {
    
let mydata = Object.entries(data.questions);
console.log(mydata);
console.log(mydata[1][1].answer);


    mydata.forEach((ele, index) => {
        let myoptions = Object.entries(ele[1].options);
        for (keys in myoptions){
            console.log(`${keys}: ${myoptions}`)
        }
        // myoptions.forEach((ele) => {
        //     console.log(myoptions);
        //     console.log(ele);


        // });


        var questionSheet = document.getElementById("show_quest").innerHTML+= `
                            <label>
                            <ol>
                               
                               <li>${index + 1}. ${ele[1].question}</li>
                               <li id="option"><input type="radio" id="opta" value="answer1" onclick="checkAnswer(event)" name="${index}"> ${myoptions[0]}</li>
                               <li id="option"><input type="radio" id="optb" value="answer2" onclick="checkAnswer(event)" name="${index}"> ${myoptions[1]}</li>
                               <li id="option"><input type="radio" id="optc" value="answer3" onclick="checkAnswer(event)" name="${index}"> ${myoptions[2]}</li>
                               <li id="option"><input type="radio" id="optd" value="answer4"onclick="checkAnswer(event)" name="${index}"> ${myoptions[3]}</li>


                            
                               </ol>
                            </label>`
    });
}); 


selection.style.display = "none";
questions.style.display = "block";
// console.log(obj);
// console.log(subjects.value);
// console.log(num_questions.value);
    
}
let answerSelectionId = "";
function checkAnswer(){
    // console.log(document.querySelectorAll("label li input"));
    let getValue = document.querySelectorAll("label li input");
    console.log(getValue);
// let answer = RadioNodeList.value;

// if(answer === checked){
//     console.log("Answer");
// }

    //  answerSelectionId = event.target.id;
    // console.log(answerSelectionId);   
    
    // if(answerSelectionId === "opta"){
    //     console.log("Answer A");
    // }else if(answerSelectionId === "optb"){
    //     console.log("Answer B");
    // }else if(answerSelectionId === "optc"){
    //     console.log("Answer C");
    // }else if(answerSelectionId === "optd"){
    //     console.log("Answer D");
    // }
}

// function checkQuestion(){
//     let score = document.getElementById("scores");
//     let correct = document.getElementById("correct");
//     let wrong = document.getElementById("wrong");

//     if(ele[1].options.a === ele[1].question){
//         console.log("Correct")
//     }
// }