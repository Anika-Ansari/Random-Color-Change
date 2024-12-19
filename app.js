
function backgroundColor() {
let colors=["#ff0000","#ffa07a","#f08080","#fa8072","#ffd700","#648c11","#008b8b",
    "#a6e7ff","#808000","#4169e1","#800080","#66023c","#848482","#ff69b4","#cf3476","#cf3476","#a52a2a"];
  
    var randomColor = colors [Math.floor(Math.random() *colors.length)];
       document.body.style.backgroundColor = randomColor
}

