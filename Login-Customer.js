let loginInformation = [
    {
        "Username": "Admin",
        "Password": "Admin123",
        "Email": "admin@admin.com"
    },
    {
        "Username": "sampleCustomer",
        "Password": "password123",
        "Email": "sample@customer.com",
    }
]

//check if they want the newsletter
let newsletterCheck = 0

//when page loads, clear the value of inputs
function emptyForm() {
    let array = []
    array.push(document.getElementById("signupEmail"))
    array.push(document.getElementById("signupUsername"))
    array.push(document.getElementById("signupPassword"))
    array.push(document.getElementById("checkSignupPassword"))
    array.push(document.getElementById("loginUsername"))
    array.push(document.getElementById("loginPassword"))
    document.getElementById("news").checked = false

    for (let i = 0; i < array.length; i++) {
        array[i].value = ""
    }



}

//function to clear the text in a field
function clearText(value) {
    value.value = ""
}

//testing function
function thisIsJustATest() {
    let x = document.getElementById("testing")
    let y = document.getElementById("loginPassword")
    x.innerHTML = y.value
}

//Switch between the login and sign up pages
function loginSignupSwitcher() {
    let x = document.getElementById("login")
    let y = document.getElementById("signup")
    if (x.style.display === "none") {
        y.style.display = "none"
        x.style.display = "block"
    }
    else {
        x.style.display = "none"
        y.style.display = "block"
    }
}


//Check if there is text in the fields
//Check fields against loginInformation (variable holding usernames, password, and emails) then logs you in
function checkLogin() {
    let x = document.getElementById("loginUsername").value;
    let y = document.getElementById("loginPassword").value;

    if (x === "") {
        alert("You need to enter a username or email, silly")
        x = document.getElementById("loginUsername")
        x.focus()
    }
    else if (y === "") {
        alert("You need to enter a password, silly")
        y = document.getElementById("loginPassword")
        y.focus()
    }
    else {
        for (let i = 0; i < loginInformation.length; i++) {
            x = document.getElementById("loginUsername")
            y = document.getElementById("loginPassword")
            if ((loginInformation[i].Username.toLowerCase() === x.value || loginInformation[i].Email.toLowerCase() === x.value) && loginInformation[i].Password.toLowerCase() === y.value) {
                console.log("login successful")
                break;
            }
            else {
                y.focus()
                y.value = ""
                alert("Invalid Login")
                break;
            }
        }
    }
}

//Set up switching the eye, black dots, and letters of password
function showPassword() {
    let x = document.getElementById("loginPassword")
    let y = document.getElementById("togglePassword")
    let switchEye = y.getAttribute("class") === "bi-eye-slash" ? "bi-eye" : "bi-eye-slash";
    let type = x.getAttribute("type") === "password" ? "text" : "password";
    y.setAttribute("class", switchEye);
    x.setAttribute("type", type);
}

//Press enter key for login
function enterLogin(e) {
    if (e.keyCode === 13) {
        checkLogin();
    }
}

function checkSignup() {
    let email = document.getElementById("signupEmail");
    let username = document.getElementById("signupUsername");
    let password = document.getElementById("signupPassword");
    let checkPassword = document.getElementById("checkSignupPassword")
    if (!email.value.includes("@") || !email.value.includes(".")) {
        alert("This is not an email!")
        email.focus()
    }
    else if (username.value.length < 8) {
        alert("This username is less than 8 characters!")
        username.focus()
    }
    else if (password.value.length < 8) {
        alert("This password is less than 8 characters!")
        password.focus()
        password.value = ""
        checkPassword.value = ""
    }
    else if (password.value !== checkPassword.value) {
        alert("Passwords do not match!")
        password.focus()
        password.value = ""
        checkPassword.value = ""
    }

    else {
        //check for newsletter
        let z = document.getElementById("news").checked
        if (z === true) {
            newsletterCheck = 1
        }

        //add information to array
        let x = {
            "Username": username.value,
            "Password": password.value,
            "Email": email.value
        }
        loginInformation.push(x)
        loginSignupSwitcher()
        let y = document.getElementById("loginUsername")
        y.value = x.Username
    }

}