class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length -1
        while(i<j){
            const add = numbers[i] + numbers[j]
            if(add === target){
                return [i+1,j+1]
            }else if(add > target){
                j--
            }else{
                i++
            }
        }
        return
    }
}
