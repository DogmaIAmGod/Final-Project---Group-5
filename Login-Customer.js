function login() {
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