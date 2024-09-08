/* COLOR CHANGE */

const colorChange = document.querySelectorAll(".list1 li");

for(user of colorChange) {
    user.addEventListener("click", function() {
        console.log(this);
        this.style.color = "blue";
    });
}

// BACKGROUND COLOR CHANGE

const backgroundColorChange = document.querySelectorAll(".list2 li");

for(user of backgroundColorChange) {
    user.addEventListener("click", function() {
        console.log(this);
        this.style.backgroundColor = "yellow";
        this.style.display = "block";
    });
}

// FONT SIZE TRANSFORM

const fontSize = document.querySelectorAll(".list3 li");

for(user of fontSize) {
    user.addEventListener("click", function() {
        console.log(this);
        this.style.fontSize = "1.5rem";
    })
}