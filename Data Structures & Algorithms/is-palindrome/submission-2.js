class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // remove non-alphanumeric 
        function isAlphanumericASCII(char) {
            const code = char.charCodeAt(0);
            
            return (code >= 48 && code <= 57)  || // 0-9
                (code >= 65 && code <= 90)  || // A-Z
                (code >= 97 && code <= 122);   // a-z
        }
        // two pointer method 
        let i = 0; 
        let j= s.length-1
        while (i < j){
            while(i < j && !isAlphanumericASCII(s[i])){
                console.log("i", i)
                i++
            }
            while(i < j && !isAlphanumericASCII(s[j])){
                console.log("j", j)
                j--
            }
            console.log ("ij", i, j)
            if(i>=j){return true}
            if (s[i].toLowerCase() !== s[j].toLowerCase()){
                return false
            }else{
                i++;
                j--;
            }
        }



        return true
    }
}
