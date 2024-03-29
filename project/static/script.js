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
  
   
    const activePage = window.location.href;
    const navLinks = document.querySelectorAll('ul li a.link');
    navLinks.forEach(element => {
        if (element.href==activePage) {
            element.classList.add('active');
        }
    });
    