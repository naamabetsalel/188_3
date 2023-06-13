function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu"){
        i.className += " responsive";
    }else{ 
        i.className = "nav-menu";
    }
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

function calculateGrade() {
    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var grade3 = parseFloat(document.getElementById("grade3").value);
    var grade4 = parseFloat(document.getElementById("grade4").value);
    var grade5 = parseFloat(document.getElementById("grade5").value);
    var grade6 = parseFloat(document.getElementById("grade6").value);
    
    var average = (grade1*6 + grade2*4 + grade3*2 + grade4*5.5 + grade5*3 + grade6*3) / 23.5;
    
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your grade average is: " + average.toFixed(2);
  }


  /* page 2 */

  document.addEventListener('DOMContentLoaded', function() {
    // Get the grades from Page 1
    const grades = {
      hadwah: parseInt(localStorage.getItem('grade1')),
      physics: parseInt(localStorage.getItem('grade2')),
      maam: parseInt(localStorage.getItem('grade3')),
      aviro: parseInt(localStorage.getItem('grade4')),
      meta: parseInt(localStorage.getItem('grade5')),
      platform: parseInt(localStorage.getItem('grade6'))
    };
  
    // Define the easiness levels and points
    const easiness = {
      hadwah: 2,
      physics: 2.5,
      maam: 3.5,
      aviro: 2.5,
      meta: 5.5,
      platform: 5
    };
  
    const points = {
      hadwah: 6,
      physics: 5.5,
      maam: 2,
      aviro: 5,
      meta: 2.5,
      platform: 3
    };
  
    const scores = {};
  
    // Calculate the score for each subject
    for (const subject in grades) {
      const grade = grades[subject];
      const easinessValue = easiness[subject];
      const point = points[subject];
      const score = 90 * easinessValue - grade * point;
      scores[subject] = score;
    }
  
    let bestSubject = null;
    let maxScore = -Infinity;
  
    // Find the subject with the highest score
    for (const subject in scores) {
      if (scores[subject] > maxScore) {
        maxScore = scores[subject];
        bestSubject = subject;
      }
    }
  
    const bestSubjectElement = document.getElementById('bestSubject');
    const scoreElement = document.getElementById('score');
  
    bestSubjectElement.textContent = "Best subject to improve: " + bestSubject;
    scoreElement.textContent = "Score for the best subject: " + maxScore;
  });
  