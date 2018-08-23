
  // Create the canvas
  var canvas = document.createElement("canvas")
  var ctx = canvas.getContext("2d")
  canvas.width = 810 // кратное 6
  canvas.height = 810 // кратное 6
  canvas.id = "ficus"
  document.body.appendChild(canvas)
  // update canvas
  let last = performance.now(),
  	fps = 10, // частота обновления сервера
  	slomo = 1, // slow motion multiplier // скорость сцены (обработка update)
  	step = 1 / fps,
  	slowStep = slomo * step,
  	dt = 0,
  	now

  let frame = () => {

  	now = performance.now()
  	dt = dt + Math.min(1, (now - last) / 1000)

  	while (dt > slowStep) {
  		dt = dt - slowStep
  		update(step)
  	}

  	last = now

  	render(dt / slomo * fps)
  	requestAnimationFrame(frame)
  }

  // start
  // requestAnimationFrame(frame)

let stat = 0
let x =400
let y =400

function update(step) { // (step)
  if( stat == 0) {
    x = 500
    y = 500
    stat = 1
  } else {
    x = 400
    y = 400
    stat = 0
  }
}

// реализация отрисовки мира
function render(int) {
  ctx.fillStyle = "green"
	ctx.fillRect(x, y, 10, 10)
}