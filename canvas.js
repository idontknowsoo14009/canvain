const colorPicker = document.getElementById('picker');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', () => {
  isDrawing = true;
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

function getMousePos(canvas, evt) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener('mousemove', (evt) => {
  if (isDrawing) {
    const { x, y } = getMousePos(canvas, evt);

    ctx.fillStyle = colorPicker.value;
    ctx.fillRect(x, y, 1, 1); // Draw a single pixel
  }
});

colorPicker.addEventListener('input', () => {
  // Update the drawing color based on the selected color
  ctx.fillStyle = colorPicker.value;
});
 
let downloadbtn = document.getElementById('dwnld') 

downloadbtn.addEventListener('click', () => { // download button  code
    const dataURL = canvas.toDataURL('image/png');
   const link = document.createElement('a'); 
   link.href = dataURL;
   link.download = "pixelart.png"
   link.click

})
