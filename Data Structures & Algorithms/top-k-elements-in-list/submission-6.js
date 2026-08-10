class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //create freq map
        let map = new Map();
        let result = []
        for(let i = 0; i < nums.length; ++i){
            if(map.has(nums[i])){
                map.set(nums[i], map.get(nums[i])+1)
            }else{
                map.set(nums[i], 1)
            }
        }
        
        let bucket = Array.from({ length: nums.length + 1 }, () => []);
        
        for(const [key, value] of map){
            bucket[value].push(key)
        }
        // convert bucket to result
        let count = 0
        let curIdx = bucket.length-1;
        while(count < k){
            for(let k = 0; k < bucket[curIdx].length; ++k){
                result.push(bucket[curIdx][k])
                count++
            }
            curIdx--
        }
        return result
    }
}
