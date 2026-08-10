class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1
        let prefix = []
        
        for(let i = 0; i < nums.length; ++i){
            prod = prod * nums[i]
            prefix.push(prod)
        }
        //reset prod
        prod = 1;
        let suffix = []
        for(let i = nums.length-1; i >= 0; i--){
            prod = prod * nums[i]
            suffix.push(prod)
        }
        
        let result = []
        for(let i = 0; i < nums.length; ++i){

            result.push((i >0 ? prefix[i-1] : 1)*
            (i < nums.length-1 ? suffix[nums.length-2-i] : 1))
        }
        return result
    }
}
