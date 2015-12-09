$(document).ready(function () {
    $('.quiz-section').hide(); //this line means hide all questions at start  
    $('.results').hide(); //this line means hide all results at start  
    $('.reset').hide(); //this line means hide reset button at start
    $('.introSection').show(); //this line shows intro section at start
    //when enter quiz is hit information is replaced by questions/answers
    var questions = [
// Question 1
            {
                question: 'Who is considered the father of psychoanalytic theory?',
                choices: ['Sigmund Freud', 'Carl Rogers', 'Ivan Pavlov', 'Erik Erikson'],
                answer: 0
},
// Question 2
            {
                question: 'Who is most known for classical conditioning?',
                choices: ['B.F. Skinner', 'Sigmund Freud', 'Ivan Pavlov', 'Carl Jung'],
                answer: 2
},
// Question 3
            {
                question: 'Which of these is not one of the four lobes of the brain?',
                choices: ['frontal lobe', 'occipital lobe', 'parietal lobe', 'echoial lobe'],
                answer: 3
},
// Question 4
            {
                question: 'Which part of the neuron is responsible for recieving information?',
                choices: ['the axon', 'the dendrites', 'the soma', 'the myelin'],
                answer: 1
},
// Question 5
            {
                question: 'Which of the following is able to prescribe medication?',
                choices: ['psychiatrist', 'psychologist', 'counselor', 'family therapist'],
                answer: 0
},
// Question 6
            {
                question: 'Giving students chocolate for participating in class is an example of:',
                choices: ['negative reinforcement', 'classical conditioning', 'positive reinforcement', 'sweet therapy'],
                answer: 2
},
// Question 7
            {
                question: 'A procedure that uses systematic steps to solve a problem is called:',
                choices: ['trial-by-error', 'an abbreviated procedure', 'a mental set', 'an algorithm'],
                answer: 3
},
// Question 8
            {
                question: 'Which part of the brain is most connected to fear responses?',
                choices: ['amygdala', 'medulla', 'brain stem', 'pons'],
                answer: 0
},
// Question 9
            {
                question: 'Which of the following best represents the pleasure principle?',
                choices: ['superego', 'id', 'ego', 'collective unconscious'],
                answer: 1
},
// Question 10
            {
                question: 'Which part of the brain is most likely damaged in those with anterograde amnesia?',
                choices: ['amygdala', 'medulla', 'hippocampus', 'cerebellum'],
                answer: 2
},
]
        //Variables   
    var questionNum = 0;
    var questionTotal = questions.length;
    var correctTotal = 0;

    //Starting the Quiz
    $('#begin').click(function () { //start the quiz and show the first question
        $('.results').hide(); //this line means hide all results at start  
        $('.introSection').hide(); //this line shows intro section at start
        $('.quiz-section').show(); //this line means hide all questions at start  
        questionDisplay();
        console.log(questionNum);
    });
    $('#submit').click(function () { //submit answers

        var answer = $("input[class='options']:checked").val();
        var correctAnswer = questions[questionNum].answer;
        console.log(answer);
        if (answer == undefined) {
            alert("Please select one of the answer choices.")
        } else {
            if (answer == correctAnswer) {
                //if correct answer was selected    
                correctTotal++;
                //console.log(correctTotal);
            }
            //quiz is finished, show result-section
            if ((questionNum + 1) == questionTotal) {
                $('.results').show();
                $('.results p').text(correctTotal + "/" + questionTotal);

                //load correct feedback based on correctTotal 

                //$('#result_msg').append(feedback);

                $('.introSection').hide(); //this line shows intro section at start
                $('.quiz-section').hide(); //this line means hide all questions at start  
                $('.results').show(); //this line means show all results at start  


            } else {
                //continue to next question
                questionNum++;
                questionDisplay();
            }
        }
    });
    $('.results').on('click', '#reset', function () {
        $('.introSection').show();
        $('.quiz-section').hide();
        $('.results').hide();
        questionNum = 0;
        correctAnswerTotal = 0;
    });
    /  * -- - Display Questions-- - * /

    function questionDisplay() {
        //displays the current question
        $('#question-num').text("Question " + (questionNum + 1) + " of " + questionTotal);
        console.log(questionNum);
        $('#question').text(questions[questionNum].question);
        $('#choices').empty();
        var choiceTotal = questions[questionNum].choices.length;
        for (var i = 0; i < choiceTotal; i++) {
            //displays the answer choices
            $("#choices").append("<input type='radio' class='options' name='options' value=" + i + ">" + " " + questions[questionNum].choices[i] + "<br>");
        }
    }
});
