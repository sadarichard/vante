const colorChange = document.querySelectorAll(".list1 li");

for(user of colorChange) {
    user.addEventListener("click", function() {
        console.log(this);
        this.style.color = "blue";
    });
}