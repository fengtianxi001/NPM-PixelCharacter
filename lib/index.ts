interface OptionsProps {
	character: string | number
	row: number
	column: number
}

function pixelCharacter(character: number | string, row: number, column: number) {
	character = (character || 'F') + ''
	row = row > 12 ? row : 12
	column = column > 12 ? column : 12
	const width = character.length * column
	const height = row
	const ctx = createCanvas(width, height)
	createFont(ctx, character, width, height)
	return fetchArray(ctx, width, height)
}

function createCanvas(width: number, height: number) {
	const canavs = document.createElement('canvas')
	const ctx = canavs.getContext('2d') as CanvasRenderingContext2D
	ctx.clearRect(0, 0, width, height)
	return ctx
}

function createFont(ctx: CanvasRenderingContext2D, character: string, width: number, height: number) {
	ctx.font = `${height + 6}px SimSun`
	ctx.textAlign = 'center'
	ctx.textBaseline = 'middle'
	ctx.fillStyle = '#000'
	ctx.fillText(character, width / 2, height / 2)
}

function fetchArray(ctx: CanvasRenderingContext2D, width: number, height: number) {
	const imageData = ctx.getImageData(0, 0, width, height)
	const data = []
	for (let rowIndex = 0; rowIndex < height; rowIndex++) {
		const rows = []
		for (let colIndex = 1; colIndex <= width; colIndex++) {
			const tag = (rowIndex * width + colIndex) * 4 - 1
			const result = imageData['data'][tag] > 0 ? 1 : 0
			rows.push(result)
		}
		data[rowIndex] = rows
	}
	return data
}

export default pixelCharacter