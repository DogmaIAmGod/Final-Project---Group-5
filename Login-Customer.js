function loginSignupSwitcher() {
        let x = document.getElementById("login");
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
    console.log(x)
    let y = document.getElementById("loginPassword").value
    console.log(y)

    if (x === "") {
        alert("You need to enter a username silly")
        x = document.getElementById("loginUsername")
        x.focus()
    }
    
    else if (y === "") {
        alert("You nned to enter a password silly")
        y = document.getElementById("loginPassword")
        y.focus()
    }
}