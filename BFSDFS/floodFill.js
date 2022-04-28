/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    const target = image[sr][sc];
    if(target === newColor) return image
    const queue = [[sr, sc]];
    console.log(queue)

    while(queue.length) {
        const [row, col] = queue.shift();
        console.log([row, col])
        if(image[row][col] === target) {
            image[row][col] = newColor;
            console.log(image)
            if(row-1 >= 0) queue.push([row-1, col])
            if(col-1 >= 0) queue.push([row, col-1])
            if(row+1 < image.length) queue.push([row+1, col])
            if(col+1 < image[0].length) queue.push([row, col+1])
        }
       
    }
    return image
   
};