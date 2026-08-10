class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //create map with key of nums[i] and value of i
        let newMap = new Map();
        for(let i = 0; i < nums.length; i++){
            if(newMap.has(target - nums[i])){
                return [newMap.get(target - nums[i]), i]
            }
            newMap.set(nums[i], i)
        }

    }
}
