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
    array.push(document.getElementById("cardNum"))
    array.push(document.getElementById("date"))
    array.push(document.getElementById("CVC"))
    array.push(document.getElementById("name"))
    array.push(document.getElementById("zip"))
    document.getElementById("news").checked = false

    for (let i = 0; i < array.length; i++) {
        array[i].value = ""
    }


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
    }
    else {
        x.style.display = "none"
        y.style.display = "block"
    }

    // x.style.display = "none"
    // y.style.display = "none"
    // z.style.display = "none"
    // a.style.display = "block"
}

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

function loginToOrder() {
    let x = document.getElementById("whitespace");
    x.style.display = "none"
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
        for (let i = 0; i < loginInformation.length; i++) {
            x = document.getElementById("loginUsername")
            y = document.getElementById("loginPassword")
            if ((loginInformation[i].Username.toLowerCase() === x.value || loginInformation[i].Email.toLowerCase() === x.value) && loginInformation[i].Password.toLowerCase() === y.value) {
                z = false
                break;
            }
            else {
                z = true
            }
            console.log(z)
        }
        if (z === true) {
            y.focus()
            y.value = ""
            alert("Invalid Login")
        } else {
            console.log("login successful")
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
    else if (checkAgainstList() === true) {
        alert("This account already exists!")
        email.focus()
        password.value = ""
        checkPassword.value = ""
    }
    else {
        console.log(loginInformation.includes(email.value))
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
    }

}

function checkAgainstList() {
    let x = document.getElementById("signupEmail").value
    let y = document.getElementById("signupUsername").value
    x = x.toLowerCase()
    y = y.toLowerCase()
    for (let i = 0; i < loginInformation.length; i++) {
        if (x === loginInformation[i].Email.toLowerCase() || y === loginInformation[i].Username.toLowerCase()) {
            return true
        }
    }
}

function paypal() {
    window.location.href = "https://www.paypal.com"
}

function creditCardCheck() {

}
