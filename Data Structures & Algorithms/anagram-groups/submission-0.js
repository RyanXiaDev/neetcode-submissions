class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // lower case only
        let freqMap = new Map();

        for(let i = 0; i < strs.length; ++i){
            //create char freq map based on char freq
            let curKey = Array(26).fill(0);
            for(let j = 0; j < strs[i].length; ++j){
                const codeDiff = strs[i].charCodeAt(j) - "a".charCodeAt(0)
                curKey[codeDiff]++
            }
            const curKeyStr = curKey.join(",")
            //console.log(curKeyStr)
            //check key in global anagrams count
            if(freqMap.has(curKeyStr)){
                freqMap.get(curKeyStr).push(strs[i])
            }else{
                freqMap.set(curKeyStr, [strs[i]])
            }
        }
        return Array.from(freqMap.values())
    }
}
