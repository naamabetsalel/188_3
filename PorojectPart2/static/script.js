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



    const calculateBtn = document.getElementById('calculateBtn');
    const bestSubjectResult = document.getElementById('bestSubjectResult');
  
    calculateBtn.addEventListener('click', calculateBestSubject);
  
    function calculateBestSubject() {
      // Retrieve the grades entered by the user
      const grade1 = parseInt(document.getElementById('grade1').value);
      const grade2 = parseInt(document.getElementById('grade2').value);
      const grade3 = parseInt(document.getElementById('grade3').value);
      const grade4 = parseInt(document.getElementById('grade4').value);
      const grade5 = parseInt(document.getElementById('grade5').value);
      const grade6 = parseInt(document.getElementById('grade6').value);
  
      // Calculate the scores for each subject
      const easiness1 = 2;
      const easiness2 = 2.5;
      const easiness3 = 3.5;
      const easiness4 = 2.5;
      const easiness5 = 5.5;
      const easiness6 = 5;
      const points1 = 6;
      const points2 = 5.5;
      const points3 = 2;
      const points4 = 5;
      const points5 = 2.5;
      const points6 = 3;
  
      const score1 = 90 * easiness1 - grade1 * points1;
      const score2 = 90 * easiness2 - grade2 * points2;
      const score3 = 90 * easiness3 - grade3 * points3;
      const score4 = 90 * easiness4 - grade4 * points4;
      const score5 = 90 * easiness5 - grade5 * points5;
      const score6 = 90 * easiness6 - grade6 * points6;
  
      // Find the subject with the highest score
      let bestSubject = '';
      let bestScore = -Infinity;
  
      if (score1 > bestScore) {
        bestScore = score1;
        bestSubject = 'חדווא';
      }
      if (score2 > bestScore) {
        bestScore = score2;
        bestSubject = 'פיזיקה';
      }
      if (score3 > bestScore) {
        bestScore = score3;
        bestSubject = 'מעם';
      }
      if (score4 > bestScore) {
        bestScore = score4;
        bestSubject = 'אווירו';
      }
      if (score5 > bestScore) {
        bestScore = score5;
        bestSubject = 'מטא';
      }
      if (score6 > bestScore) {
        bestScore = score6;
        bestSubject = 'פלטפ';
      }
  
      // Display the best subject to improve
      bestSubjectResult.textContent = `The best subject to improve is ${bestSubject}.`;
    }

  