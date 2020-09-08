const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext('2d')
c.fillStyle = 'white'
// c.fillRect(100, 100, 100, 100)

const debounce = (func) => {
  let timer
  return (event) => {
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(func, 100, event)
  }
}

window.addEventListener('resize', debounce(() => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // for (let i = 0; i < 60; i++) {
  //   for (let j = 0; j < 60; j++) {
  //     c.fillStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
  //     c.fillRect(j * 20, i * 20, 10, 10)
  //   }
  // }
  // for (let i = 0; i < 60; i++) {
  //   for (let j = 0; j < 60; j++) {
  //     c.fillStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
  //     c.fillRect(j * 20, i * 20, 25, 25)
  //   }
  // }
  for (let i = 0; i < 61; i++) {
    for (let j = 0; j < 61; j++) {
      c.strokeStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`
      c.strokeRect(j * 20, i * 20, 20, 20)
    }
  }

  c.font = '148px Courier New'
  c.fillText('AMAZING HALIM', 50, 500)
  c.beginPath()
  c.moveTo(10, 10)
  c.lineTo(300, 300)
  c.stroke()

}))
