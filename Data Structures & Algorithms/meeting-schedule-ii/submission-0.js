/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        //create two arrays for start and end
        let s = [];
        let e = [];
        for(let i = 0; i < intervals.length; i++){
            s.push(intervals[i].start);
            e.push(intervals[i].end);
        }
        //sort two arrays
        s.sort((a,b)=>a-b);
        e.sort((a,b)=>a-b);
        let m = 0;
        let n = 0;
        let count = 0
        let maxCount = 0
        while(n < e.length){
            while(m < s.length && e[n] > s[m]){
                count++
                m++
                maxCount = Math.max(count, maxCount)
            }
            count--
            n++
        }
        return maxCount

    }
}
