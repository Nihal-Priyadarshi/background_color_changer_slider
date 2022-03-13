function color() {
    let btn = document.getElementById("submit");
    btn.onclick = function () {
        let red = document.getElementById("red").value;
        let green = document.getElementById("green").value;
        let blue = document.getElementById("blue").value;
        let alpha = document.getElementById("alpha").value;

        var colors = ['#000000', '#ffffff'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById("heading").style.color = random_color;
        document.getElementById("para").style.color = random_color;
        document.getElementById("text1").style.color = random_color;
        document.getElementById("text2").style.color = random_color;
        document.getElementById("text3").style.color = random_color;
        document.getElementById("text4").style.color = random_color;

        let display = document.getElementById("display");
        display.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    };
}
color();