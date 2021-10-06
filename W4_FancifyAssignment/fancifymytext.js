function biggerOnClick() {
    alert("Hello, world!");
    document.getElementById("text-area").style.fontSize = "24px";
};

function fancifyOnClick() {
    document.getElementById("text-area").style.fontWeight = "bold";
    document.getElementById("text-area").style.color = "blue";
    document.getElementById("text-area").style.textDecoration = "underline";
    alert("Your text is now fancy! Woo-hoo!");
};

function borifyOnClick() {
    document.getElementById("text-area").style.color = "black";
    document.getElementById("text-area").style.font = "12px";
    document.getElementById("text-area").style.fontWeight = "normal";
    document.getElementById("text-area").style.textDecoration = "revert";
    alert("Your text is now boring! Boo-hoo!");
}

function uppercase() {
    let input = document.getElementById("text-area").value;
    input = input.toUpperCase();
    //document.getElementById("text-area").value = input;

    var splitString = input.split(".");
    input = splitString.join("-Moo");
    document.getElementById("text-area").value = input;
}