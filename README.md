# 🚀 pixel-character

## 1. Installation
```shell
npm i pixel-character
```

## 3. Loading
```javascript
import pixelCharacter from "pixel-character"
```

## 3. Usage
```javascript
const dots = pixelCharacter(character, row, column)
```
- character \<number\>\<string\>
  - The characters you need to convert
  - default: "F" 


- row\<number\>
  - The number of rows in the generated two-dimensional lattice array
  - The number must be greater than 12
  - default: 12

- column<number\>
    - The number of columns in the generated two-dimensional lattice array
    - The number must be greater than 12
    - default: 12


## 3. Example
```javascript
import pixelCharacter from "pixel-character"
const dots = pixelCharacter("A",12,12)
console.log(dots)
```

```javascript
/* console result */
//0 => blank
//1 => fill
[
	[0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
	[0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
	[0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
]
```

```javascript
const dots = pixelCharacter("哈",20,20)
```

```javascript
/* console result */
//0 => blank
//1 => fill
[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	[1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
	[1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
	[1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
	[1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	[1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
	[1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
]
```