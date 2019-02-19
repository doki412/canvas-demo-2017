var canvas = document.getElementById('xxx')
var ctx = canvas.getContext('2d')

function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.height = pageHeight
    canvas.width = pageWidth
}

function drawCircle(x, y, radius) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineWidth = 6
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
}

window.onresize = function () {
    canvasScale()
}
var painting = false
var eraserEnabled = false
var lastpoint = {
    x: undefined,
    y: undefined
}
canvas.onmousedown = function (a) {
    painting = true
    var x = a.clientX
    var y = a.clientY
    if (eraserEnabled) {
        ctx.clearRect(x - 5, y - 5, 10, 10)
    } else {
        drawCircle(x, y, 3)
        lastpoint = {
            "x": x,
            "y": y
        }
    }

}

canvas.onmousemove = function (a) {
    var x = a.clientX
    var y = a.clientY
    if (eraserEnabled) {
        ctx.clearRect(x - 5, y - 5, 10, 10)
    } else {
        if (painting) {
            var newpoint = {
                "x": x,
                "y": y
            }
            drawCircle(x, y, 3)
            drawLine(lastpoint.x, lastpoint.y, newpoint.x, newpoint.y)
            lastpoint = newpoint
        } else { }
    }
}

canvas.onmouseup = function (a) {
    painting = false
}
eraser.onclick = function () {
    eraserEnabled = !eraserEnabled
}