class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // let left = 0;
        // let right = nums.length - 1
        // //find pivot point
        // while(left < right){
        //     const mid = Math.floor((left + right) / 2)
        //     if(nums[mid] > nums[right]){
        //         left = mid+1
        //     }else{
        //         right = mid
        //     }
        // }
        // const pivot = left
        // if(nums[pivot] === target){
        //     return pivot
        // }
        // if(target <= nums[nums.length-1]){
        //     // search the right section
        //     left = pivot + 1
        //     right = nums.length - 1
        // }else{
        //     left = 0
        //     right = pivot-1
        // }
        // while(left <= right){
        //     const mid = Math.floor((left + right) / 2)
        //     if(nums[mid] === target){
        //         return mid
        //     }
        //     else if(nums[mid] < target){
        //         left = mid + 1
        //     }else{
        //         right = mid
        //     }
        // }
        // return -1
            let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (target === nums[mid]) {
            return mid;
        }

        // Determine which half is sorted
        if (nums[l] <= nums[mid]) {
            // Left half is sorted
            if (target > nums[mid] || target < nums[l]) {
                l = mid + 1;  // Target is in right half
            } else {
                r = mid - 1;  // Target is in left half
            }
        } else {
            // Right half is sorted
            if (target < nums[mid] || target > nums[r]) {
                r = mid - 1;  // Target is in left half
            } else {
                l = mid + 1;  // Target is in right half
            }
        }
    }
    return -1;
        

    }
}
