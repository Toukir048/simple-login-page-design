let successText = document.getElementById('login-text');
let userName = document.getElementById('username');
let passWord = document.getElementById('password');
document.getElementById('login-btn').addEventListener('click', function () {
    if (passWord.value === 'admin123' && userName.value === 'admin') {
        successText.innerText = `login success ${userName.value}`;
        successText.style = "color : green";
        document.querySelector(".loader-container").style.display = "flex";
        setTimeout(function () {
            location.href = "https://toukir048.github.io/demo-website/";
        }, 3000);
    }
    else if (passWord.value === "" && userName.value === "") {
        alert('Details Cannot be Empty❌');
    }
    else {
        successText.innerText = `Wrong Data`;
        alert('Wrong information');
        successText.style = "color : red";
    }
})



window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loader-container").style.display = "none";
    }, 2000);
});
