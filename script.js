/* -----------------------------
 Part 1: Event Handling Basics
 ----------------------------- */

// Toggle Light/Dark Mode

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

/* -----------------------------
 Part 2: Interactive Features
 ----------------------------- */

// Counter Game
let score = 0;
const counterBtn = document.getElementById("counterBtn");
const scoreDisplay = document.getElementById("score");

counterBtn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

// Collapsible FAQ Section
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

/* -----------------------------
 Part 3: Form Validation
 -----------------------------*/

function validateEmail(email){
    let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return format.test(email);

}
function validatePassword(password){
    //min 8 chars, at least one uppercase letter, one lowercase letter, one number and one special character
    let format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return format.test(password);
}

function validateSignup(){
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if(!username || !email || !password ){
        alert("All fields are required!");
        return false; //prevent form submission
    }
    if(!validateEmail(email)){
        alert("Please enter a valid email address.");
        return false;
    }

    if(!validatePassword(password)){
        alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
        return false;
    }

    alert("Signup successful!");
    return true; //allow form submission
}
