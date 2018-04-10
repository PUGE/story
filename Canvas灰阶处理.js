function grayFilter (canvasDom) {
  const ctx = canvasDom.getContext('2d')
  // 白色填充
  ctx.rect(0, 0, canvasDom.width, canvasDom.height)
  ctx.fillStyle = "white"
  ctx.fill()
  let canvasData = ctx.getImageData(0, 0, canvasDom.width, canvasDom.height)
  for (let x = 0; x < canvasData.width; x++) {    
    for ( let y = 0; y < canvasData.height; y++) {
      // Index of the pixel in the array    
      let idx = (x + y * canvasData.width) * 4
      let r = canvasData.data[idx + 0]
      let g = canvasData.data[idx + 1]
      let b = canvasData.data[idx + 2]
      // calculate gray scale value    
      let gray = .299 * r + .587 * g + .114 * b
      // assign gray scale value    
      canvasData.data[idx + 0] = gray; // Red channel
      canvasData.data[idx + 1] = gray; // Green channel
      canvasData.data[idx + 2] = gray; // Blue channel
      canvasData.data[idx + 3] = 255; // Alpha channel
      // add black border
      if (x < 8 || y < 8 || x > (canvasData.width - 8) || y > (canvasData.height - 8)) {    
        canvasData.data[idx + 0] = 0
        canvasData.data[idx + 1] = 0
        canvasData.data[idx + 2] = 0
      }    
    }    
  }
  ctx.putImageData(canvasData, 0, 0)
}
