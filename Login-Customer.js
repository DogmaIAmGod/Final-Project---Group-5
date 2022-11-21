let loginInformation = [
    {
        "Username" : "Admin",
        "Password" : "Admin123",
        "Email" : "admin@admin.com"
    },
    {
        "Username" : "sampleCustomer",
        "Password" : "password123",
        "Email" : "sample@customer.com",
    }
]

function clearText(value) {
value.value = ""
}

function thisIsJustATest() {
    let x = document.getElementById("testing")
    let y = document.getElementById("loginPassword")
    x.innerHTML = y.value
}

function loginSignupSwitcher() {
        let x = document.getElementById("login")
        let y = document.getElementById("signup")
    
    if (x.style.display === "none") {
    y.style.display = "none"
    x.style.display = "block"
    console.log("left")
    }
    else {
    x.style.display = "none"
    y.style.display = "block"
    console.log("right")
    }   
}

function checkLogin() {
    let x = document.getElementById("loginUsername").value;
    // console.log(x)
    let y = document.getElementById("loginPassword").value
    // console.log(y)

    if (x === "") {
        alert("You need to enter a username silly")
        x = document.getElementById("loginUsername")
        x.focus()
    }
    
    else if (y === "") {
        alert("You need to enter a password silly")
        y = document.getElementById("loginPassword")
        y.focus()
    }
    else {
        for(let i=0; i < loginInformation.length; i++) {
            x = document.getElementById("loginUsername")
            y = document.getElementById("loginPassword")
            if (loginInformation[i].Username.toLowerCase() === x.value && loginInformation[i].Password.toLowerCase() === y.value) {
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

// function showPassword() {
//     let x = document.getElementById("loginPassword");
//     if (x.type === "password") {
//         x.type = "text";
//     } else {
//         x.type = "password"
//     }
// }

function showPassword() {
    let x = document.getElementById("loginPassword")
    let y = document.getElementById("togglePassword")
    let switchEye = y.getAttribute("class") === "bi-eye-slash" ? "bi-eye" : "bi-eye-slash";
    let type = x.getAttribute("type") === "password" ? "text" : "password";
    y.setAttribute("class", switchEye);
    x.setAttribute("type", type);
}