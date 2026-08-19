class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = Array(temperatures.length).fill(0)
        const stack = [[temperatures[0],0]]
        for(let i = 1; i < temperatures.length; ++i){
            if(stack[stack.length-1][0] >= temperatures[i]){
                stack.push([temperatures[i],i])
            }else{
                while(stack.length > 0 && stack[stack.length-1][0] < temperatures[i]){
                    
                    const popped = stack.pop()
                    result[popped[1]] = i - popped[1]
                }
                stack.push([temperatures[i],i])
            }
        }
        return result
    }
}
