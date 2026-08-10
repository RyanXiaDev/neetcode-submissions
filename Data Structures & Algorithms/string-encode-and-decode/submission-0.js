class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""
        for(let i = 0; i < strs.length; ++i){
            encoded += strs[i].length + "#" + strs[i]
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let decoded = []
        while(i < str.length){
            let curNumStr = "";
            while(i < str.length && str[i] !== "#"){
                curNumStr += str[i]
                i++
            }
            i++
            let curNum = Number(curNumStr)
            let curStr = ""
            let end = i + curNum
            for(; i < end; ++i){
                curStr += str[i]
            }
            decoded.push(curStr)
        }
        return decoded
    }
}
