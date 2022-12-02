let loginInformation = [
    {
        "Username": "Admin123",
        "Password": "AdminAdmin",
        "Email": "admin@admin.com"
    },
    {
        "Username": "sampleCustomer",
        "Password": "password123",
        "Email": "sample@customer.com",
    }
]

let menuItems = [
    {
        "itemName": "Mozz Sticks",
        "itemCost": "6.50"
    },
    {
        "itemName": "Buffalo Wings x12",
        "itemCost": "12.00"
    },
    {
        "itemName": "Chicken Quesadilla",
        "itemCost": "$6.70"
    },
    {
        "itemName": "Fried Pickle",
        "itemCost": "5.00"
    },
    {
        "itemName": "Beef Nachos",
        "itemCost": "9.99"
    },
    {
        "itemName": "Soft Pretzels",
        "itemCost": "5.00"
    },
    {
        "itemName": "Chicken Parm",
        "itemCost": "12.00"
    },
    {
        "itemName": "Burgers",
        "itemCost": "8.00"
    },
    {
        "itemName": "Slice of Pizza",
        "itemCost": "2.00"
    },
    {
        "itemName": "Cheesesteak",
        "itemCost": "9.99"
    },
    {
        "itemName": "BBQ Ribs",
        "itemCost": "26.19"
    },
    {
        "itemName": "French Fries",
        "itemCost": "2.99"
    },
    {
        "itemName": "Baked Mac & Cheese",
        "itemCost": "4.98"
    },
    {
        "itemName": "Broccoli",
        "itemCost": "4.00"
    },
    {
        "itemName": "Asparagus",
        "itemCost": "3.00"
    },
    {
        "itemName": "Loaded Mash Potatos",
        "itemCost": "6.00"
    },
    {
        "itemName": "Side Salad",
        "itemCost": "4.00"
    },
    {
        "itemName": "Cheesecake",
        "itemCost": "6.49"
    },
    {
        "itemName": "Tiramisu",
        "itemCost": "7.00"
    }
]




//This is to be changed in they want newsletter for discount later
let newsletterCheck = 0


//When you want to order an item, click on the back of a card
function selectBorderBack(x) {
    let y = x.parentElement
    y = y.children[0]


    if (x.style.border === "3pt solid rgb(40, 255, 54)") {
        x.style.border = "0pt"
        y.style.border = "0pt"
    } else {
        y.style.border = "3pt solid rgb(40, 255, 54)"
        x.style.border = "3pt solid rgb(40, 255, 54)"
    }
}

//When you want to order an item, click on the front of the card
function selectBorderFront(x) {
    let y = x.parentElement
    y = y.children[1]


    if (x.style.border === "3pt solid rgb(40, 255, 54)") {
        x.style.border = "0pt"
        y.style.border = "0pt"
    } else {
        y.style.border = "3pt solid rgb(40, 255, 54)"
        x.style.border = "3pt solid rgb(40, 255, 54)"
    }
}

//when page loads, clear the value of inputs
function emptyForm() {
    let array = []
    array.push(document.getElementById("signupEmail"))
    array.push(document.getElementById("signupUsername"))
    array.push(document.getElementById("signupPassword"))
    array.push(document.getElementById("checkSignupPassword"))
    array.push(document.getElementById("loginUsername"))
    array.push(document.getElementById("loginPassword"))
    array.push(document.getElementById("cardNum"))
    array.push(document.getElementById("date"))
    array.push(document.getElementById("CVC"))
    array.push(document.getElementById("name"))
    array.push(document.getElementById("zip"))
    document.getElementById("news").checked = false

    for (let i = 0; i < array.length; i++) {
        array[i].value = ""
    }

    let back = document.getElementsByClassName("flip-card-back")
    for (let i = 0; i < back.length; i++) {
        document.getElementsByClassName("flip-card-back")[i].addEventListener("click", function () { selectBorderBack(this) })
        document.getElementsByClassName("flip-card-front")[i].addEventListener("click", function () { selectBorderFront(this) })
    }
document.getElementById("loginUsername").focus()
}

function testing() {
    console.log(loginInformation[1].Username)
}

//function to clear the text in a field
function clearText(value) {
    value.value = ""
}

//Switch between the login and sign up pages
function loginSignupSwitcher() {
    let x = document.getElementById("login")
    let y = document.getElementById("signup")
    let z = document.getElementById("payment")
    let a = document.getElementById("payment-info")
    
    if (x.style.display === "none") {
        y.style.display = "none"
        x.style.display = "block"
        document.getElementById("loginUsername").focus()
    }
    else {
        x.style.display = "none"
        y.style.display = "block"
        document.getElementById("signupEmail").focus()
    }

    // x.style.display = "none"
    // y.style.display = "none"
    // z.style.display = "block"
    // a.style.display = "none"
}

//Switch between payment options and inputting credit card info
function paymentSwitcher() {
    let x = document.getElementById("payment")
    let y = document.getElementById("payment-info")
    if (x.style.display === "none") {
        y.style.display = "none"
        x.style.display = "block"
    }
    else {
        x.style.display = "none"
        y.style.display = "block"
    }
}

//When login is successful + changing background
function loginToOrder() {
    let y = document.getElementById("body");
    let x = document.getElementById("whitespace");
    let z = document.getElementById("ordering");
    x.style.display = "none"
    z.style.display = "block"
    y.style.backgroundImage = "url('Images/Background\ 4.jpg')"
}

//Changing between sets of 10 items on ordering page
function orderPageSwitcher() {
    let x = document.getElementsByClassName("grid")
    let y = document.getElementsByClassName("grid1")
    let change = document.getElementsByClassName("display-next-page")[0].children[0]
    if (x[0].style.display === "none") {
        x[0].style.display = "grid"
        x[1].style.display = "none"
        y[0].style.display = "grid"
        y[1].style.display = "none"
        change.innerHTML = "Next Page"
    } else {
        x[0].style.display = "none"
        x[1].style.display = "grid"
        y[0].style.display = "none"
        y[1].style.display = "grid"
        change.innerHTML = "Go Back"
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
        let z = true
        x = document.getElementById("loginUsername")
        y = document.getElementById("loginPassword")
        for (let i = 0; i < loginInformation.length; i++) {
            if ((loginInformation[i].Username.toLowerCase() === x.value.toLowerCase() || loginInformation[i].Email.toLowerCase() === x.value.toLowerCase()) && loginInformation[i].Password.toLowerCase() === y.value.toLowerCase()) {
                z = false
                break;
            }
            else {
                z = true
            }}
        if (z === true) {
            y.focus()
            y.value = ""
            alert("Invalid Login")
        } else {
            loginToOrder()
        }}
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

//press enter key for signup
function enterSignup(e) {
    if (e.keyCode === 13) {
        checkSignup();
    }
}

//Check all the fields of the sign up page
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
    else if (checkAgainstList() === true) {
        alert("This account already exists!")
        email.focus()
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
        //switch to login page, place username in username box
        loginSignupSwitcher()
        let y = document.getElementById("loginUsername")
        y.value = x.Username
        document.getElementById("loginPassword").focus()
    }

}

//check if an account already exists
function checkAgainstList() {
    let x = document.getElementById("signupEmail").value
    let y = document.getElementById("signupUsername").value
    x = x.toLowerCase()
    y = y.toLowerCase()
    for (let i = 0; i < loginInformation.length; i++) {
        if (x.toLowerCase() === loginInformation[i].Email.toLowerCase() || y.toLowerCase() === loginInformation[i].Username.toLowerCase()) {
            return true
        }}
}

//lol - go to paypal page :3
function paypal() {
    window.location.href = "https://www.paypal.com"
}