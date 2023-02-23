const username = document.getElementById("username");
const usrnm = localStorage.getItem("username").at(0).toUpperCase() + localStorage.getItem("username").slice(1);

username.innerHTML = usrnm;

