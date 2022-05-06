// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
//  var firstRotten = function(grid) {
//     const queue = [];
//     const count = 0;
//     for(let i = 0; i < grid.length; i++) {
//         for(let j = 0; j < grid[0].length; j++) {
//             if(grid[i][j] === 2) queue.push([i,j]);
//         }
//     }
//     return queue
// };

// const orangesRotting = function(grid) {
//     const queue = firstRotten(grid);
//     console.log(queue, queue.length)
//     let count = 1;
//     const travels = [[1,0],[0,1],[-1,0],[0,-1]];
    
//     while(queue.length) {
//         let current = queue.shift();
//         let [row, col] = current;
        
//         for(let [a, b] of travels) {
//             row = row + a;
//             col = col + b;
            
//             if(grid[row, col] !== 2 && row > -1 && col > -1 && row < grid.length && col < grid[0].length) {
//                 grid[row,col] = grid[row, col] + 1
//                 queue.push([row, col]);
//             }
//         }
//         count++
//     }
//     console.log(count)
//     return count
// };


// orangesRotting([[2,1,1],[0,1,1],[1,0,1]]);

var orangesRotting = function(grid) {
    let queue = [];
    let minutes = 0;
    let fresh = 0;
    for (let i=0;i<grid.length;i++) {
        for (let j=0;j<grid[0].length;j++) {
            if (grid[i][j]==1) fresh++;
            if (grid[i][j]==2) queue.push([i, j]);
        }
    }

    while (queue.length!=0 && fresh) {
        let dR = [0,-1,0,1];
        let dC = [-1,0,1,0];
        
        let next = [];
        while (queue.length!=0 ) {
            let current = queue.shift();
            for (let i=0;i<dR.length;i++) {
                let nR = current[0]+dR[i];
                let nC = current[1]+dC[i];
                if (nR>=0 && nC>=0 && nR<grid.length && nC<grid[0].length) {
                    if (grid[nR][nC]==1) {
                        grid[nR][nC]=2;
                        fresh--;
                        next.push([nR,nC]);
                    }
                }
            }
        }
        minutes++;
        queue = next;
    }

    return fresh==0?minutes:-1;
};