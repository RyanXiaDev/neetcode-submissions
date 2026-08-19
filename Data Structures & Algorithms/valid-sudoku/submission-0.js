class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const checkValid = (arr) =>{
            const seen = new Set()
            for(let i = 0; i < arr.length; ++i){
                if(arr[i] === '.') continue;
                if(seen.has(arr[i])){
                    return false
                }
                seen.add(arr[i])
            }
            return true
        }

        const constructInner = (m, k) => {
            const arr = []
            for(let i = 0; i < 3; i++){
                for(let j= 0; j < 3; ++j){
                    arr.push(board[m+i][k+j])
                }
            }
            return arr
        }

        //check row and column
        for(let i = 0; i< 9; ++i){
            //row array
            if(!checkValid(board[i])){
                return false
            }
            // construct column array
            const col = []
            for(let j = 0; j < 9; ++j){
                col.push(board[j][i])
            }
            if(!checkValid(col)){
                return false
            }
        }
        // check 3x3
        for(let i = 0; i < 9; i += 3){
            for(let j = 0; j < 9; j +=3){
                //construct 3x 3 board
                const arr = constructInner(i, j)
                if(!checkValid(arr)){
                    return false
                }
            }
        }

        return true


    }
}
