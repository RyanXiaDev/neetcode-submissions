class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let maxSeq = 0
        for(const val of set){
            if(!set.has(val-1)){
                //build the sequence
                let curVal = val
                while(set.has(curVal)){
                    curVal++
                }
                maxSeq = Math.max(maxSeq, curVal-val)
            }
        }
        return maxSeq
    }
}
