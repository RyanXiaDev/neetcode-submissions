class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length-1;
        let curVol = 0;
        let maxVol = 0;
        while(i < j){
            curVol = Math.min(heights[i], heights[j]) * (j-i);
            maxVol = Math.max(maxVol, curVol);
            if(heights[i] > heights[j]){
                j--
            }else{
                i++
            }
        }
        return maxVol
    }
}
