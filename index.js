class PixelChars {
    constructor(options){
        this.chars = options.chars || "F"
        this.rowSize = options.row && options.row >12
        
    }
}

function drawer(txt, column, row) {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    column = txt.length * column
    canvas.width = column
    canvas.height = row
    ctx.clearRect(0, 0, column, row)
    const fontSize = `${row + 6}px`
    const fontFamily = 'SimSun'
    ctx.font = fontSize + " " + fontFamily
    ctx.textAlign = 'center';
    ctx.textBaseline = "middle";
    ctx.fillStyle = '#000'
    ctx.fillText(txt, column / 2, row / 2)
    document.body.appendChild(canvas)


    var data = ctx.getImageData(0, 0, column, row)
    var res = []
    
    for (var i = 1; i <= row; i++) {
        const rows = []
        for (var j = 1; j <= column; j++) {
            var pos = ((i - 1) * column + j) * 4 - 1

            if (data.data[pos] > 0) {
                rows.push(1)
            }else{
                rows.push(0)
            }
        }
        res[i] = rows
    }
    // wrap.innerHTML = res
    return res
}