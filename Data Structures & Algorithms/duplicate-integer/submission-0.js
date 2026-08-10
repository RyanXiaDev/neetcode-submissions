class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //create hash map
        const numsSet = new Set(nums)
        return nums.length !== numsSet.size

    }
}
