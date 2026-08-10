class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPair(m, n){
        if (m === '[' && n === ']' ||
        m === '(' && n === ')' ||
        m === '{' && n === '}'
        ){
            return true
        }
        return false
    }

    isValid(s) {
        if(s.legnth === 1){ return false}
        let stack = [s[0]]
        for(let i = 1; i < s.length; i++){
            if(this.isPair(stack[stack.length-1], s[i])){
                stack.pop()
            }else{
                stack.push(s[i])
            }
            
        }
        return stack.length === 0
 

    }
}
