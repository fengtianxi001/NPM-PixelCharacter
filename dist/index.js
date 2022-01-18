(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function pixelCharacter(character, row, column) {
        character = (character || 'F') + '';
        row = row > 12 ? row : 12;
        column = column > 12 ? column : 12;
        var width = character.length * column;
        var height = row;
        var ctx = createCanvas(width, height);
        createFont(ctx, character, width, height);
        return fetchArray(ctx, width, height);
    }
    function createCanvas(width, height) {
        var canavs = document.createElement('canvas');
        var ctx = canavs.getContext('2d');
        ctx.clearRect(0, 0, width, height);
        return ctx;
    }
    function createFont(ctx, character, width, height) {
        ctx.font = "".concat(height + 6, "px SimSun");
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#000';
        ctx.fillText(character, width / 2, height / 2);
    }
    function fetchArray(ctx, width, height) {
        var imageData = ctx.getImageData(0, 0, width, height);
        var data = [];
        for (var rowIndex = 0; rowIndex < height; rowIndex++) {
            var rows = [];
            for (var colIndex = 1; colIndex <= width; colIndex++) {
                var tag = (rowIndex * width + colIndex) * 4 - 1;
                var result = imageData['data'][tag] > 0 ? 1 : 0;
                rows.push(result);
            }
            data[rowIndex] = rows;
        }
        return data;
    }
    exports.default = pixelCharacter;
});
