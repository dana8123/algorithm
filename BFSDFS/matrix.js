/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var findzero = function(mat) {
    let newMat = new Array(mat.length);
    const queue = [];
    
    for(let i = 0; i<mat.length; i++) {
        for(let j = 0; j<mat[0].length; j++) {
            newMat[i] = new Array(mat[i].length)
            if(mat[i][j] === 0) {
                queue.push([i,j]);
                newMat[i][j] = 0;
            }
        }
    }
    
    return [queue, newMat];
};

function check (row, col, mat) {
    return (row > -1 && col > -1 && row < mat.length && col < mat[0].length);
}


function updateMatrix(mat) {
    const [queue, newMat] = findzero(mat);
    const travel = [[-1,0],[0,-1],[1,0],[0,1]];
    let distance = 1;
    
    while(queue.length) {
        let [row, col] = queue.shift();
        
        for(let i = 0; i < queue.length; i++) {
            for(let [moveRow, moveCol] of travel) {
                row = row + moveRow;
                col = col + moveCol;
                if(check(row, col, mat)) {
                    newMat[row, col] = distance;
                    queue.push([row,col])
                }
            }
        }
        distance++
    }
    return newMat;
}