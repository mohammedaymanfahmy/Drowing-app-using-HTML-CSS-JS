const canvas = document.getElementById("board");
ctx = canvas.getContext("2d");

const miniBoard = document.getElementById("miniBoard")
ctxMiniBoard = miniBoard.getContext("2d");


const clrBtn = document.getElementById("clrBtn");
const colorBtn = document.getElementById("colorBtn");
const eraserBtn = document.getElementById("eraserBtn");
const rangeBtn = document.getElementById('rangeBtn');
const importImg = document.getElementById('import')


rangeBtn.addEventListener("change",()=>{
  ctxMiniBoard.clearRect(0, 0, miniBoard.width, miniBoard.height);
  ctxMiniBoard.beginPath();
  ctxMiniBoard.arc(miniBoard.height/2, miniBoard.width/2, rangeBtn.value, 0, Math.PI * 2);
  ctxMiniBoard.fillStyle = "black"
  ctxMiniBoard.strokeStyle = "black"
  ctxMiniBoard.stroke();
  ctxMiniBoard.fill();

})


let size = rangeBtn.value;
let isPressed;

let Eraser_is_Presser;


eraserBtn.addEventListener('click',()=>{
  /* cursor: not-allowed; */
  Eraser_is_Presser = !Eraser_is_Presser;
  if(Eraser_is_Presser){
    canvas.style.cursor = "not-allowed"
  }else{
    canvas.style.cursor = ""
  }

})

x = undefined;
y = undefined;


canvas.addEventListener("mousedown", () => {
  isPressed = true;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;

});


let base_image= new Image();
base_image.src = 'showpagehero_gumball2x.c5a23ee5.webp';
// ctx.drawImage(base_image, 100, 100);
base_image.addEventListener("onload",()=>{
  ctx.drawImage(base_image, 111, 111, 250, 208)
  console.log("asd");
})

// Create our image
let newImage = new Image();

// When it loads
importImg.onchange = () => {
  // let x = importImg.value
  newImage.src = "R.png"
    // Draw the image onto the context
    ctx.drawImage(newImage, 0, 0, 555, 555);
}

// canvas.addEventListener("mousemove", (e) => {
//   if (isPressed) {
//     let x = e.offsetX;
//     let y = e.offsetY;
//     let color = colorBtn.value;
//     if(Eraser_is_Presser){
//       color = "white"
//     }
//     //draw function
//     draw(x, y,color);
//     // console.log(e);
//   }
// });

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    let color = colorBtn.value;
    if(Eraser_is_Presser){
      color = "white"
    }
    //draw function
    drawLine(x, y,color,x2,y2);
    x = x2;
    y = y2;
    // console.log(e);
  }
});

// drawLine(100,100,"red",200,200)

// function draw(x, y,clr) {
//   ctx.beginPath();
//   ctx.arc(x, y, rangeBtn.value, 0, Math.PI * 2);
//   ctx.fillStyle = clr
//   ctx.strokeStyle = clr

//   ctx.stroke();
//   ctx.fill();
// }

function drawLine(x, y,clr,x2,y2) {
  ctx.beginPath();
  ctx.moveTo(x,y)
  ctx.lineTo(x2,y2)
  ctx.lineWidth = rangeBtn.value
  // ctx.fillStyle = clr
  ctx.strokeStyle = clr
  ctx.stroke();
  // ctx.fill();
}


clrBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});


let link = document.getElementById('link');

const imgName = document.createElement("input");

    link.addEventListener("click",()=>{
      let imgName = prompt("Enter Imag Name" , "untiteld")
      link.setAttribute('download', imgName +'.png');
      link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    });