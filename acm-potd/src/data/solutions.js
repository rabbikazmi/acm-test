export function getSolution(title) {
  const specificSolutions = {
    "Two Sum": `
# Two Sum

## Algorithm:
1. Create a hash map to store numbers and their indices.
2. Iterate through the array.
3. For each number, check if \`target - number\` exists in the map.
4. If it does, return the current index and the index from the map.

**Idea:**
Using a hash map allows us to look up the required complement in O(1) time.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.count(complement)) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};
\`\`\`
`,
    "Product of Array Except Self": `
# Product of Array Except Self

## Algorithm:
1. Initialize an array \`res\` with 1s.
2. Calculate prefix products and store them in \`res\`.
3. Calculate suffix products on the fly and multiply them with \`res\`.

**Idea:**
We can compute the product of all elements to the left and all elements to the right of each index without using division.

- Time: O(n)
- Space: O(1) (excluding output array)

---

## Code in Java:
\`\`\`java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] res = new int[n];
        res[0] = 1;
        for (int i = 1; i < n; i++) res[i] = res[i - 1] * nums[i - 1];
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            res[i] *= right;
            right *= nums[i];
        }
        return res;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> res(n, 1);
        for (int i = 1; i < n; i++) res[i] = res[i - 1] * nums[i - 1];
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            res[i] *= right;
            right *= nums[i];
        }
        return res;
    }
};
\`\`\`
`,
    "Trapping Rain Water": `
# Trapping Rain Water

## Algorithm:
1. Use two pointers, left and right.
2. Maintain \`left_max\` and \`right_max\`.
3. If \`left_max < right_max\`, water trapped depends on \`left_max\`. Add \`left_max - height[left]\` to total and move left pointer.
4. Else, depend on \`right_max\`, add \`right_max - height[right]\` and move right pointer.

**Idea:**
The amount of water trapped at any bar depends on the minimum of the maximum heights to its left and right.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public int trap(int[] height) {
        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0;
        int ans = 0;
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) leftMax = height[left];
                else ans += leftMax - height[left];
                left++;
            } else {
                if (height[right] >= rightMax) rightMax = height[right];
                else ans += rightMax - height[right];
                right--;
            }
        }
        return ans;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int trap(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int leftMax = 0, rightMax = 0;
        int ans = 0;
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) leftMax = height[left];
                else ans += leftMax - height[left];
                left++;
            } else {
                if (height[right] >= rightMax) rightMax = height[right];
                else ans += rightMax - height[right];
                right--;
            }
        }
        return ans;
    }
};
\`\`\`
`,
    "Remove Duplicates from Sorted Array": `
# Remove Duplicates from Sorted Array

## Algorithm:
1. Use two pointers: \`i\` (slow) and \`j\` (fast).
2. If \`nums[j] != nums[i]\`, increment \`i\` and update \`nums[i] = nums[j]\`.
3. Return \`i + 1\`.

**Idea:**
Since the array is sorted, duplicates will be adjacent. We can overwrite duplicates in-place.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int i = 0;
        for (int j = 1; j < nums.length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) return 0;
        int i = 0;
        for (int j = 1; j < nums.size(); j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }
};
\`\`\`
`,
    "Subarray Sum Equals K": `
# Subarray Sum Equals K

## Algorithm:
1. Use a hash map to store the cumulative sum frequencies.
2. Iterate through the array, adding to the cumulative sum.
3. If \`sum - k\` exists in the map, add its frequency to the count.
4. Add the current sum to the map.

**Idea:**
If the cumulative sum up to two indices \`i\` and \`j\` differs by \`k\`, the sum of elements between \`i\` and \`j\` is \`k\`.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int subarraySum(int[] nums, int k) {
        int count = 0, sum = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (map.containsKey(sum - k))
                count += map.get(sum - k);
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return count;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int count = 0, sum = 0;
        unordered_map<int, int> map;
        map[0] = 1;
        for (int i = 0; i < nums.size(); i++) {
            sum += nums[i];
            if (map.count(sum - k))
                count += map[sum - k];
            map[sum]++;
        }
        return count;
    }
}
\`\`\`
`,
    "First Missing Positive": `
# First Missing Positive

## Algorithm:
1. Iterate through the array and place each number \`x\` at index \`x - 1\` if \`1 <= x <= n\`.
2. Iterate again to find the first index \`i\` where \`nums[i] != i + 1\`.
3. Return \`i + 1\`. If all are correct, return \`n + 1\`.

**Idea:**
We can use the array itself as a hash map to achieve O(1) extra space.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public int firstMissingPositive(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
                int temp = nums[nums[i] - 1];
                nums[nums[i] - 1] = nums[i];
                nums[i] = temp;
            }
        }
        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) return i + 1;
        }
        return n + 1;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
                swap(nums[i], nums[nums[i] - 1]);
            }
        }
        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) return i + 1;
        }
        return n + 1;
    }
};
\`\`\`
`,
    "Best Time to Buy and Sell Stock": `
# Best Time to Buy and Sell Stock

## Algorithm:
1. Track the minimum price seen so far.
2. For each price, calculate the profit if we sell at that price.
3. Keep track of the maximum profit.

**Idea:**
We need to find the maximum difference between two elements where the smaller occurs before the larger.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int p : prices) {
            maxProfit = Math.max(maxProfit, p - minPrice);
            minPrice = Math.min(minPrice, p);
        }
        return maxProfit;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = INT_MAX;
        int maxProfit = 0;
        for (int p : prices) {
            maxProfit = max(maxProfit, p - minPrice);
            minPrice = min(minPrice, p);
        }
        return maxProfit;
    }
};
\`\`\`
`,
    "Sort Colors": `
# Sort Colors

## Algorithm:
1. Use three pointers: \`p0\` (for 0s), \`p2\` (for 2s), and \`i\` (current).
2. Iterate through the array, moving 0s to the left and 2s to the right.
3. 1s naturally end up in the middle.

**Idea:**
Dutch National Flag problem - partition array in-place without using extra space.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public void sortColors(int[] nums) {
        int p0 = 0, p2 = nums.length - 1;
        for (int i = 0; i <= p2; i++) {
            if (nums[i] == 0) {
                int temp = nums[p0];
                nums[p0] = nums[i];
                nums[i] = temp;
                p0++;
            } else if (nums[i] == 2) {
                int temp = nums[p2];
                nums[p2] = nums[i];
                nums[i] = temp;
                p2--;
                i--;
            }
        }
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int p0 = 0, p2 = nums.size() - 1;
        for (int i = 0; i <= p2; i++) {
            if (nums[i] == 0) {
                swap(nums[p0++], nums[i]);
            } else if (nums[i] == 2) {
                swap(nums[p2--], nums[i--]);
            }
        }
    }
};
\`\`\`
`,
    "Largest Rectangle in Histogram": `
# Largest Rectangle in Histogram

## Algorithm:
1. Use a stack to keep track of bar indices.
2. For each bar, if it's taller than the stack top, push it.
3. If it's shorter, pop bars and calculate their areas.
4. After the loop, pop all remaining bars and calculate areas.

**Idea:**
For each bar, the maximum rectangle extends left and right as far as the bar is taller than its neighbors.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        for (int i = 0; i < heights.length; i++) {
            while (!stack.isEmpty() && heights[stack.peek()] > heights[i]) {
                int idx = stack.pop();
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, heights[idx] * width);
            }
            stack.push(i);
        }
        while (!stack.isEmpty()) {
            int idx = stack.pop();
            int width = stack.isEmpty() ? heights.length : heights.length - stack.peek() - 1;
            maxArea = Math.max(maxArea, heights[idx] * width);
        }
        return maxArea;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st;
        int maxArea = 0;
        for (int i = 0; i < heights.size(); i++) {
            while (!st.empty() && heights[st.top()] > heights[i]) {
                int idx = st.top(); st.pop();
                int width = st.empty() ? i : i - st.top() - 1;
                maxArea = max(maxArea, heights[idx] * width);
            }
            st.push(i);
        }
        while (!st.empty()) {
            int idx = st.top(); st.pop();
            int width = st.empty() ? (int)heights.size() : (int)heights.size() - st.top() - 1;
            maxArea = max(maxArea, heights[idx] * width);
        }
        return maxArea;
    }
};
\`\`\`
`,
    "Missing Number": `
# Missing Number

## Algorithm:
1. Use the XOR approach: XOR all numbers from 0 to n with all numbers in the array.
2. Duplicates will cancel out, leaving only the missing number.

**Idea:**
XOR has the property that \`a ^ a = 0\` and \`a ^ 0 = a\`.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public int missingNumber(int[] nums) {
        int xor = 0;
        for (int i = 0; i < nums.length; i++) {
            xor ^= i ^ nums[i];
        }
        return xor ^ nums.length;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int xor_val = 0;
        for (int i = 0; i < nums.size(); i++) {
            xor_val ^= i ^ nums[i];
        }
        return xor_val ^ (int)nums.size();
    }
};
\`\`\`
`,
    "Two Sum II - Input Array Is Sorted": `
# Two Sum II - Input Array Is Sorted

## Algorithm:
1. Use two pointers: left at start, right at end.
2. Calculate sum of elements at both pointers.
3. If sum equals target, return indices (1-indexed).
4. If sum is less than target, move left pointer right.
5. If sum is greater than target, move right pointer left.

**Idea:**
Since array is sorted, two pointers approach works efficiently.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target)
                return new int[] { left + 1, right + 1 };
            if (sum < target)
                left++;
            else
                right--;
        }
        return new int[] {};
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int left = 0, right = numbers.size() - 1;
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target)
                return {left + 1, right + 1};
            if (sum < target)
                left++;
            else
                right--;
        }
        return {};
    }
};
\`\`\`
`,
    "Count of Smaller Numbers After Self": `
# Count of Smaller Numbers After Self

## Algorithm:
1. Use merge sort with modification to count inversions.
2. During merge, count elements from right subarray that are smaller than left elements.
3. Return both the sorted array and counts.

**Idea:**
A modified merge sort that counts inversions (smaller elements after each position).

- Time: O(n log n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public List<Integer> countSmaller(int[] nums) {
        List<Integer> res = new ArrayList<>();
        List<Integer> sorted = new ArrayList<>();
        for (int i = nums.length - 1; i >= 0; i--) {
            int idx = binarySearch(sorted, nums[i]);
            res.add(idx);
            sorted.add(idx, nums[i]);
        }
        Collections.reverse(res);
        return res;
    }
    
    private int binarySearch(List<Integer> sorted, int target) {
        int left = 0, right = sorted.size();
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (sorted.get(mid) < target)
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    vector<int> countSmaller(vector<int>& nums) {
        vector<int> res;
        vector<int> sorted_arr;
        for (int i = nums.size() - 1; i >= 0; i--) {
            auto it = lower_bound(sorted_arr.begin(), sorted_arr.end(), nums[i]);
            res.push_back(it - sorted_arr.begin());
            sorted_arr.insert(it, nums[i]);
        }
        reverse(res.begin(), res.end());
        return res;
    }
};
\`\`\`
`,
    "Count of Smaller Numbers After Self": `
# Count of Smaller Numbers After Self

## Algorithm:
1. Use merge sort with modification to count inversions.
2. During merge, count elements from right subarray that are smaller than left elements.
3. Return both the sorted array and counts.

**Idea:**
A modified merge sort that counts inversions (smaller elements after each position).

- Time: O(n log n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public List<Integer> countSmaller(int[] nums) {
        List<Integer> res = new ArrayList<>();
        List<Integer> sorted = new ArrayList<>();
        for (int i = nums.length - 1; i >= 0; i--) {
            int idx = binarySearch(sorted, nums[i]);
            res.add(idx);
            sorted.add(idx, nums[i]);
        }
        Collections.reverse(res);
        return res;
    }
    
    private int binarySearch(List<Integer> sorted, int target) {
        int left = 0, right = sorted.size();
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (sorted.get(mid) < target)
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    vector<int> countSmaller(vector<int>& nums) {
        vector<int> res;
        vector<int> sorted_arr;
        for (int i = nums.size() - 1; i >= 0; i--) {
            auto it = lower_bound(sorted_arr.begin(), sorted_arr.end(), nums[i]);
            res.push_back(it - sorted_arr.begin());
            sorted_arr.insert(it, nums[i]);
        }
        reverse(res.begin(), res.end());
        return res;
    }
};
\`\`\`
`,
    // Day 5 (Complete)
    "Move Zeroes": `
# Move Zeroes

## Algorithm:
1. Use two pointers: one to track the position to place non-zero elements (insertPos).
2. Iterate through the array.
3. When a non-zero element is found, swap it with the element at insertPos.
4. Increment insertPos after each non-zero element.

**Idea:**
By moving all non-zero elements forward while maintaining their relative order, we effectively move all zeros to the end without using extra space.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public void moveZeroes(int[] nums) {
        int insertPos = 0;
        for (int num : nums) {
            if (num != 0) {
                nums[insertPos] = num;
                insertPos++;
            }
        }
        while (insertPos < nums.length) {
            nums[insertPos] = 0;
            insertPos++;
        }
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int insertPos = 0;
        for (int num : nums) {
            if (num != 0) {
                nums[insertPos++] = num;
            }
        }
        while (insertPos < nums.size()) {
            nums[insertPos++] = 0;
        }
    }
};
\`\`\`
`,
    "3Sum": `
# 3Sum

## Algorithm:
1. Sort the array.
2. For each element as the first number, find two more numbers that sum to -num.
3. Use two pointers (left and right) to find the pair.
4. If sum equals target, add the triplet to result and skip duplicates.
5. If sum is less, move left pointer right. If greater, move right pointer left.

**Idea:**
Sorting helps us use the two-pointer technique efficiently. We fix one element and find pairs that complete the sum to zero.

- Time: O(n²)
- Space: O(1) (excluding output)

---

## Code in Java:
\`\`\`java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++; right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<vector<int>> result;
        for (int i = 0; i < nums.size() - 2; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int left = i + 1, right = nums.size() - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.push_back({nums[i], nums[left], nums[right]});
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++; right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }
};
\`\`\`
`,
    "Sliding Window Maximum": `
# Sliding Window Maximum

## Algorithm:
1. Use a deque to store indices of useful elements.
2. For each element:
   - Remove indices outside the current window from the front.
   - Remove indices of smaller elements from the back (they can't be maximum).
   - Add the current index to the back.
   - The front element is the maximum of the current window.

**Idea:**
A deque maintains elements in decreasing order, allowing O(1) access to the maximum in each window.

- Time: O(n)
- Space: O(k) where k is the window size

---

## Code in Java:
\`\`\`java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        Deque<Integer> dq = new LinkedList<>();
        int[] result = new int[nums.length - k + 1];
        for (int i = 0; i < nums.length; i++) {
            if (!dq.isEmpty() && dq.peekFirst() < i - k + 1) {
                dq.pollFirst();
            }
            while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) {
                dq.pollLast();
            }
            dq.offerLast(i);
            if (i >= k - 1) {
                result[i - k + 1] = nums[dq.peekFirst()];
            }
        }
        return result;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        deque<int> dq;
        vector<int> result;
        for (int i = 0; i < nums.size(); i++) {
            if (!dq.empty() && dq.front() < i - k + 1) {
                dq.pop_front();
            }
            while (!dq.empty() && nums[dq.back()] < nums[i]) {
                dq.pop_back();
            }
            dq.push_back(i);
            if (i >= k - 1) {
                result.push_back(nums[dq.front()]);
            }
        }
        return result;
    }
};
\`\`\`
`,
    // Day 6 (Complete)
    "Check if N and Its Double Exist": `
# Check if N and Its Double Exist

## Algorithm:
1. Use a HashSet to store all numbers.
2. For each number in the array:
   - Check if \`2 * number\` exists in the set.
   - Check if \`number / 2\` exists (only if number is even).
3. If either condition is true, return true.
4. Add the current number to the set.

**Idea:**
A hash set provides O(1) lookups for checking if a number or its double exists.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public boolean checkIfExist(int[] arr) {
        Set<Integer> set = new HashSet<>();
        for (int num : arr) {
            if (set.contains(2 * num) || (num % 2 == 0 && set.contains(num / 2))) {
                return true;
            }
            set.add(num);
        }
        return false;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    bool checkIfExist(vector<int>& arr) {
        unordered_set<int> st;
        for (int num : arr) {
            if (st.count(2 * num) || (num % 2 == 0 && st.count(num / 2))) {
                return true;
            }
            st.insert(num);
        }
        return false;
    }
};
\`\`\`
`,
    "Continuous Subarray Sum": `
# Continuous Subarray Sum

## Algorithm:
1. Maintain a map of cumulative sum modulo k to index.
2. Initialize with {0: -1} to handle subarrays starting from index 0.
3. For each element:
   - Calculate cumulative sum and its modulo k.
   - If this modulo was seen before at index >= current - 1, we found a subarray.
   - Otherwise, store the modulo with current index.

**Idea:**
If two indices have the same cumulative sum modulo k and are at least 2 positions apart, the subarray between them has a sum divisible by k.

- Time: O(n)
- Space: O(min(n, k))

---

## Code in Java:
\`\`\`java
class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);
        int cumSum = 0;
        for (int i = 0; i < nums.length; i++) {
            cumSum += nums[i];
            int mod = k == 0 ? cumSum : cumSum % k;
            if (map.containsKey(mod)) {
                if (i - map.get(mod) >= 2) {
                    return true;
                }
            } else {
                map.put(mod, i);
            }
        }
        return false;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> map;
        map[0] = -1;
        int cumSum = 0;
        for (int i = 0; i < nums.size(); i++) {
            cumSum += nums[i];
            int mod = k == 0 ? cumSum : cumSum % k;
            if (map.count(mod)) {
                if (i - map[mod] >= 2) {
                    return true;
                }
            } else {
                map[mod] = i;
            }
        }
        return false;
    }
};
\`\`\`
`,
    "Candy": `
# Candy

## Algorithm:
1. Create a candies array initialized with 1s.
2. First pass (left to right): If a child has higher rating than left neighbor, increment candy.
3. Second pass (right to left): If a child has higher rating than right neighbor and current candies aren't greater, set to right+1.
4. Return the sum of candies.

**Idea:**
Two passes ensure each child with higher rating than both neighbors gets more candy than both neighbors.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int candy(int[] ratings) {
        int n = ratings.length;
        int[] candies = new int[n];
        Arrays.fill(candies, 1);
        
        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }
        
        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candies[i] = Math.max(candies[i], candies[i + 1] + 1);
            }
        }
        
        int sum = 0;
        for (int c : candies) sum += c;
        return sum;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int candy(vector<int>& ratings) {
        int n = ratings.size();
        vector<int> candies(n, 1);
        
        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }
        
        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candies[i] = max(candies[i], candies[i + 1] + 1);
            }
        }
        
        int sum = 0;
        for (int c : candies) sum += c;
        return sum;
    }
};
\`\`\`
`,
    // Day 7 (Complete)
    "Rotate Array": `
# Rotate Array

## Algorithm:
1. Reverse the entire array.
2. Reverse the first k elements.
3. Reverse the remaining n-k elements.

**Idea:**
This rotation technique uses the property that reversing segments effectively rotates the array without extra space.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    private void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
private:
    void reverse(vector<int>& nums, int start, int end) {
        while (start < end) {
            swap(nums[start], nums[end]);
            start++;
            end--;
        }
    }
public:
    void rotate(vector<int>& nums, int k) {
        k %= nums.size();
        reverse(nums, 0, nums.size() - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.size() - 1);
    }
};
\`\`\`
`,
    "Increasing Triplet Subsequence": `
# Increasing Triplet Subsequence

## Algorithm:
1. Maintain two variables: first (smallest element so far) and second (second smallest element where there exists an element before it smaller than it).
2. For each element:
   - If it's smaller than first, update first.
   - If it's between first and second, update second.
   - If it's greater than second, return true.
3. If loop completes, return false.

**Idea:**
We only need to track two minimum values instead of storing all elements.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public boolean increasingTriplet(int[] nums) {
        int first = Integer.MAX_VALUE, second = Integer.MAX_VALUE;
        for (int num : nums) {
            if (num <= first) {
                first = num;
            } else if (num <= second) {
                second = num;
            } else {
                return true;
            }
        }
        return false;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int first = INT_MAX, second = INT_MAX;
        for (int num : nums) {
            if (num <= first) {
                first = num;
            } else if (num <= second) {
                second = num;
            } else {
                return true;
            }
        }
        return false;
    }
};
\`\`\`
`,
    "Maximum Score of a Good Subarray": `
# Maximum Score of a Good Subarray

## Algorithm:
1. Use two pointers starting from x - 1 and y + 1 (boundaries where subarray has at least k sum).
2. Also start from one pointer inside the range if needed.
3. Use two pointers to explore: move inward until subarray sum is at least k.
4. Track maximum score = (right - left) * min(height[left], height[right]).

**Idea:**
Two pointers combined with tracking minimum height gives us the maximum score efficiently.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public int maximumScore(int[] nums, int k) {
        int left = k, right = k;
        int minVal = nums[k];
        int maxScore = nums[k];
        
        while (left > 0 || right < nums.length - 1) {
            if (left > 0 && (right == nums.length - 1 || nums[left - 1] > nums[right + 1])) {
                left--;
            } else {
                right++;
            }
            minVal = Math.min(minVal, Math.min(nums[left], nums[right]));
            maxScore = Math.max(maxScore, minVal * (right - left + 1));
        }
        return maxScore;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int maximumScore(vector<int>& nums, int k) {
        int left = k, right = k;
        int minVal = nums[k];
        int maxScore = nums[k];
        
        while (left > 0 || right < nums.size() - 1) {
            if (left > 0 && (right == nums.size() - 1 || nums[left - 1] > nums[right + 1])) {
                left--;
            } else {
                right++;
            }
            minVal = min(minVal, min(nums[left], nums[right]));
            maxScore = max(maxScore, minVal * (right - left + 1));
        }
        return maxScore;
    }
};
\`\`\`
`,
    // Day 8 (Complete)
    "Reverse Linked List": `
# Reverse Linked List

## Algorithm:
1. Initialize three pointers: prev = null, curr = head, next = null.
2. Iterate through the list:
   - Save next node before reversing the link.
   - Reverse the current node's pointer to point to prev.
   - Move prev and curr one step forward.
3. Return prev as the new head.

**Idea:**
We traverse the list once, reversing pointers as we go without using extra space.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr, *curr = head;
        while (curr) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
};
\`\`\`
`,
    "Remove Nth Node From End of List": `
# Remove Nth Node From End of List

## Algorithm:
1. Use a dummy node pointing to head to handle edge case of removing the head.
2. Use two pointers (fast and slow) with fast pointer n+1 steps ahead.
3. Move both pointers until fast reaches the end.
4. Remove the target node by updating the prev node's next pointer.

**Idea:**
The two-pointer technique with a gap of n+1 allows us to identify the node before the target node.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode first = dummy, second = dummy;
        
        for (int i = 0; i <= n; i++) {
            first = first.next;
        }
        
        while (first != null) {
            first = first.next;
            second = second.next;
        }
        
        second.next = second.next.next;
        return dummy.next;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* first = dummy, *second = dummy;
        
        for (int i = 0; i <= n; i++) {
            first = first->next;
        }
        
        while (first) {
            first = first->next;
            second = second->next;
        }
        
        second->next = second->next->next;
        return dummy->next;
    }
};
\`\`\`
`,
    "Reverse Nodes in k-Group": `
# Reverse Nodes in k-Group

## Algorithm:
1. Create a dummy node and traverse the list.
2. For each group of k nodes:
   - Reverse the k nodes.
   - Connect the previous group's tail to the reversed group's head.
   - Continue with the next group.
3. Handle the remaining group (less than k nodes) by not reversing.

**Idea:**
Recursive approach considers each group independently while connecting them properly.

- Time: O(n)
- Space: O(n/k) for recursive call stack

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode curr = head;
        for (int i = 0; i < k; i++) {
            if (curr == null) return head;
            curr = curr.next;
        }
        
        ListNode prev = null;
        curr = head;
        for (int i = 0; i < k; i++) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        head.next = reverseKGroup(curr, k);
        return prev;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* curr = head;
        for (int i = 0; i < k; i++) {
            if (!curr) return head;
            curr = curr->next;
        }
        
        ListNode* prev = nullptr;
        curr = head;
        for (int i = 0; i < k; i++) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        
        head->next = reverseKGroup(curr, k);
        return prev;
    }
};
\`\`\`
`,
    // Day 9 (Complete)
    "Linked List Cycle": `
# Linked List Cycle

## Algorithm:
1. Use Floyd's cycle detection algorithm with slow and fast pointers.
2. Slow pointer moves one step, fast pointer moves two steps.
3. If they meet, there's a cycle. If fast reaches null, no cycle.

**Idea:**
In a cyclic list, fast pointer will eventually catch up to slow pointer as they both enter the cycle.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null) return false;
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if (!head) return false;
        ListNode *slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) return true;
        }
        return false;
    }
};
\`\`\`
`,
    "Linked List Cycle II": `
# Linked List Cycle II

## Algorithm:
1. Use Floyd's algorithm to detect cycle existence.
2. If cycle exists, reset one pointer to head while keeping other at meeting point.
3. Move both pointers one step at a time. They meet at cycle start.

**Idea:**
When slow and fast meet at distance d from cycle start, the distance from head to cycle start equals the distance from meeting point to cycle start.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode detectCycle(ListNode head) {
        if (head == null) return null;
        ListNode slow = head, fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) break;
        }
        
        if (fast == null || fast.next == null) return null;
        
        slow = head;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if (!head) return nullptr;
        ListNode *slow = head, *fast = head;
        
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) break;
        }
        
        if (!fast || !fast->next) return nullptr;
        
        slow = head;
        while (slow != fast) {
            slow = slow->next;
            fast = fast->next;
        }
        return slow;
    }
};
\`\`\`
`,
    "LRU Cache": `
# LRU Cache

## Algorithm:
1. Use HashMap for O(1) key lookups.
2. Use Doubly Linked List to maintain order of access (LRU to MRU).
3. On get: Move node to end if found.
4. On put: If key exists, update and move to end. If new key and capacity exceeded, remove LRU (head's next).

**Idea:**
HashMap provides O(1) access, and doubly linked list maintains access order for efficient eviction.

- Time: O(1) for both get and put
- Space: O(capacity)

---

## Code in Java:
\`\`\`java
class LRUCache {
    private class Node {
        int key, value;
        Node prev, next;
        Node(int key, int value) { this.key = key; this.value = value; }
    }
    
    private int capacity;
    private HashMap<Integer, Node> map = new HashMap<>();
    private Node head = new Node(0, 0), tail = new Node(0, 0);
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node node = map.get(key);
        remove(node);
        add(node);
        return node.value;
    }
    
    public void put(int key, int value) {
        if (map.containsKey(key)) remove(map.get(key));
        if (map.size() == capacity) remove(head.next);
        Node node = new Node(key, value);
        map.put(key, node);
        add(node);
    }
    
    private void add(Node node) {
        tail.prev.next = node;
        node.prev = tail.prev;
        node.next = tail;
        tail.prev = node;
    }
    
    private void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        map.remove(node.key);
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class LRUCache {
private:
    struct Node {
        int key, value;
        Node* prev, *next;
        Node(int k, int v) : key(k), value(v), prev(nullptr), next(nullptr) {}
    };
    
    int capacity;
    unordered_map<int, Node*> map;
    Node* head, *tail;
    
    void add(Node* node) {
        tail->prev->next = node;
        node->prev = tail->prev;
        node->next = tail;
        tail->prev = node;
    }
    
    void remove(Node* node) {
        node->prev->next = node->next;
        node->next->prev = node->prev;
        map.erase(node->key);
        delete node;
    }
    
public:
    LRUCache(int capacity) : capacity(capacity) {
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head->next = tail;
        tail->prev = head;
    }
    
    int get(int key) {
        if (map.find(key) == map.end()) return -1;
        Node* node = map[key];
        remove(node);
        add(node);
        map[key] = node;
        return node->value;
    }
    
    void put(int key, int value) {
        if (map.find(key) != map.end()) remove(map[key]);
        if (map.size() == capacity) remove(head->next);
        Node* node = new Node(key, value);
        map[key] = node;
        add(node);
    }
};
\`\`\`
`,
    // Day 10 (Complete)
    "Middle of the Linked List": `
# Middle of the Linked List

## Algorithm:
1. Use slow and fast pointers starting from head.
2. Slow moves one step, fast moves two steps.
3. When fast reaches end, slow is at middle.

**Idea:**
Two pointers with different speeds allows us to find the middle in a single pass.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode* slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }
};
\`\`\`
`,
    "Add Two Numbers": `
# Add Two Numbers

## Algorithm:
1. Create a new linked list to store the result.
2. Traverse both lists simultaneously with a carry.
3. For each pair of nodes:
   - Sum their values plus carry.
   - Create new node with (sum % 10).
   - Update carry as sum / 10.
4. Handle remaining nodes and final carry.

**Idea:**
Similar to adding numbers digit by digit on paper, we process nodes from least to most significant.

- Time: O(max(m, n))
- Space: O(max(m, n))

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        int carry = 0;
        
        while (l1 != null || l2 != null || carry != 0) {
            int sum = carry;
            if (l1 != null) {
                sum += l1.val;
                l1 = l1.next;
            }
            if (l2 != null) {
                sum += l2.val;
                l2 = l2.next;
            }
            current.next = new ListNode(sum % 10);
            current = current.next;
            carry = sum / 10;
        }
        return dummy.next;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummy = new ListNode(0);
        ListNode* current = dummy;
        int carry = 0;
        
        while (l1 || l2 || carry) {
            int sum = carry;
            if (l1) {
                sum += l1->val;
                l1 = l1->next;
            }
            if (l2) {
                sum += l2->val;
                l2 = l2->next;
            }
            current->next = new ListNode(sum % 10);
            current = current->next;
            carry = sum / 10;
        }
        return dummy->next;
    }
};
\`\`\`
`,
    "Merge K Sorted Lists": `
# Merge K Sorted Lists

## Algorithm:
1. Use a min-heap (priority queue) to always get the smallest element.
2. Insert the head of each list into the heap.
3. Extract minimum, add to result list, and push the next node if it exists.
4. Continue until heap is empty.

**Idea:**
A heap efficiently maintains k smallest elements allowing us to merge k lists in O(n log k).

- Time: O(n log k) where n is total elements
- Space: O(k)

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> heap = new PriorityQueue<>((a, b) -> a.val - b.val);
        for (ListNode list : lists) {
            if (list != null) heap.add(list);
        }
        
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        
        while (!heap.isEmpty()) {
            ListNode node = heap.poll();
            current.next = node;
            current = current.next;
            if (node.next != null) heap.add(node.next);
        }
        return dummy.next;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        auto comp = [](ListNode* a, ListNode* b) { return a->val > b->val; };
        priority_queue<ListNode*, vector<ListNode*>, decltype(comp)> heap(comp);
        
        for (ListNode* list : lists) {
            if (list) heap.push(list);
        }
        
        ListNode* dummy = new ListNode(0);
        ListNode* current = dummy;
        
        while (!heap.empty()) {
            ListNode* node = heap.top();
            heap.pop();
            current->next = node;
            current = current->next;
            if (node->next) heap.push(node->next);
        }
        return dummy->next;
    }
};
\`\`\`
`,
    // Day 11 (Complete)
    "Merge Two Sorted Lists": `
# Merge Two Sorted Lists

## Algorithm:
1. Create a dummy node.
2. Compare heads of both lists.
3. Attach the smaller node to result list.
4. Move pointer in the list whose node was attached.
5. After one list exhausts, attach remaining nodes from other list.

**Idea:**
Two pointers allow us to merge two sorted lists without extra space (except for result).

- Time: O(m + n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        
        current.next = (list1 != null) ? list1 : list2;
        return dummy.next;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* dummy = new ListNode(0);
        ListNode* current = dummy;
        
        while (list1 && list2) {
            if (list1->val <= list2->val) {
                current->next = list1;
                list1 = list1->next;
            } else {
                current->next = list2;
                list2 = list2->next;
            }
            current = current->next;
        }
        
        current->next = list1 ? list1 : list2;
        return dummy->next;
    }
};
\`\`\`
`,
    "Sort List": `
# Sort List

## Algorithm:
1. Find the middle of the list using slow-fast pointers.
2. Split the list into two halves.
3. Recursively sort both halves.
4. Merge the sorted halves.

**Idea:**
Merge sort on linked lists leverages the middle-finding technique and doesn't require random access.

- Time: O(n log n)
- Space: O(log n) for recursion

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null) return head;
        
        ListNode mid = getMid(head);
        ListNode left = sortList(head);
        ListNode right = sortList(mid);
        
        return merge(left, right);
    }
    
    private ListNode getMid(ListNode head) {
        ListNode slow = head, fast = head, prev = null;
        while (fast != null && fast.next != null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if (prev != null) prev.next = null;
        return slow;
    }
    
    private ListNode merge(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0), current = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        current.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
private:
    ListNode* getMid(ListNode* head) {
        ListNode* slow = head, *fast = head, *prev = nullptr;
        while (fast && fast->next) {
            prev = slow;
            slow = slow->next;
            fast = fast->next->next;
        }
        if (prev) prev->next = nullptr;
        return slow;
    }
    
    ListNode* merge(ListNode* l1, ListNode* l2) {
        ListNode* dummy = new ListNode(0), *current = dummy;
        while (l1 && l2) {
            if (l1->val <= l2->val) {
                current->next = l1;
                l1 = l1->next;
            } else {
                current->next = l2;
                l2 = l2->next;
            }
            current = current->next;
        }
        current->next = l1 ? l1 : l2;
        return dummy->next;
    }
    
public:
    ListNode* sortList(ListNode* head) {
        if (!head || !head->next) return head;
        ListNode* mid = getMid(head);
        ListNode* left = sortList(head);
        ListNode* right = sortList(mid);
        return merge(left, right);
    }
};
\`\`\`
`,
    "All O'one Data Structure": `
# All O'one Data Structure

## Algorithm:
1. Use a HashMap to store key-to-count mapping.
2. Use a doubly linked list to maintain buckets of keys with same frequency.
3. On inc(key): Move key to next frequency bucket.
4. On dec(key): Move key to previous frequency bucket or remove if count becomes 0.
5. Use HashMap of frequency-to-bucket for O(1) access.

**Idea:**
Combining hash map with doubly linked list buckets allows O(1) operations for all methods.

- Time: O(1) for all operations
- Space: O(n)

---

## Code in Java:
\`\`\`java
class AllOne {
    class Bucket {
        int freq;
        Set<String> keys = new HashSet<>();
        Bucket prev, next;
        Bucket(int freq) { this.freq = freq; }
    }
    
    Map<String, Integer> keyFreq = new HashMap<>();
    Map<Integer, Bucket> freqBucket = new HashMap<>();
    Bucket head = new Bucket(0), tail = new Bucket(0);
    
    public AllOne() {
        head.next = tail;
        tail.prev = head;
    }
    
    public void inc(String key) {
        int freq = keyFreq.getOrDefault(key, 0);
        keyFreq.put(key, freq + 1);
        Bucket curBucket = freqBucket.getOrDefault(freq, head);
        curBucket.keys.remove(key);
        
        Bucket nextBucket = freqBucket.getOrDefault(freq + 1, null);
        if (nextBucket == null) {
            nextBucket = new Bucket(freq + 1);
            freqBucket.put(freq + 1, nextBucket);
            curBucket.next.prev = nextBucket;
            nextBucket.next = curBucket.next;
            curBucket.next = nextBucket;
            nextBucket.prev = curBucket;
        }
        nextBucket.keys.add(key);
    }
    
    public void dec(String key) {
        int freq = keyFreq.get(key);
        Bucket curBucket = freqBucket.get(freq);
        curBucket.keys.remove(key);
        if (freq == 1) {
            keyFreq.remove(key);
        } else {
            keyFreq.put(key, freq - 1);
            Bucket prevBucket = curBucket.prev;
            prevBucket.keys.add(key);
        }
    }
    
    public String getMaxKey() {
        return tail.prev.keys.isEmpty() ? "" : tail.prev.keys.iterator().next();
    }
    
    public String getMinKey() {
        return head.next.keys.isEmpty() ? "" : head.next.keys.iterator().next();
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class AllOne {
private:
    struct Bucket {
        int freq;
        set<string> keys;
        Bucket* prev;
        Bucket* next;
        Bucket(int f) : freq(f), prev(nullptr), next(nullptr) {}
    };
    
    unordered_map<string, int> keyFreq;
    unordered_map<int, Bucket*> freqBucket;
    Bucket* head, *tail;
    
public:
    AllOne() {
        head = new Bucket(0);
        tail = new Bucket(0);
        head->next = tail;
        tail->prev = head;
    }
    
    void inc(string key) {
        int freq = keyFreq[key]++;
        Bucket* curBucket = freqBucket.count(freq) ? freqBucket[freq] : head;
        curBucket->keys.erase(key);
        
        if (!freqBucket.count(freq + 1)) {
            auto newBucket = new Bucket(freq + 1);
            freqBucket[freq + 1] = newBucket;
            newBucket->prev = curBucket;
            newBucket->next = curBucket->next;
            curBucket->next->prev = newBucket;
            curBucket->next = newBucket;
        }
        freqBucket[freq + 1]->keys.insert(key);
    }
    
    void dec(string key) {
        int freq = keyFreq[key];
        Bucket* curBucket = freqBucket[freq];
        curBucket->keys.erase(key);
        
        if (freq == 1) {
            keyFreq.erase(key);
        } else {
            keyFreq[key]--;
            curBucket->prev->keys.insert(key);
        }
    }
    
    string getMaxKey() {
        return tail->prev->keys.empty() ? "" : *tail->prev->keys.rbegin();
    }
    
    string getMinKey() {
        return head->next->keys.empty() ? "" : *head->next->keys.begin();
    }
};
\`\`\`
`,
    // Day 12 (Complete)
    "Remove Duplicates from Sorted List": `
# Remove Duplicates from Sorted List

## Algorithm:
1. Traverse the linked list.
2. Compare current node with next node.
3. If values are equal, skip the next node by updating pointers.
4. If different, move to next node.

**Idea:**
Since list is sorted, duplicates are adjacent and can be removed by adjusting pointers.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return null;
        ListNode current = head;
        while (current.next != null) {
            if (current.val == current.next.val) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        return head;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if (!head) return nullptr;
        ListNode* current = head;
        while (current && current->next) {
            if (current->val == current->next->val) {
                current->next = current->next->next;
            } else {
                current = current->next;
            }
        }
        return head;
    }
};
\`\`\`
`,
    "Rotate List": `
# Rotate List

## Algorithm:
1. Find the length of the list by traversing to the end.
2. Normalize k to keep it within list length.
3. Connect the last node to the head to form a cycle.
4. Find the new tail at position (length - k - 1) from head.
5. Break the cycle at the new tail.

**Idea:**
By forming a cycle and breaking it at the right position, we effectively rotate the list.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || k == 0) return head;
        
        ListNode curr = head;
        int length = 1;
        while (curr.next != null) {
            curr = curr.next;
            length++;
        }
        
        k %= length;
        if (k == 0) return head;
        
        curr.next = head;
        ListNode newTail = head;
        for (int i = 0; i < length - k - 1; i++) {
            newTail = newTail.next;
        }
        
        ListNode newHead = newTail.next;
        newTail.next = null;
        return newHead;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if (!head || k == 0) return head;
        
        ListNode* curr = head;
        int length = 1;
        while (curr->next) {
            curr = curr->next;
            length++;
        }
        
        k %= length;
        if (k == 0) return head;
        
        curr->next = head;
        ListNode* newTail = head;
        for (int i = 0; i < length - k - 1; i++) {
            newTail = newTail->next;
        }
        
        ListNode* newHead = newTail->next;
        newTail->next = nullptr;
        return newHead;
    }
};
\`\`\`
`,
    "Copy List with Random Pointer": `
# Copy List with Random Pointer

## Algorithm (HashMap Approach):
1. First pass: Create all new nodes and store mapping from original to copy in HashMap.
2. Second pass: Set next and random pointers for copied nodes using the mapping.

**Idea:**
HashMap helps us efficiently map original nodes to copied nodes and handle random pointers.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public Node copyRandomList(Node head) {
        if (head == null) return null;
        Map<Node, Node> map = new HashMap<>();
        
        Node curr = head;
        while (curr != null) {
            map.put(curr, new Node(curr.val));
            curr = curr.next;
        }
        
        curr = head;
        while (curr != null) {
            map.get(curr).next = map.get(curr.next);
            map.get(curr).random = map.get(curr.random);
            curr = curr.next;
        }
        
        return map.get(head);
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    Node* copyRandomList(Node* head) {
        if (!head) return nullptr;
        unordered_map<Node*, Node*> map;
        
        Node* curr = head;
        while (curr) {
            map[curr] = new Node(curr->val);
            curr = curr->next;
        }
        
        curr = head;
        while (curr) {
            map[curr]->next = map[curr->next];
            map[curr]->random = map[curr->random];
            curr = curr->next;
        }
        
        return map[head];
    }
};
\`\`\`
`,
    // Day 13 (Complete)
    "Intersection of Two Linked Lists": `
# Intersection of Two Linked Lists

## Algorithm:
1. Use two pointers starting at heads of both lists.
2. Move both pointers forward simultaneously.
3. When a pointer reaches end, restart from the other list's head.
4. They meet at intersection or both reach null.

**Idea:**
If lists intersect, both pointers will traverse the same distance (length1 + length2) and meet at the intersection point.

- Time: O(m + n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;
        ListNode pA = headA, pB = headB;
        
        while (pA != pB) {
            pA = pA == null ? headB : pA.next;
            pB = pB == null ? headA : pB.next;
        }
        return pA;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        if (!headA || !headB) return nullptr;
        ListNode *pA = headA, *pB = headB;
        
        while (pA != pB) {
            pA = !pA ? headB : pA->next;
            pB = !pB ? headA : pB->next;
        }
        return pA;
    }
};
\`\`\`
`,
    "Remove Duplicates from Sorted List II": `
# Remove Duplicates from Sorted List II

## Algorithm:
1. Use a dummy node to handle edge cases.
2. Maintain prev pointer to track where to connect.
3. For each position, check if current and next values are equal.
4. If duplicates exist, skip all occurrences of that value.
5. Otherwise, keep the node.

**Idea:**
We need to remove all nodes with duplicate values, not just extras, requiring careful tracking.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;
        
        while (prev.next != null && prev.next.next != null) {
            if (prev.next.val == prev.next.next.val) {
                int duplicate = prev.next.val;
                while (prev.next != null && prev.next.val == duplicate) {
                    prev.next = prev.next.next;
                }
            } else {
                prev = prev.next;
            }
        }
        return dummy.next;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* prev = dummy;
        
        while (prev->next && prev->next->next) {
            if (prev->next->val == prev->next->next->val) {
                int duplicate = prev->next->val;
                while (prev->next && prev->next->val == duplicate) {
                    prev->next = prev->next->next;
                }
            } else {
                prev = prev->next;
            }
        }
        return dummy->next;
    }
};
\`\`\`
`,
    "Search in Rotated Sorted Array": `
# Search in Rotated Sorted Array

## Algorithm:
1. Use binary search with modified logic for rotated array.
2. Start with left and right pointers.
3. Determine which half is sorted (not rotated).
4. Check if target is in the sorted half.
5. Adjust search range accordingly (left or right half).

**Idea:**
One half of a rotated array is always sorted, allowing us to use binary search efficiently.

- Time: O(log n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
};
\`\`\`
`,
    // Day 14 (Complete)
    "Palindrome Linked List": `
# Palindrome Linked List

## Algorithm:
1. Find the middle of the list using slow-fast pointers.
2. Reverse the second half of the list.
3. Compare the first half with the reversed second half.
4. (Optional) Restore the list by reversing the second half again.

**Idea:**
By reversing only the second half and comparing, we check for palindrome without extra space for a full copy.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public boolean isPalindrome(ListNode head) {
        if (head == null || head.next == null) return true;
        
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        ListNode prev = null;
        while (slow != null) {
            ListNode next = slow.next;
            slow.next = prev;
            prev = slow;
            slow = next;
        }
        
        ListNode left = head, right = prev;
        while (right != null) {
            if (left.val != right.val) return false;
            left = left.next;
            right = right.next;
        }
        return true;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        if (!head || !head->next) return true;
        
        ListNode* slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        ListNode* prev = nullptr;
        while (slow) {
            ListNode* next = slow->next;
            slow->next = prev;
            prev = slow;
            slow = next;
        }
        
        ListNode* left = head, *right = prev;
        while (right) {
            if (left->val != right->val) return false;
            left = left->next;
            right = right->next;
        }
        return true;
    }
};
\`\`\`
`,
    "Swap Nodes in Pairs": `
# Swap Nodes in Pairs

## Algorithm:
1. Create a dummy node pointing to head.
2. Maintain a pointer for the previous node.
3. For each pair:
   - Swap pointers to exchange the pair.
   - Move prev to point to the next pair.
4. Continue until fewer than 2 nodes remain.

**Idea:**
By using a dummy and carefully tracking pointers, we can swap adjacent nodes in-place.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;
        
        while (prev.next != null && prev.next.next != null) {
            ListNode first = prev.next;
            ListNode second = prev.next.next;
            
            first.next = second.next;
            second.next = first;
            prev.next = second;
            prev = first;
        }
        return dummy.next;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* prev = dummy;
        
        while (prev->next && prev->next->next) {
            ListNode* first = prev->next;
            ListNode* second = prev->next->next;
            
            first->next = second->next;
            second->next = first;
            prev->next = second;
            prev = first;
        }
        return dummy->next;
    }
};
\`\`\`
`,
    "LFU Cache": `
# LFU Cache

## Algorithm:
1. Use HashMap to store key-to-value mapping and key-to-frequency mapping.
2. Use HashMap to store frequency-to-list of keys.
3. Track the minimum frequency.
4. On get/put:
   - Update frequency and move key to next frequency list.
   - If minimum frequency list becomes empty, increment minimum frequency.
   - If cache is full and key doesn't exist, evict LFU item.

**Idea:**
Similar to LRU but evicts based on frequency instead of recency. Requires careful tracking of frequencies and minimum frequency.

- Time: O(1) for all operations
- Space: O(capacity)

---

## Code in Java:
\`\`\`java
class LFUCache {
    class Node {
        int key, value, freq;
        Node prev, next;
        Node(int key, int value) { this.key = key; this.value = value; this.freq = 1; }
    }
    
    int capacity, minFreq;
    Map<Integer, Node> keyNode = new HashMap<>();
    Map<Integer, Node> freqHead = new HashMap<>();
    
    public LFUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public int get(int key) {
        if (!keyNode.containsKey(key)) return -1;
        Node node = keyNode.get(key);
        updateFreq(node);
        return node.value;
    }
    
    public void put(int key, int value) {
        if (capacity == 0) return;
        if (keyNode.containsKey(key)) {
            Node node = keyNode.get(key);
            node.value = value;
            updateFreq(node);
        } else {
            if (keyNode.size() == capacity) evict();
            Node node = new Node(key, value);
            keyNode.put(key, node);
            minFreq = 1;
            addToFreq(node, 1);
        }
    }
    
    private void updateFreq(Node node) {
        removeFromFreq(node, node.freq);
        node.freq++;
        addToFreq(node, node.freq);
    }
    
    private void addToFreq(Node node, int freq) {
        Node head = freqHead.getOrDefault(freq, new Node(0, 0));
        head.next.prev = node;
        node.next = head.next;
        node.prev = head;
        head.next = node;
        freqHead.put(freq, head);
    }
    
    private void removeFromFreq(Node node, int freq) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        if (freqHead.get(freq).next == freqHead.get(freq)) {
            freqHead.remove(freq);
            if (freq == minFreq) minFreq++;
        }
    }
    
    private void evict() {
        Node head = freqHead.get(minFreq);
        Node toRemove = head.prev;
        removeFromFreq(toRemove, minFreq);
        keyNode.remove(toRemove.key);
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class LFUCache {
private:
    struct Node {
        int key, value, freq;
        Node* prev, *next;
        Node(int k, int v) : key(k), value(v), freq(1), prev(nullptr), next(nullptr) {}
    };
    
    int capacity, minFreq;
    unordered_map<int, Node*> keyNode;
    unordered_map<int, Node*> freqHead;
    
    void addToFreq(Node* node, int freq) {
        if (!freqHead.count(freq)) {
            freqHead[freq] = new Node(0, 0);
            freqHead[freq]->next = freqHead[freq];
            freqHead[freq]->prev = freqHead[freq];
        }
        Node* head = freqHead[freq];
        node->next = head->next;
        head->next->prev = node;
        head->next = node;
        node->prev = head;
    }
    
    void removeFromFreq(Node* node, int freq) {
        node->prev->next = node->next;
        node->next->prev = node->prev;
        if (freqHead[freq]->next == freqHead[freq]) {
            freqHead.erase(freq);
            if (freq == minFreq) minFreq++;
        }
    }
    
    void evict() {
        Node* head = freqHead[minFreq];
        Node* toRemove = head->prev;
        removeFromFreq(toRemove, minFreq);
        keyNode.erase(toRemove->key);
        delete toRemove;
    }
    
public:
    LFUCache(int capacity) : capacity(capacity), minFreq(0) {}
    
    int get(int key) {
        if (!keyNode.count(key)) return -1;
        Node* node = keyNode[key];
        removeFromFreq(node, node->freq);
        node->freq++;
        addToFreq(node, node->freq);
        return node->value;
    }
    
    void put(int key, int value) {
        if (capacity == 0) return;
        if (keyNode.count(key)) {
            Node* node = keyNode[key];
            node->value = value;
            removeFromFreq(node, node->freq);
            node->freq++;
            addToFreq(node, node->freq);
        } else {
            if ((int)keyNode.size() == capacity) evict();
            Node* node = new Node(key, value);
            keyNode[key] = node;
            minFreq = 1;
            addToFreq(node, 1);
        }
    }
};
\`\`\`
`,
    // Day 15 (Complete)
    "Valid Parentheses": `
# Valid Parentheses

## Algorithm:
1. Use a stack to process characters.
2. For opening brackets, push to stack.
3. For closing brackets:
   - If stack is empty, return false.
   - If top of stack is matching opening bracket, pop it.
   - Otherwise, return false.
4. At the end, stack should be empty.

**Idea:**
Stack naturally handles the nesting property of parentheses - last opened should be first closed.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if ((c == ')' && top != '(') || 
                    (c == '}' && top != '{') || 
                    (c == ']' && top != '[')) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        for (char c : s) {
            if (c == '(' || c == '{' || c == '[') {
                st.push(c);
            } else {
                if (st.empty()) return false;
                char top = st.top();
                st.pop();
                if ((c == ')' && top != '(') || 
                    (c == '}' && top != '{') || 
                    (c == ']' && top != '[')) {
                    return false;
                }
            }
        }
        return st.empty();
    }
};
\`\`\`
`,
    "Min Stack": `
# Min Stack

## Algorithm:
1. Use two stacks: one for values and one for minimums.
2. On push: Always push value to main stack. Push current minimum (min(value, previous min)) to min stack.
3. On pop: Pop from both stacks.
4. On getMin: Return top of min stack.

**Idea:**
By maintaining a parallel minimum stack, we can get the minimum in O(1) time.

- Time: O(1) for all operations
- Space: O(n)

---

## Code in Java:
\`\`\`java
class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack;
    
    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }
    
    public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }
    
    public void pop() {
        if (stack.pop().equals(minStack.peek())) {
            minStack.pop();
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class MinStack {
private:
    stack<int> st;
    stack<int> minSt;
    
public:
    MinStack() {}
    
    void push(int val) {
        st.push(val);
        if (minSt.empty() || val <= minSt.top()) {
            minSt.push(val);
        }
    }
    
    void pop() {
        if (st.top() == minSt.top()) {
            minSt.pop();
        }
        st.pop();
    }
    
    int top() {
        return st.top();
    }
    
    int getMin() {
        return minSt.top();
    }
};
\`\`\`
`,
    "Maximal Rectangle": `
# Maximal Rectangle

## Algorithm:
1. For each row, treat it as the base of a histogram (heights array).
2. For each column, accumulate the height: if current cell is '1', add 1; otherwise reset to 0.
3. For each row, find the largest rectangle in the histogram.
4. Use monotonic stack to find largest rectangle efficiently.

**Idea:**
By reducing the 2D problem to multiple 1D histogram problems, we can solve efficiently.

- Time: O(m*n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int maximalRectangle(char[][] matrix) {
        if (matrix.length == 0) return 0;
        int[] heights = new int[matrix[0].length];
        int max = 0;
        
        for (char[] row : matrix) {
            for (int i = 0; i < row.length; i++) {
                heights[i] = row[i] == '1' ? heights[i] + 1 : 0;
            }
            max = Math.max(max, largestRectangleArea(heights));
        }
        return max;
    }
    
    private int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int max = 0;
        for (int i = 0; i < heights.length; i++) {
            while (!stack.isEmpty() && heights[stack.peek()] > heights[i]) {
                int h = heights[stack.pop()];
                int w = stack.isEmpty() ? i : i - stack.peek() - 1;
                max = Math.max(max, h * w);
            }
            stack.push(i);
        }
        while (!stack.isEmpty()) {
            int h = heights[stack.pop()];
            int w = stack.isEmpty() ? heights.length : heights.length - stack.peek() - 1;
            max = Math.max(max, h * w);
        }
        return max;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
private:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st;
        int maxArea = 0;
        for (int i = 0; i < heights.size(); i++) {
            while (!st.empty() && heights[st.top()] > heights[i]) {
                int h = heights[st.top()];
                st.pop();
                int w = st.empty() ? i : i - st.top() - 1;
                maxArea = max(maxArea, h * w);
            }
            st.push(i);
        }
        while (!st.empty()) {
            int h = heights[st.top()];
            st.pop();
            int w = st.empty() ? (int)heights.size() : (int)heights.size() - st.top() - 1;
            maxArea = max(maxArea, h * w);
        }
        return maxArea;
    }
    
public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        if (matrix.empty()) return 0;
        vector<int> heights(matrix[0].size(), 0);
        int max = 0;
        
        for (auto& row : matrix) {
            for (int i = 0; i < row.size(); i++) {
                heights[i] = row[i] == '1' ? heights[i] + 1 : 0;
            }
            max = std::max(max, largestRectangleArea(heights));
        }
        return max;
    }
};
\`\`\`
`,
    // Day 16 (Complete)
    "Implement Queue using Stacks": `
# Implement Queue using Stacks

## Algorithm:
1. Use two stacks: incoming and outgoing.
2. On push: Add to incoming stack.
3. On pop/peek: If outgoing is empty, transfer all elements from incoming (this reverses order).
4. Return from outgoing stack.

**Idea:**
Two stacks can simulate queue operations. Incoming stack receives elements, outgoing stack pops them in FIFO order.

- Time: O(1) amortized for push, O(1) amortized for pop
- Space: O(n)

---

## Code in Java:
\`\`\`java
class MyQueue {
    private Stack<Integer> incoming = new Stack<>();
    private Stack<Integer> outgoing = new Stack<>();
    
    public void push(int x) {
        incoming.push(x);
    }
    
    public int pop() {
        peek();
        return outgoing.pop();
    }
    
    public int peek() {
        if (outgoing.isEmpty()) {
            while (!incoming.isEmpty()) {
                outgoing.push(incoming.pop());
            }
        }
        return outgoing.peek();
    }
    
    public boolean empty() {
        return incoming.isEmpty() && outgoing.isEmpty();
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class MyQueue {
private:
    stack<int> incoming, outgoing;
    
public:
    MyQueue() {}
    
    void push(int x) {
        incoming.push(x);
    }
    
    int pop() {
        peek();
        int res = outgoing.top();
        outgoing.pop();
        return res;
    }
    
    int peek() {
        if (outgoing.empty()) {
            while (!incoming.empty()) {
                outgoing.push(incoming.top());
                incoming.pop();
            }
        }
        return outgoing.top();
    }
    
    bool empty() {
        return incoming.empty() && outgoing.empty();
    }
};
\`\`\`
`,
    "Daily Temperatures": `
# Daily Temperatures

## Algorithm:
1. Use a monotonic decreasing stack storing indices.
2. For each day's temperature:
   - While stack is not empty and current temperature is greater than stack top's temperature:
     - Pop from stack and calculate days difference.
     - Store the difference for that index.
   - Push current index to stack.

**Idea:**
A monotonic stack tracks indices in decreasing order of temperatures, allowing us to find the next warmer day efficiently.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] result = new int[n];
        Stack<Integer> stack = new Stack<>();
        
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {
                int idx = stack.pop();
                result[idx] = i - idx;
            }
            stack.push(i);
        }
        return result;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> result(n, 0);
        stack<int> st;
        
        for (int i = 0; i < n; i++) {
            while (!st.empty() && temperatures[st.top()] < temperatures[i]) {
                int idx = st.top();
                st.pop();
                result[idx] = i - idx;
            }
            st.push(i);
        }
        return result;
    }
};
\`\`\`
`,
    "Trapping Rain Water II": `
# Trapping Rain Water II

## Algorithm:
1. Use a min-heap (priority queue) and visited array.
2. Start from all boundary cells and add them to heap.
3. Process cells from smallest height:
   - For each unvisited neighbor:
     - Water trapped = max(0, heap_top_height - neighbor_height).
     - Add neighbor to heap with updated height.
4. Sum all water trapped.

**Idea:**
Water fills up to the minimum height of boundaries. A min-heap helps us explore from smallest boundaries outward.

- Time: O(m*n*log(m*n))
- Space: O(m*n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int trapRainWater(int[][] heightMap) {
        if (heightMap.length == 0) return 0;
        int m = heightMap.length, n = heightMap[0].length;
        boolean[][] visited = new boolean[m][n];
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 || i == m-1 || j == 0 || j == n-1) {
                    pq.offer(new int[]{heightMap[i][j], i, j});
                    visited[i][j] = true;
                }
            }
        }
        
        int water = 0;
        int[][] dirs = {{0,1},{1,0},{0,-1},{-1,0}};
        while (!pq.isEmpty()) {
            int[] cell = pq.poll();
            int h = cell[0], x = cell[1], y = cell[2];
            
            for (int[] dir : dirs) {
                int nx = x + dir[0], ny = y + dir[1];
                if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    water += Math.max(0, h - heightMap[nx][ny]);
                    pq.offer(new int[]{Math.max(h, heightMap[nx][ny]), nx, ny});
                }
            }
        }
        return water;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int trapRainWater(vector<vector<int>>& heightMap) {
        if (heightMap.empty()) return 0;
        int m = heightMap.size(), n = heightMap[0].size();
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        priority_queue<tuple<int,int,int>, vector<tuple<int,int,int>>, greater<tuple<int,int,int>>> pq;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 || i == m-1 || j == 0 || j == n-1) {
                    pq.push({heightMap[i][j], i, j});
                    visited[i][j] = true;
                }
            }
        }
        
        int water = 0;
        vector<pair<int,int>> dirs = {{0,1},{1,0},{0,-1},{-1,0}};
        while (!pq.empty()) {
            auto [h, x, y] = pq.top();
            pq.pop();
            
            for (auto [dx, dy] : dirs) {
                int nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    water += max(0, h - heightMap[nx][ny]);
                    pq.push({max(h, heightMap[nx][ny]), nx, ny});
                }
            }
        }
        return water;
    }
};
\`\`\`
`,
    // Day 17 (Complete)
    "Implement Stack using Queues": `
# Implement Stack using Queues

## Algorithm:
1. Use one queue for push operations.
2. On push: Add element to queue.
3. On pop/top: Rotate queue n-1 times (move first element to end) so the top element is at the front.
4. Return or remove the front element.

**Idea:**
Rotating queue elements simulates stack behavior where top element is always at front after rotation.

- Time: O(n) for pop, O(1) for push
- Space: O(n)

---

## Code in Java:
\`\`\`java
class MyStack {
    private Queue<Integer> queue = new LinkedList<>();
    
    public void push(int x) {
        queue.add(x);
        for (int i = 1; i < queue.size(); i++) {
            queue.add(queue.remove());
        }
    }
    
    public int pop() {
        return queue.remove();
    }
    
    public int top() {
        return queue.peek();
    }
    
    public boolean empty() {
        return queue.isEmpty();
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class MyStack {
private:
    queue<int> q;
    
public:
    MyStack() {}
    
    void push(int x) {
        q.push(x);
        for (int i = 1; i < q.size(); i++) {
            q.push(q.front());
            q.pop();
        }
    }
    
    int pop() {
        int res = q.front();
        q.pop();
        return res;
    }
    
    int top() {
        return q.front();
    }
    
    bool empty() {
        return q.empty();
    }
};
\`\`\`
`,
    "Next Greater Element I": `
# Next Greater Element I

## Algorithm:
1. Use a monotonic decreasing stack to store indices.
2. Iterate through nums2 (the superset).
3. For each number:
   - While stack is not empty and current number is greater than stack top's number:
     - Pop from stack and store current number as the next greater element.
   - Push current index to stack.
4. Use a HashMap to map each number to its next greater element.
5. Return results for nums1 by looking up in the HashMap.

**Idea:**
Process nums2 to build next greater element mapping, then lookup for nums1 elements.

- Time: O(n + m)
- Space: O(m)

---

## Code in Java:
\`\`\`java
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<>();
        Stack<Integer> stack = new Stack<>();
        
        for (int num : nums2) {
            while (!stack.isEmpty() && stack.peek() < num) {
                map.put(stack.pop(), num);
            }
            stack.push(num);
        }
        
        int[] result = new int[nums1.length];
        for (int i = 0; i < nums1.length; i++) {
            result[i] = map.getOrDefault(nums1[i], -1);
        }
        return result;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int, int> map;
        stack<int> st;
        
        for (int num : nums2) {
            while (!st.empty() && st.top() < num) {
                map[st.top()] = num;
                st.pop();
            }
            st.push(num);
        }
        
        vector<int> result;
        for (int num : nums1) {
            result.push_back(map.count(num) ? map[num] : -1);
        }
        return result;
    }
};
\`\`\`
`,
    "Remove Duplicate Letters": `
# Remove Duplicate Letters

## Algorithm:
1. Use a stack to build the result.
2. Count frequency of each character.
3. For each character:
   - Decrement its frequency.
   - If character is already in result, skip it.
   - While stack is not empty, top is greater than current, and top appears later:
     - Pop from stack.
   - Push current character.

**Idea:**
Greedily remove larger characters if they appear later, ensuring lexicographically smallest result with all unique characters.

- Time: O(n)
- Space: O(1) (at most 26 unique characters)

---

## Code in Java:
\`\`\`java
class Solution {
    public String removeDuplicateLetters(String s) {
        int[] count = new int[26];
        boolean[] inStack = new boolean[26];
        Stack<Character> stack = new Stack<>();
        
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }
        
        for (char c : s.toCharArray()) {
            count[c - 'a']--;
            if (inStack[c - 'a']) continue;
            
            while (!stack.isEmpty() && stack.peek() > c && count[stack.peek() - 'a'] > 0) {
                char top = stack.pop();
                inStack[top - 'a'] = false;
            }
            
            stack.push(c);
            inStack[c - 'a'] = true;
        }
        
        StringBuilder result = new StringBuilder();
        for (char c : stack) {
            result.append(c);
        }
        return result.toString();
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    string removeDuplicateLetters(string s) {
        vector<int> count(26, 0);
        vector<bool> inStack(26, false);
        stack<char> st;
        
        for (char c : s) {
            count[c - 'a']++;
        }
        
        for (char c : s) {
            count[c - 'a']--;
            if (inStack[c - 'a']) continue;
            
            while (!st.empty() && st.top() > c && count[st.top() - 'a'] > 0) {
                inStack[st.top() - 'a'] = false;
                st.pop();
            }
            
            st.push(c);
            inStack[c - 'a'] = true;
        }
        
        string result = "";
        while (!st.empty()) {
            result = st.top() + result;
            st.pop();
        }
        return result;
    }
};
\`\`\`
`,
    // Day 18 (Complete)
    "Remove All Adjacent Duplicates In String": `
# Remove All Adjacent Duplicates In String

## Algorithm:
1. Use a stack to process characters.
2. For each character:
   - If stack is not empty and top equals current character, pop from stack.
   - Otherwise, push current character.
3. Build result from stack.

**Idea:**
Stack naturally handles adjacent duplicates by allowing immediate pairing and removal.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public String removeDuplicates(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (!stack.isEmpty() && stack.peek() == c) {
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        
        StringBuilder result = new StringBuilder();
        for (char c : stack) {
            result.append(c);
        }
        return result.toString();
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    string removeDuplicates(string s) {
        string st = "";
        for (char c : s) {
            if (!st.empty() && st.back() == c) {
                st.pop_back();
            } else {
                st.push_back(c);
            }
        }
        return st;
    }
};
\`\`\`
`,
    "Next Greater Element II": `
# Next Greater Element II

## Algorithm:
1. Use a monotonic decreasing stack.
2. Iterate through the circular array twice (0 to 2n-1).
3. For each element:
   - While stack is not empty and current element is greater than stack top element:
     - Pop and store result.
   - Push current index to stack.
4. Fill remaining stack with -1.

**Idea:**
Processing array twice handles the circular nature. Monotonic stack efficiently finds next greater element.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);
        Stack<Integer> stack = new Stack<>();
        
        for (int i = 0; i < 2 * n; i++) {
            int num = nums[i % n];
            while (!stack.isEmpty() && nums[stack.peek()] < num) {
                result[stack.pop()] = num;
            }
            if (i < n) stack.push(i);
        }
        return result;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, -1);
        stack<int> st;
        
        for (int i = 0; i < 2 * n; i++) {
            int num = nums[i % n];
            while (!st.empty() && nums[st.top()] < num) {
                result[st.top()] = num;
                st.pop();
            }
            if (i < n) st.push(i);
        }
        return result;
    }
};
\`\`\`
`,
    "Minimum Cost Tree From Leaf Values": `
# Minimum Cost Tree From Leaf Values

## Algorithm (DP Approach):
1. Use dynamic programming: dp[i][j] = minimum cost of tree with leaves from arr[i] to arr[j].
2. For each subarray, split at k: dp[i][j] = min(dp[i][k] + dp[k+1][j] + max(arr[i..k]) * max(arr[k+1..j])).
3. The cost is the product of max values of left and right subtrees.

**Idea:**
Internal nodes in the tree have values equal to max of their leaves. DP finds optimal split points.

- Time: O(n³)
- Space: O(n²)

---

## Code in Java:
\`\`\`java
class Solution {
    public int mctFromLeafValues(int[] arr) {
        int n = arr.length;
        int[][] dp = new int[n][n];
        int[][] maxVal = new int[n][n];
        
        for (int i = 0; i < n; i++) {
            maxVal[i][i] = arr[i];
            for (int j = i + 1; j < n; j++) {
                maxVal[i][j] = Math.max(maxVal[i][j-1], arr[j]);
            }
        }
        
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    dp[i][j] = Math.min(dp[i][j], 
                        dp[i][k] + dp[k+1][j] + maxVal[i][k] * maxVal[k+1][j]);
                }
            }
        }
        return dp[0][n-1];
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int mctFromLeafValues(vector<int>& arr) {
        int n = arr.size();
        vector<vector<int>> dp(n, vector<int>(n, 0));
        vector<vector<int>> maxVal(n, vector<int>(n, 0));
        
        for (int i = 0; i < n; i++) {
            maxVal[i][i] = arr[i];
            for (int j = i + 1; j < n; j++) {
                maxVal[i][j] = max(maxVal[i][j-1], arr[j]);
            }
        }
        
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = INT_MAX;
                for (int k = i; k < j; k++) {
                    dp[i][j] = min(dp[i][j], 
                        dp[i][k] + dp[k+1][j] + maxVal[i][k] * maxVal[k+1][j]);
                }
            }
        }
        return dp[0][n-1];
    }
};
\`\`\`
`,
    // Day 19 (Complete)
    "Backspace String Compare": `
# Backspace String Compare

## Algorithm:
1. Use two pointers starting from the end of both strings.
2. For each pointer, skip characters that are preceded by '#' (count backspaces).
3. Compare characters at valid positions.
4. Move pointers backward.
5. Strings are equal if both pointers reach the beginning simultaneously.

**Idea:**
Two pointers from the end efficiently handle backspace logic without needing extra space.

- Time: O(m + n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public boolean backspaceCompare(String s, String t) {
        int i = s.length() - 1, j = t.length() - 1;
        
        while (i >= 0 || j >= 0) {
            i = getNextValidChar(s, i);
            j = getNextValidChar(t, j);
            
            if (i >= 0 && j >= 0 && s.charAt(i) != t.charAt(j)) {
                return false;
            }
            if ((i >= 0) != (j >= 0)) {
                return false;
            }
            i--;
            j--;
        }
        return true;
    }
    
    private int getNextValidChar(String s, int index) {
        int backspace = 0;
        while (index >= 0) {
            if (s.charAt(index) == '#') {
                backspace++;
            } else if (backspace > 0) {
                backspace--;
            } else {
                break;
            }
            index--;
        }
        return index;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
private:
    int getNextValidChar(string& s, int index) {
        int backspace = 0;
        while (index >= 0) {
            if (s[index] == '#') {
                backspace++;
            } else if (backspace > 0) {
                backspace--;
            } else {
                break;
            }
            index--;
        }
        return index;
    }
    
public:
    bool backspaceCompare(string s, string t) {
        int i = s.length() - 1, j = t.length() - 1;
        
        while (i >= 0 || j >= 0) {
            i = getNextValidChar(s, i);
            j = getNextValidChar(t, j);
            
            if (i >= 0 && j >= 0 && s[i] != t[j]) {
                return false;
            }
            if ((i >= 0) != (j >= 0)) {
                return false;
            }
            i--;
            j--;
        }
        return true;
    }
};
\`\`\`
`,
    "Evaluate Reverse Polish Notation": `
# Evaluate Reverse Polish Notation

## Algorithm:
1. Use a stack to process tokens.
2. For each token:
   - If it's a number, push to stack.
   - If it's an operator, pop two operands, apply operation, push result.
3. Final result is the only element in stack.

**Idea:**
RPN (postfix notation) naturally suits stack evaluation where operators consume their operands.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        for (String token : tokens) {
            if (token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/")) {
                int b = stack.pop();
                int a = stack.pop();
                if (token.equals("+")) stack.push(a + b);
                else if (token.equals("-")) stack.push(a - b);
                else if (token.equals("*")) stack.push(a * b);
                else stack.push(a / b);
            } else {
                stack.push(Integer.parseInt(token));
            }
        }
        return stack.peek();
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> st;
        for (string& token : tokens) {
            if (token == "+" || token == "-" || token == "*" || token == "/") {
                int b = st.top(); st.pop();
                int a = st.top(); st.pop();
                if (token == "+") st.push(a + b);
                else if (token == "-") st.push(a - b);
                else if (token == "*") st.push(a * b);
                else st.push(a / b);
            } else {
                st.push(stoi(token));
            }
        }
        return st.top();
    }
};
\`\`\`
`,
    "Parse Lisp Expression": `
# Parse Lisp Expression

## Algorithm:
1. Use recursive parsing with a map for variable scope.
2. Skip spaces and parentheses.
3. Parse three parts: function (let/add/mult), arguments, and expression.
4. For 'let': assign variables in current scope before evaluating expression.
5. For 'add/mult': recursively parse and apply operations.

**Idea:**
Recursive parsing mirrors the nested structure of Lisp expressions. Scope handling uses variable scoping.

- Time: O(n²) in worst case
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    private Map<String, Integer> scope = new HashMap<>();
    
    public int evaluate(String expression) {
        return parse(expression, 0)[0];
    }
    
    private int[] parse(String s, int start) {
        int i = start;
        if (s.charAt(i) != '(') {
            int j = i;
            if (s.charAt(i) == '-' || s.charAt(i) == '+') j++;
            while (j < s.length() && Character.isDigit(s.charAt(j))) j++;
            return new int[]{Integer.parseInt(s.substring(i, j)), j};
        }
        
        i++; // skip '('
        String[] tokens = new String[3];
        int idx = 0;
        while (s.charAt(i) == ' ') i++;
        
        int j = i;
        while (j < s.length() && Character.isLetter(s.charAt(j))) j++;
        tokens[idx++] = s.substring(i, j);
        i = j;
        
        int[] result;
        while (s.charAt(i) != ')') {
            while (i < s.length() && s.charAt(i) == ' ') i++;
            if (s.charAt(i) == '(') {
                result = parse(s, i);
                tokens[idx++] = String.valueOf(result[0]);
                i = result[1];
            } else {
                j = i;
                if (s.charAt(i) == '-' || s.charAt(i) == '+') j++;
                while (j < s.length() && Character.isLetterOrDigit(s.charAt(j))) j++;
                tokens[idx++] = s.substring(i, j);
                i = j;
            }
            while (i < s.length() && s.charAt(i) == ' ') i++;
        }
        
        if (tokens[0].equals("let")) {
            for (int k = 1; k < idx - 1; k += 2) {
                scope.put(tokens[k], Integer.parseInt(tokens[k+1]));
            }
            result = new int[]{0, i + 1};
        } else {
            result = new int[]{0, i + 1};
        }
        return result;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
private:
    unordered_map<string, int> scope;
    
    pair<int, int> parse(string& s, int start) {
        int i = start;
        if (s[i] != '(') {
            int j = i;
            if (s[i] == '-' || s[i] == '+') j++;
            while (j < s.length() && isdigit(s[j])) j++;
            return {stoi(s.substr(i, j - i)), j};
        }
        
        i++;
        vector<string> tokens;
        while (s[i] == ' ') i++;
        
        int j = i;
        while (j < s.length() && isalpha(s[j])) j++;
        tokens.push_back(s.substr(i, j - i));
        i = j;
        
        pair<int, int> result;
        while (s[i] != ')') {
            while (i < s.length() && s[i] == ' ') i++;
            if (s[i] == '(') {
                result = parse(s, i);
                tokens.push_back(to_string(result.first));
                i = result.second;
            } else {
                j = i;
                if (s[i] == '-' || s[i] == '+') j++;
                while (j < s.length() && (isdigit(s[j]) || isalpha(s[j]))) j++;
                tokens.push_back(s.substr(i, j - i));
                i = j;
            }
            while (i < s.length() && s[i] == ' ') i++;
        }
        
        return {0, i + 1};
    }
    
public:
    int evaluate(string expression) {
        return parse(expression, 0).first;
    }
};
\`\`\`
`,
    // Day 20 (Complete)
    "Remove Outermost Parentheses": `
# Remove Outermost Parentheses

## Algorithm:
1. Track the depth/balance of parentheses as we iterate.
2. When balance transitions from 0->1, mark the start of a primitive valid parentheses string.
3. When balance transitions from 1->0, mark the end.
4. Keep all characters except the outermost ones (first and last of each string).

**Idea:**
Track balance to identify primitive strings and remove their outermost parentheses.

- Time: O(n)
- Space: O(n) for result

---

## Code in Java:
\`\`\`java
class Solution {
    public String removeOuterParentheses(String s) {
        StringBuilder result = new StringBuilder();
        int balance = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                if (balance > 0) result.append(c);
                balance++;
            } else {
                balance--;
                if (balance > 0) result.append(c);
            }
        }
        return result.toString();
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    string removeOuterParentheses(string s) {
        string result = "";
        int balance = 0;
        for (char c : s) {
            if (c == '(') {
                if (balance > 0) result += c;
                balance++;
            } else {
                balance--;
                if (balance > 0) result += c;
            }
        }
        return result;
    }
};
\`\`\`
`,
    "Remove K Digits": `
# Remove K Digits

## Algorithm:
1. Use a stack to build the result digit by digit.
2. For each digit:
   - While stack is not empty, k > 0, and stack top > current digit:
     - Pop from stack and decrement k.
   - Push current digit.
3. If k > 0 after iteration, remove last k digits.
4. Convert to string, handling leading zeros.

**Idea:**
Greedy approach: remove larger digits from left when possible to get smallest number.

- Time: O(n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public String removeKdigits(String num, int k) {
        Stack<Character> stack = new Stack<>();
        
        for (char digit : num.toCharArray()) {
            while (!stack.isEmpty() && k > 0 && stack.peek() > digit) {
                stack.pop();
                k--;
            }
            stack.push(digit);
        }
        
        while (k > 0) {
            stack.pop();
            k--;
        }
        
        if (stack.isEmpty()) return "0";
        
        StringBuilder result = new StringBuilder();
        for (char c : stack) result.append(c);
        
        String res = result.toString();
        int i = 0;
        while (i < res.length() - 1 && res.charAt(i) == '0') i++;
        return res.substring(i);
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    string removeKdigits(string num, int k) {
        string st = "";
        
        for (char digit : num) {
            while (!st.empty() && k > 0 && st.back() > digit) {
                st.pop_back();
                k--;
            }
            st.push_back(digit);
        }
        
        while (k > 0) {
            st.pop_back();
            k--;
        }
        
        if (st.empty()) return "0";
        
        int i = 0;
        while (i < st.length() - 1 && st[i] == '0') i++;
        return st.substr(i);
    }
};
\`\`\`
`,
    "Maximum Frequency Stack": `
# Maximum Frequency Stack

## Algorithm:
1. Use a HashMap to store frequency of each number.
2. Use a HashMap of frequency -> stack of numbers with that frequency.
3. Track the maximum frequency.
4. On push: Increment frequency and add to frequency bucket.
5. On pop: Remove from maximum frequency bucket; decrement max if bucket becomes empty.

**Idea:**
Organizing elements by frequency allows O(1) access to maximum frequency elements.

- Time: O(1) for all operations
- Space: O(n)

---

## Code in Java:
\`\`\`java
class FreqStack {
    private Map<Integer, Integer> freq = new HashMap<>();
    private Map<Integer, Stack<Integer>> freqStack = new HashMap<>();
    private int maxFreq = 0;
    
    public void push(int val) {
        freq.put(val, freq.getOrDefault(val, 0) + 1);
        int f = freq.get(val);
        maxFreq = Math.max(maxFreq, f);
        freqStack.computeIfAbsent(f, k -> new Stack<>()).push(val);
    }
    
    public int pop() {
        int val = freqStack.get(maxFreq).pop();
        freq.put(val, freq.get(val) - 1);
        if (freqStack.get(maxFreq).isEmpty()) {
            maxFreq--;
        }
        return val;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class FreqStack {
private:
    unordered_map<int, int> freq;
    unordered_map<int, stack<int>> freqStack;
    int maxFreq = 0;
    
public:
    void push(int val) {
        freq[val]++;
        int f = freq[val];
        maxFreq = max(maxFreq, f);
        freqStack[f].push(val);
    }
    
    int pop() {
        int val = freqStack[maxFreq].top();
        freqStack[maxFreq].pop();
        freq[val]--;
        if (freqStack[maxFreq].empty()) {
            maxFreq--;
        }
        return val;
    }
};
\`\`\`
`,
    "Make The String Great": `# Make The String Great
## Algorithm
- Use stack
- For each char: if stack not empty and stack top is same letter but different case → pop
- Else push current char
- Return stack as string
- **Core Idea:** Stack removes bad pairs immediately as they form.
- **Time:** O(n) | **Space:** O(n)

## Solutions

### Java
\`\`\`java
String makeGood(String s) {
    StringBuilder sb = new StringBuilder();
    for (char c : s.toCharArray()) {
        if (sb.length()>0 && Math.abs(sb.charAt(sb.length()-1)-c)==32)
            sb.deleteCharAt(sb.length()-1);
        else sb.append(c);
    }
    return sb.toString();
}
\`\`\`

### C++
\`\`\`cpp
string makeGood(string s) {
    string st;
    for (char c : s) {
        if (!st.empty()&&abs(st.back()-c)==32) st.pop_back();
        else st+=c;
    }
    return st;
}
\`\`\`
`,
    "132 Pattern": `# 132 Pattern
## Algorithm
- Traverse from right to left
- Maintain monotonic decreasing stack
- Track k = third number (between mid and max seen so far)
- If nums[i] < k → found 132 pattern
- **Core Idea:** Track 'k' (best candidate for middle) using stack; check if any left element is smaller.
- **Time:** O(n) | **Space:** O(n)

## Solutions

### Java
\`\`\`java
boolean find132pattern(int[] nums) {
    Stack<Integer> st = new Stack<>();
    int k = Integer.MIN_VALUE;
    for (int i=nums.length-1;i>=0;i--) {
        if (nums[i] < k) return true;
        while (!st.isEmpty() && nums[i] > st.peek()) k = st.pop();
        st.push(nums[i]);
    }
    return false;
}
\`\`\`

### C++
\`\`\`cpp
bool find132pattern(vector<int>& nums) {
    stack<int> st; int k=INT_MIN;
    for (int i=nums.size()-1;i>=0;i--) {
        if (nums[i]<k) return true;
        while (!st.empty()&&nums[i]>st.top()){k=st.top();st.pop();}
        st.push(nums[i]);
    }
    return false;
}
\`\`\`
`,
    "Shortest Subarray with Sum at Least K": `# Shortest Subarray with Sum at Least K
## Algorithm
- Build prefix sum array
- Use monotonic deque of indices (increasing prefix sums)
- For each i:
  - While deque front: prefix[i] - prefix[front] >= k → update min length, pop front
  - While deque back: prefix[back] >= prefix[i] → pop back (can't be useful)
  - Push i to deque
- **Core Idea:** Deque maintains candidates for subarray start; pop front when sum condition met.
- **Time:** O(n) | **Space:** O(n)

## Solutions

### Java
\`\`\`java
int shortestSubarray(int[] nums, int k) {
    int n=nums.length, res=n+1;
    long[] prefix=new long[n+1];
    for(int i=0;i<n;i++) prefix[i+1]=prefix[i]+nums[i];
    Deque<Integer> dq=new ArrayDeque<>();
    for(int i=0;i<=n;i++){
        while(!dq.isEmpty()&&prefix[i]-prefix[dq.peekFirst()]>=k)
            res=Math.min(res,i-dq.pollFirst());
        while(!dq.isEmpty()&&prefix[i]<=prefix[dq.peekLast()])
            dq.pollLast();
        dq.addLast(i);
    }
    return res==n+1?-1:res;
}
\`\`\`

### C++
\`\`\`cpp
int shortestSubarray(vector<int>& nums, int k) {
    int n=nums.size(),res=n+1;
    vector<long> prefix(n+1,0);
    for(int i=0;i<n;i++) prefix[i+1]=prefix[i]+nums[i];
    deque<int> dq;
    for(int i=0;i<=n;i++){
        while(!dq.empty()&&prefix[i]-prefix[dq.front()]>=k){res=min(res,i-dq.front());dq.pop_front();}
        while(!dq.empty()&&prefix[i]<=prefix[dq.back()])dq.pop_back();
        dq.push_back(i);
    }
    return res==n+1?-1:res;
}
\`\`\`
`,
    "Flood Fill": `# Flood Fill
## Algorithm
- DFS/BFS from starting pixel
- Only fill if current color == original source color AND != new color
- Mark visited by changing to new color
- Explore 4 directions
- **Core Idea:** Recursive DFS spreading new color to connected same-colored pixels.
- **Time:** O(m×n) | **Space:** O(m×n) stack

## Solutions

### Java
\`\`\`java
int[][] floodFill(int[][] img, int sr, int sc, int color) {
    if (img[sr][sc]==color) return img;
    dfs(img, sr, sc, img[sr][sc], color);
    return img;
}
void dfs(int[][] img, int r, int c, int orig, int color) {
    if (r<0||r>=img.length||c<0||c>=img[0].length||img[r][c]!=orig) return;
    img[r][c]=color;
    dfs(img,r+1,c,orig,color); dfs(img,r-1,c,orig,color);
    dfs(img,r,c+1,orig,color); dfs(img,r,c-1,orig,color);
}
\`\`\`

### C++
\`\`\`cpp
vector<vector<int>> floodFill(vector<vector<int>>& img, int sr, int sc, int color) {
    int orig=img[sr][sc]; if(orig==color)return img;
    function<void(int,int)> dfs=[&](int r,int c){
        if(r<0||r>=img.size()||c<0||c>=img[0].size()||img[r][c]!=orig)return;
        img[r][c]=color;
        dfs(r+1,c);dfs(r-1,c);dfs(r,c+1);dfs(r,c-1);
    };
    dfs(sr,sc); return img;
}
\`\`\`
`,
    "Number of Islands": `# Number of Islands
## Algorithm
- Traverse entire grid
- When land ('1') found: count++, DFS to mark connected land as visited ('0')
- DFS marks all connected '1's as '0'
- **Core Idea:** Each DFS call floods one island — count the calls.
- **Time:** O(m×n) | **Space:** O(m×n)

## Solutions

### Java
\`\`\`java
int numIslands(char[][] grid) {
    int count=0;
    for (int i=0;i<grid.length;i++)
        for (int j=0;j<grid[0].length;j++)
            if (grid[i][j]=='1') { count++; dfs(grid,i,j); }
    return count;
}
void dfs(char[][] g, int r, int c) {
    if (r<0||r>=g.length||c<0||c>=g[0].length||g[r][c]!='1') return;
    g[r][c]='0';
    dfs(g,r+1,c);dfs(g,r-1,c);dfs(g,r,c+1);dfs(g,r,c-1);
}
\`\`\`

### C++
\`\`\`cpp
int numIslands(vector<vector<char>>& grid) {
    int m=grid.size(),n=grid[0].size(),count=0;
    function<void(int,int)> dfs=[&](int r,int c){
        if(r<0||r>=m||c<0||c>=n||grid[r][c]!='1')return;
        grid[r][c]='0';
        dfs(r+1,c);dfs(r-1,c);dfs(r,c+1);dfs(r,c-1);
    };
    for(int i=0;i<m;i++)for(int j=0;j<n;j++)if(grid[i][j]=='1'){count++;dfs(i,j);}
    return count;
}
\`\`\`
`,
    "Cheapest Flights Within K Stops": `# Cheapest Flights Within K Stops
## Algorithm
- Bellman-Ford with at most K+1 edges (K stops = K+1 edges)
- Run K+1 relaxation iterations
- Each iteration: for every edge, relax from previous prices array
- Use temp array to prevent using edges from same iteration
- **Core Idea:** BF variant: limit relaxations to K+1 to enforce stop constraint.
- **Time:** O(K×E) | **Space:** O(V)

## Solutions

### Java
\`\`\`java
int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
    int[] prices = new int[n];
    Arrays.fill(prices, Integer.MAX_VALUE);
    prices[src]=0;
    for (int i=0;i<=k;i++) {
        int[] temp=Arrays.copyOf(prices,n);
        for (int[] f:flights) {
            if (prices[f[0]]==Integer.MAX_VALUE) continue;
            temp[f[1]]=Math.min(temp[f[1]], prices[f[0]]+f[2]);
        }
        prices=temp;
    }
    return prices[dst]==Integer.MAX_VALUE?-1:prices[dst];
}
\`\`\`

### C++
\`\`\`cpp
int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
    vector<int> prices(n,INT_MAX); prices[src]=0;
    for(int i=0;i<=k;i++){
        vector<int> temp=prices;
        for(auto& f:flights){
            if(prices[f[0]]==INT_MAX)continue;
            temp[f[1]]=min(temp[f[1]],prices[f[0]]+f[2]);
        }
        prices=temp;
    }
    return prices[dst]==INT_MAX?-1:prices[dst];
}
\`\`\`
`,
    "Find the Town Judge": `# Find the Town Judge
## Algorithm
- Count in-degree and out-degree for each person
- Judge: in-degree = n-1 AND out-degree = 0
- **Core Idea:** Judge is trusted by everyone but trusts no one.
- **Time:** O(n+E) | **Space:** O(n)

## Solutions

### Java
\`\`\`java
int findJudge(int n, int[][] trust) {
    int[] in=new int[n+1], out=new int[n+1];
    for (int[] t:trust) { out[t[0]]++; in[t[1]]++; }
    for (int i=1;i<=n;i++) if (in[i]==n-1&&out[i]==0) return i;
    return -1;
}
\`\`\`

### C++
\`\`\`cpp
int findJudge(int n, vector<vector<int>>& trust) {
    vector<int> in(n+1,0),out(n+1,0);
    for(auto&t:trust){out[t[0]]++;in[t[1]]++;}
    for(int i=1;i<=n;i++)if(in[i]==n-1&&out[i]==0)return i;
    return -1;
}
\`\`\`
`,
    "Course Schedule": `# Course Schedule
## Algorithm
- Build adjacency list, compute in-degrees
- Topological sort (Kahn’s BFS): start with in-degree 0 nodes
- Process queue: decrement neighbors' in-degrees, add new zeros to queue
- If processed all nodes → no cycle (can finish); else cycle exists
- **Core Idea:** Cycle detection via topological sort: if all courses processable, no cycle.
- **Time:** O(V+E) | **Space:** O(V+E)

## Solutions

### Java
\`\`\`java
boolean canFinish(int n, int[][] prereqs) {
    int[] inDeg=new int[n];
    List<List<Integer>> adj=new ArrayList<>();
    for(int i=0;i<n;i++)adj.add(new ArrayList<>());
    for(int[] p:prereqs){adj.get(p[1]).add(p[0]);inDeg[p[0]]++;}
    Queue<Integer> q=new LinkedList<>();
    for(int i=0;i<n;i++)if(inDeg[i]==0)q.offer(i);
    int cnt=0;
    while(!q.isEmpty()){
        int cur=q.poll(); cnt++;
        for(int nb:adj.get(cur))if(--inDeg[nb]==0)q.offer(nb);
    }
    return cnt==n;
}
\`\`\`

### C++
\`\`\`cpp
bool canFinish(int n, vector<vector<int>>& prereqs) {
    vector<int> inDeg(n,0); vector<vector<int>> adj(n);
    for(auto&p:prereqs){adj[p[1]].push_back(p[0]);inDeg[p[0]]++;}
    queue<int> q;
    for(int i=0;i<n;i++)if(!inDeg[i])q.push(i);
    int cnt=0;
    while(!q.empty()){
        int cur=q.front();q.pop();cnt++;
        for(int nb:adj[cur])if(!--inDeg[nb])q.push(nb);
    }
    return cnt==n;
}
\`\`\`
`,
    "Reconstruct Itinerary": `# Reconstruct Itinerary
## Algorithm
- Build adjacency list with sorted destinations (min-heap or sorted list)
- Hierholzer’s algorithm for Eulerian path
- DFS: visit smallest neighbor; when no neighbors left: prepend to result
- Start from 'JFK'
- **Core Idea:** Eulerian path exists (all tickets used). Hierholzer's finds it greedily.
- **Time:** O(E log E) | **Space:** O(E)

## Solutions

### Java
\`\`\`java
List<String> findItinerary(List<List<String>> tickets) {
    Map<String,PriorityQueue<String>> adj=new HashMap<>();
    for(List<String> t:tickets)
        adj.computeIfAbsent(t.get(0),x->new PriorityQueue<>()).offer(t.get(1));
    LinkedList<String> res=new LinkedList<>();
    dfs("JFK",adj,res);
    return res;
}
void dfs(String cur,Map<String,PriorityQueue<String>> adj,LinkedList<String> res){
    PriorityQueue<String> pq=adj.get(cur);
    while(pq!=null&&!pq.isEmpty()) dfs(pq.poll(),adj,res);
    res.addFirst(cur);
}
\`\`\`

### C++
\`\`\`cpp
vector<string> findItinerary(vector<vector<string>>& tickets) {
    unordered_map<string,multiset<string>> adj;
    for(auto&t:tickets)adj[t[0]].insert(t[1]);
    vector<string> res;
    function<void(string)> dfs=[&](string cur){
        while(!adj[cur].empty()){auto it=adj[cur].begin();string nxt=*it;adj[cur].erase(it);dfs(nxt);}
        res.push_back(cur);
    };
    dfs("JFK"); reverse(res.begin(),res.end()); return res;
}
\`\`\`
`,
    "Find Center of Star Graph": `# Find Center of Star Graph
## Algorithm
- Center node appears in every edge
- Check if edges[0][0] appears in edges[1]: return it; else return edges[0][1]
- **Core Idea:** Center is common to any two edges.
- **Time:** O(1) | **Space:** O(1)

## Solutions

### Java
\`\`\`java
int findCenter(int[][] edges) {
    return (edges[0][0]==edges[1][0]||edges[0][0]==edges[1][1]) ? edges[0][0] : edges[0][1];
}
\`\`\`

### C++
\`\`\`cpp
int findCenter(vector<vector<int>>& edges) {
    return (edges[0][0]==edges[1][0]||edges[0][0]==edges[1][1])?edges[0][0]:edges[0][1];
}
\`\`\`
`,
    "Number of Provinces": `# Number of Provinces
## Algorithm
- Union-Find (DSU) approach
- For each connection: union the two cities
- Count distinct roots (provinces)
- **Core Idea:** Connected components = provinces. Union-Find groups them efficiently.
- **Time:** O(n² × α(n)) | **Space:** O(n)

## Solutions

### Java
\`\`\`java
int findCircleNum(int[][] isConnected) {
    int n=isConnected.length; int[] parent=new int[n];
    for(int i=0;i<n;i++)parent[i]=i;
    int provinces=n;
    for(int i=0;i<n;i++) for(int j=i+1;j<n;j++)
        if(isConnected[i][j]==1) {
            int ri=find(parent,i), rj=find(parent,j);
            if(ri!=rj){parent[ri]=rj;provinces--;}
        }
    return provinces;
}
int find(int[] p, int x){return p[x]==x?x:(p[x]=find(p,p[x]));}
\`\`\`

### C++
\`\`\`cpp
int findCircleNum(vector<vector<int>>& ic) {
    int n=ic.size(); vector<int> p(n);iota(p.begin(),p.end(),0);
    function<int(int)> find=[&](int x){return p[x]==x?x:p[x]=find(p[x]);};
    int prov=n;
    for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(ic[i][j]){
        int ri=find(i),rj=find(j);if(ri!=rj){p[ri]=rj;prov--;}
    }
    return prov;
}
\`\`\`
`,
    "Critical Connections in a Network": `# Critical Connections in a Network
## Algorithm
- Tarjan’s bridge-finding algorithm
- DFS with discovery time and low-link values
- For each edge (u,v): low[v] = min(low[v], low[u])
- If low[v] > disc[u]: edge (u,v) is a bridge
- **Core Idea:** A bridge is an edge whose removal disconnects graph. Tarjan detects this via low-link values.
- **Time:** O(V+E) | **Space:** O(V+E)

## Solutions

### Java
\`\`\`java
List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
    List<List<Integer>> adj[] = new List[n], res = new ArrayList<>();
    for(int i=0;i<n;i++) adj[i]=new ArrayList<>();
    for(List<Integer> c:connections){adj[c.get(0)].add(c.get(1));adj[c.get(1)].add(c.get(0));}
    int[] disc=new int[n], low=new int[n]; Arrays.fill(disc,-1);
    int[] timer={0};
    for(int i=0;i<n;i++) if(disc[i]==-1) dfs(i,-1,disc,low,adj,res,timer);
    return res;
}
void dfs(int u,int par,int[] disc,int[] low,List[] adj,List<List<Integer>> res,int[] t){
    disc[u]=low[u]=t[0]++;
    for(int v:(List<Integer>)adj[u]){
        if(v==par)continue;
        if(disc[v]==-1){dfs(v,u,disc,low,adj,res,t);low[u]=Math.min(low[u],low[v]);
            if(low[v]>disc[u])res.add(Arrays.asList(u,v));
        } else low[u]=Math.min(low[u],disc[v]);
    }
}
\`\`\`

### C++
\`\`\`cpp
vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {
    vector<vector<int>> adj(n),res;
    for(auto&c:connections){adj[c[0]].push_back(c[1]);adj[c[1]].push_back(c[0]);}
    vector<int> disc(n,-1),low(n); int timer=0;
    function<void(int,int)> dfs=[&](int u,int par){
        disc[u]=low[u]=timer++;
        for(int v:adj[u]){
            if(v==par)continue;
            if(disc[v]==-1){dfs(v,u);low[u]=min(low[u],low[v]);if(low[v]>disc[u])res.push_back({u,v});}
            else low[u]=min(low[u],disc[v]);
        }
    };
    for(int i=0;i<n;i++)if(disc[i]==-1)dfs(i,-1);
    return res;
}
\`\`\`
`,
    "Maximum Depth of Binary Tree": `# Maximum Depth of Binary Tree
## Algorithm
- Recursive DFS
- Base: null node → 0
- Return 1 + max(left depth, right depth)
- **Core Idea:** Height = 1 + max of children's heights.
- **Time:** O(n) | **Space:** O(h)

## Solutions

### Java
\`\`\`java
int maxDepth(TreeNode root) {
    if (root==null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
\`\`\`

### C++
\`\`\`cpp
int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}
\`\`\`
`,
    "Binary Tree Level Order Traversal": `# Binary Tree Level Order Traversal
## Algorithm
- BFS with queue
- For each level: record size, process all nodes of that level
- Add children to queue for next level
- **Core Idea:** Process level by level using queue size as boundary.
- **Time:** O(n) | **Space:** O(n)

## Solutions

### Java
\`\`\`java
List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> res=new ArrayList<>();
    if(root==null)return res;
    Queue<TreeNode> q=new LinkedList<>(); q.offer(root);
    while(!q.isEmpty()){
        int size=q.size(); List<Integer> level=new ArrayList<>();
        for(int i=0;i<size;i++){
            TreeNode node=q.poll(); level.add(node.val);
            if(node.left!=null)q.offer(node.left);
            if(node.right!=null)q.offer(node.right);
        }
        res.add(level);
    }
    return res;
}
\`\`\`

### C++
\`\`\`cpp
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> res; if(!root)return res;
    queue<TreeNode*> q; q.push(root);
    while(!q.empty()){
        int sz=q.size(); vector<int> level;
        for(int i=0;i<sz;i++){
            auto node=q.front();q.pop(); level.push_back(node->val);
            if(node->left)q.push(node->left);
            if(node->right)q.push(node->right);
        }
        res.push_back(level);
    }
    return res;
}
\`\`\`
`,
    "Binary Tree Maximum Path Sum": `# Binary Tree Maximum Path Sum
## Algorithm
- Post-order DFS
- For each node: compute max gain from left and right (ignore negatives)
- Update global answer = node.val + left gain + right gain
- Return node.val + max(left, right) gain to parent
- **Core Idea:** At each node, either path passes through it (both children) or continues up (one child).
- **Time:** O(n) | **Space:** O(h)

## Solutions

### Java
\`\`\`java
int maxPathSum(TreeNode root) {
    int[] max = {Integer.MIN_VALUE};
    dfs(root, max);
    return max[0];
}
int dfs(TreeNode node, int[] max) {
    if (node==null) return 0;
    int left=Math.max(0,dfs(node.left,max));
    int right=Math.max(0,dfs(node.right,max));
    max[0]=Math.max(max[0],node.val+left+right);
    return node.val+Math.max(left,right);
}
\`\`\`

### C++
\`\`\`cpp
int maxPathSum(TreeNode* root) {
    int ans=INT_MIN;
    function<int(TreeNode*)> dfs=[&](TreeNode* node)->int{
        if(!node)return 0;
        int l=max(0,dfs(node->left)), r=max(0,dfs(node->right));
        ans=max(ans,node->val+l+r);
        return node->val+max(l,r);
    };
    dfs(root); return ans;
}
\`\`\`
`,
    "Invert Binary Tree": `# Invert Binary Tree
## Algorithm
- Recursive DFS
- Swap left and right children
- Recurse on both sides
- **Core Idea:** Mirror the tree by swapping children at every node.
- **Time:** O(n) | **Space:** O(h)

## Solutions

### Java
\`\`\`java
TreeNode invertTree(TreeNode root) {
    if (root==null) return null;
    TreeNode tmp=root.left; root.left=root.right; root.right=tmp;
    invertTree(root.left); invertTree(root.right);
    return root;
}
\`\`\`

### C++
\`\`\`cpp
TreeNode* invertTree(TreeNode* root) {
    if (!root) return nullptr;
    swap(root->left, root->right);
    invertTree(root->left); invertTree(root->right);
    return root;
}
\`\`\`
`,
    "Kth Smallest Element in a BST": `# Kth Smallest Element in a BST
## Algorithm
- Inorder traversal (left → root → right) gives sorted order in BST
- Count nodes visited; return kth node's value
- **Core Idea:** Inorder of BST is sorted. Stop at kth element.
- **Time:** O(n) | **Space:** O(h)

## Solutions

### Java
\`\`\`java
int kthSmallest(TreeNode root, int k) {
    int[] res={0}; int[] count={0};
    inorder(root,k,count,res);
    return res[0];
}
void inorder(TreeNode node,int k,int[] count,int[] res){
    if(node==null)return;
    inorder(node.left,k,count,res);
    if(++count[0]==k){res[0]=node.val;return;}
    inorder(node.right,k,count,res);
}
\`\`\`

### C++
\`\`\`cpp
int kthSmallest(TreeNode* root, int k) {
    int res,cnt=0;
    function<void(TreeNode*)> inorder=[&](TreeNode* node){
        if(!node)return;
        inorder(node->left);
        if(++cnt==k){res=node->val;return;}
        inorder(node->right);
    };
    inorder(root); return res;
}
\`\`\`
`,
    "Serialize and Deserialize Binary Tree": `# Serialize and Deserialize Binary Tree
## Algorithm
- Serialize: BFS level-order, use 'null' for empty nodes
- Deserialize: BFS using queue to reconstruct
- Assign left and right children from token stream using parent queue
- **Core Idea:** Level-order with null markers preserves structure for reconstruction.
- **Time:** O(n) | **Space:** O(n)

## Solutions

### Java
\`\`\`java
public String serialize(TreeNode root) {
    if (root==null) return "";
    Queue<TreeNode> q=new LinkedList<>(); q.offer(root);
    StringBuilder sb=new StringBuilder();
    while(!q.isEmpty()){
        TreeNode node=q.poll();
        if(node==null){sb.append("null,");}
        else{sb.append(node.val+",");q.offer(node.left);q.offer(node.right);}
    }
    return sb.toString();
}
public TreeNode deserialize(String data) {
    if(data.isEmpty())return null;
    String[] vals=data.split(",");
    TreeNode root=new TreeNode(Integer.parseInt(vals[0]));
    Queue<TreeNode> q=new LinkedList<>(); q.offer(root);
    int i=1;
    while(!q.isEmpty()){
        TreeNode node=q.poll();
        if(!vals[i].equals("null")){node.left=new TreeNode(Integer.parseInt(vals[i]));q.offer(node.left);}i++;
        if(!vals[i].equals("null")){node.right=new TreeNode(Integer.parseInt(vals[i]));q.offer(node.right);}i++;
    }
    return root;
}
\`\`\`

### C++
\`\`\`cpp
string serialize(TreeNode* root) {
    if(!root)return "";
    queue<TreeNode*> q; q.push(root); string res;
    while(!q.empty()){
        auto node=q.front();q.pop();
        if(!node)res+="null,";
        else{res+=to_string(node->val)+",";q.push(node->left);q.push(node->right);}
    }
    return res;
}
TreeNode* deserialize(string data) {
    if(data.empty())return nullptr;
    istringstream ss(data); string val; getline(ss,val,',');
    TreeNode* root=new TreeNode(stoi(val));
    queue<TreeNode*> q; q.push(root);
    while(!q.empty()){
        auto node=q.front();q.pop();
        getline(ss,val,','); if(val!="null"){node->left=new TreeNode(stoi(val));q.push(node->left);}
        getline(ss,val,','); if(val!="null"){node->right=new TreeNode(stoi(val));q.push(node->right);}
    }
    return root;
}
\`\`\`
`,
    "Diameter of Binary Tree": `# Diameter of Binary Tree
## Algorithm
- DFS post-order
- For each node: diameter through it = left height + right height
- Update global max; return 1 + max(left, right) height
- **Core Idea:** Diameter at each node is sum of max heights of left and right subtrees.
- **Time:** O(n) | **Space:** O(h)

## Solutions

### Java
\`\`\`java
int diameterOfBinaryTree(TreeNode root) {
    int[] max={0};
    height(root,max);
    return max[0];
}
int height(TreeNode node,int[] max){
    if(node==null)return 0;
    int l=height(node.left,max), r=height(node.right,max);
    max[0]=Math.max(max[0],l+r);
    return 1+Math.max(l,r);
}
\`\`\`

### C++
\`\`\`cpp
int diameterOfBinaryTree(TreeNode* root) {
    int ans=0;
    function<int(TreeNode*)> h=[&](TreeNode* node)->int{
        if(!node)return 0;
        int l=h(node->left),r=h(node->right);
        ans=max(ans,l+r); return 1+max(l,r);
    };
    h(root); return ans;
}
\`\`\`
`,
    "Lowest Common Ancestor of a Binary Tree": `# Lowest Common Ancestor of a Binary Tree
## Algorithm
- Recursive DFS post-order
- If node is null or equals p or q: return node
- Get left and right results
- If both non-null: current node is LCA
- Else return whichever is non-null
- **Core Idea:** First node where p and q are found in different subtrees (or one is the node itself) is LCA.
- **Time:** O(n) | **Space:** O(h)

## Solutions

### Java
\`\`\`java
TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root==null||root==p||root==q) return root;
    TreeNode left=lowestCommonAncestor(root.left,p,q);
    TreeNode right=lowestCommonAncestor(root.right,p,q);
    if (left!=null&&right!=null) return root;
    return left!=null?left:right;
}
\`\`\`

### C++
\`\`\`cpp
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root||root==p||root==q) return root;
    auto left=lowestCommonAncestor(root->left,p,q);
    auto right=lowestCommonAncestor(root->right,p,q);
    if (left&&right) return root;
    return left?left:right;
}
\`\`\`
`,
    "Recover Binary Search Tree": `# Recover Binary Search Tree
## Algorithm
- Morris inorder traversal (O(1) space) or recursive inorder
- Find the two swapped nodes: first anomaly where prev > curr, second when found again
- Swap the values of the two misplaced nodes
- **Core Idea:** In BST, inorder is sorted. Two swapped nodes create at most 2 inversions.
- **Time:** O(n) | **Space:** O(h)

## Solutions

### Java
\`\`\`java
TreeNode first, second, prev;
public void recoverTree(TreeNode root) {
    first=second=prev=null;
    inorder(root);
    int t=first.val; first.val=second.val; second.val=t;
}
void inorder(TreeNode node){
    if(node==null)return;
    inorder(node.left);
    if(prev!=null&&prev.val>node.val){
        if(first==null)first=prev;
        second=node;
    }
    prev=node;
    inorder(node.right);
}
\`\`\`

### C++
\`\`\`cpp
void recoverTree(TreeNode* root) {
    TreeNode* first=nullptr,*second=nullptr,*prev=nullptr;
    function<void(TreeNode*)> inorder=[&](TreeNode* node){
        if(!node)return;
        inorder(node->left);
        if(prev&&prev->val>node->val){if(!first)first=prev;second=node;}
        prev=node;
        inorder(node->right);
    };
    inorder(root); swap(first->val,second->val);
}
\`\`\`
`,
    "Subtree of Another Tree": `# Subtree of Another Tree
## Algorithm
- For each node in root: check if subtree rooted there equals subRoot
- isSameTree: recursive check of both trees
- **Core Idea:** Check every node as potential subtree root.
- **Time:** O(m×n) | **Space:** O(h)

## Solutions

### Java
\`\`\`java
boolean isSubtree(TreeNode root, TreeNode subRoot) {
    if (root==null) return false;
    if (isSame(root,subRoot)) return true;
    return isSubtree(root.left,subRoot)||isSubtree(root.right,subRoot);
}
boolean isSame(TreeNode s, TreeNode t){
    if(s==null&&t==null)return true;
    if(s==null||t==null)return false;
    return s.val==t.val&&isSame(s.left,t.left)&&isSame(s.right,t.right);
}
\`\`\`

### C++
\`\`\`cpp
bool isSubtree(TreeNode* root, TreeNode* sub) {
    if (!root) return false;
    if (isSame(root,sub)) return true;
    return isSubtree(root->left,sub)||isSubtree(root->right,sub);
}
bool isSame(TreeNode* s,TreeNode* t){
    if(!s&&!t)return true; if(!s||!t)return false;
    return s->val==t->val&&isSame(s->left,t->left)&&isSame(s->right,t->right);
}
\`\`\`
`,
    "Construct Binary Tree from Preorder and Inorder Traversal": `# Construct Binary Tree from Preorder and Inorder Traversal
## Algorithm
- Preorder[0] is always the root
- Find root in inorder → splits into left and right subtrees
- Recurse: left subtree has (inorder_left.size) elements in preorder
- Use hashmap for O(1) inorder lookup
- **Core Idea:** Root divides inorder into left/right; preorder slice sizes match.
- **Time:** O(n) | **Space:** O(n)

## Solutions

### Java
\`\`\`java
TreeNode buildTree(int[] pre, int[] in) {
    Map<Integer,Integer> map=new HashMap<>();
    for(int i=0;i<in.length;i++)map.put(in[i],i);
    return build(pre,0,pre.length-1,0,in.length-1,map);
}
TreeNode build(int[] pre,int pl,int pr,int il,int ir,Map<Integer,Integer> map){
    if(pl>pr)return null;
    TreeNode root=new TreeNode(pre[pl]);
    int idx=map.get(pre[pl]), leftSize=idx-il;
    root.left=build(pre,pl+1,pl+leftSize,il,idx-1,map);
    root.right=build(pre,pl+leftSize+1,pr,idx+1,ir,map);
    return root;
}
\`\`\`

### C++
\`\`\`cpp
TreeNode* buildTree(vector<int>& pre, vector<int>& in) {
    unordered_map<int,int> mp;
    for(int i=0;i<in.size();i++)mp[in[i]]=i;
    function<TreeNode*(int,int,int,int)> build=[&](int pl,int pr,int il,int ir)->TreeNode*{
        if(pl>pr)return nullptr;
        TreeNode* root=new TreeNode(pre[pl]);
        int idx=mp[pre[pl]],ls=idx-il;
        root->left=build(pl+1,pl+ls,il,idx-1);
        root->right=build(pl+ls+1,pr,idx+1,ir);
        return root;
    };
    return build(0,pre.size()-1,0,in.size()-1);
}
\`\`\`
`,
    "Vertical Order Traversal of a Binary Tree": `# Vertical Order Traversal of a Binary Tree
## Algorithm
- DFS assigning (row, col) to each node; col increases right, decreases left
- Group nodes by col → sort by row, then by value
- Output groups from min col to max col
- **Core Idea:** Coordinate-based traversal: sort by (col, row, val) then group by col.
- **Time:** O(n log n) | **Space:** O(n)

## Solutions

### Java
\`\`\`java
List<List<Integer>> verticalTraversal(TreeNode root) {
    List<int[]> nodes=new ArrayList<>(); // {col, row, val}
    dfs(root,0,0,nodes);
    nodes.sort((a,b)->a[0]!=b[0]?a[0]-b[0]:a[1]!=b[1]?a[1]-b[1]:a[2]-b[2]);
    List<List<Integer>> res=new ArrayList<>();
    int prev=Integer.MIN_VALUE;
    for(int[] n:nodes){
        if(n[0]!=prev){res.add(new ArrayList<>());prev=n[0];}
        res.get(res.size()-1).add(n[2]);
    }
    return res;
}
void dfs(TreeNode node,int row,int col,List<int[]> nodes){
    if(node==null)return;
    nodes.add(new int[]{col,row,node.val});
    dfs(node.left,row+1,col-1,nodes);
    dfs(node.right,row+1,col+1,nodes);
}
\`\`\`

### C++
\`\`\`cpp
vector<vector<int>> verticalTraversal(TreeNode* root) {
    vector<tuple<int,int,int>> nodes; // col,row,val
    function<void(TreeNode*,int,int)> dfs=[&](TreeNode* node,int row,int col){
        if(!node)return;
        nodes.push_back({col,row,node->val});
        dfs(node->left,row+1,col-1); dfs(node->right,row+1,col+1);
    };
    dfs(root,0,0); sort(nodes.begin(),nodes.end());
    vector<vector<int>> res; int prev=INT_MIN;
    for(auto&[col,row,val]:nodes){
        if(col!=prev){res.push_back({});prev=col;}
        res.back().push_back(val);
    }
    return res;
}
\`\`\`
`,
    "Fibonacci Number": `# Fibonacci Number
## Algorithm
- Iterative with two variables (O(1) space)
- prev=0, curr=1; iterate n times updating both
- **Core Idea:** F(n) = F(n-1) + F(n-2). Iterative avoids O(n) stack.
- **Time:** O(n) | **Space:** O(1)

## Solutions

### Java
\`\`\`java
int fib(int n) {
    if (n<=1) return n;
    int a=0, b=1;
    for (int i=2;i<=n;i++) { int c=a+b; a=b; b=c; }
    return b;
}
\`\`\`

### C++
\`\`\`cpp
int fib(int n) {
    if(n<=1)return n;
    int a=0,b=1;
    for(int i=2;i<=n;i++){int c=a+b;a=b;b=c;}
    return b;
}
\`\`\`
`,
    "Subsets": `# Subsets
## Algorithm
- Backtracking: for each position, decide include or exclude
- Or iterative: start with {[]}, for each element add it to all existing subsets
- **Core Idea:** Iterative: each new element doubles the number of subsets.
- **Time:** O(2^n) | **Space:** O(2^n)

## Solutions

### Java
\`\`\`java
List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> res=new ArrayList<>();
    res.add(new ArrayList<>());
    for (int x : nums) {
        int size=res.size();
        for (int i=0;i<size;i++) {
            List<Integer> sub=new ArrayList<>(res.get(i));
            sub.add(x); res.add(sub);
        }
    }
    return res;
}
\`\`\`

### C++
\`\`\`cpp
vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> res={{}};
    for (int x : nums) {
        int sz=res.size();
        for(int i=0;i<sz;i++){auto sub=res[i];sub.push_back(x);res.push_back(sub);}
    }
    return res;
}
\`\`\`
`,
    "N-Queens": `# N-Queens
## Algorithm
- Backtracking row by row
- Track attacked cols, diagonals (col, row-col, row+col) as sets
- For each row: try each column; if safe, place queen, recurse, backtrack
- When row==n: record board
- **Core Idea:** Place one queen per row; prune via column and diagonal conflict sets.
- **Time:** O(n!) | **Space:** O(n²)

## Solutions

### Java
\`\`\`java
List<List<String>> solveNQueens(int n) {
    List<List<String>> res=new ArrayList<>();
    char[][] board=new char[n][n];
    for(char[] row:board) Arrays.fill(row,'.');
    Set<Integer> cols=new HashSet<>(),d1=new HashSet<>(),d2=new HashSet<>();
    backtrack(0,board,cols,d1,d2,res);
    return res;
}
void backtrack(int row,char[][] board,Set<Integer> cols,Set<Integer> d1,Set<Integer> d2,List<List<String>> res){
    int n=board.length;
    if(row==n){List<String> sol=new ArrayList<>();for(char[] r:board)sol.add(new String(r));res.add(sol);return;}
    for(int col=0;col<n;col++){
        if(cols.contains(col)||d1.contains(row-col)||d2.contains(row+col))continue;
        board[row][col]='Q';cols.add(col);d1.add(row-col);d2.add(row+col);
        backtrack(row+1,board,cols,d1,d2,res);
        board[row][col]='.';cols.remove(col);d1.remove(row-col);d2.remove(row+col);
    }
}
\`\`\`

### C++
\`\`\`cpp
vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> res; vector<string> board(n,string(n,'.'));
    set<int> cols,d1,d2;
    function<void(int)> bt=[&](int row){
        if(row==n){res.push_back(board);return;}
        for(int col=0;col<n;col++){
            if(cols.count(col)||d1.count(row-col)||d2.count(row+col))continue;
            board[row][col]='Q';cols.insert(col);d1.insert(row-col);d2.insert(row+col);
            bt(row+1);
            board[row][col]='.';cols.erase(col);d1.erase(row-col);d2.erase(row+col);
        }
    };
    bt(0); return res;
}
\`\`\`
`,
    "Power of Two": `# Power of Two
## Algorithm
- n > 0 AND (n & (n-1)) == 0
- Powers of 2 have exactly one set bit; n-1 flips all lower bits
- **Core Idea:** Bit trick: power of 2 has one bit. n & (n-1) clears lowest set bit.
- **Time:** O(1) | **Space:** O(1)

## Solutions

### Java
\`\`\`java
boolean isPowerOfTwo(int n) { return n > 0 && (n & (n-1)) == 0; }
\`\`\`

### C++
\`\`\`cpp
bool isPowerOfTwo(int n) { return n > 0 && (n & (n-1)) == 0; }
\`\`\`
`,
    "Combination Sum": `# Combination Sum
## Algorithm
- Backtracking with sorted candidates
- For each candidate: include it (can reuse), recurse with same index
- If sum == target: add to result; if sum > target: stop
- **Core Idea:** Reusable candidates → pass same index. Sort to prune early.
- **Time:** O(2^(t/m)) | **Space:** O(t/m)

## Solutions

### Java
\`\`\`java
List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> res=new ArrayList<>();
    Arrays.sort(candidates);
    backtrack(candidates,target,0,new ArrayList<>(),res);
    return res;
}
void backtrack(int[] cands,int rem,int start,List<Integer> curr,List<List<Integer>> res){
    if(rem==0){res.add(new ArrayList<>(curr));return;}
    for(int i=start;i<cands.length&&cands[i]<=rem;i++){
        curr.add(cands[i]);
        backtrack(cands,rem-cands[i],i,curr,res);
        curr.remove(curr.size()-1);
    }
}
\`\`\`

### C++
\`\`\`cpp
vector<vector<int>> combinationSum(vector<int>& cands, int target) {
    sort(cands.begin(),cands.end()); vector<vector<int>> res;
    function<void(int,int,vector<int>&)> bt=[&](int rem,int start,vector<int>& curr){
        if(rem==0){res.push_back(curr);return;}
        for(int i=start;i<cands.size()&&cands[i]<=rem;i++){
            curr.push_back(cands[i]); bt(rem-cands[i],i,curr); curr.pop_back();
        }
    };
    vector<int> curr; bt(target,0,curr); return res;
}
\`\`\`
`,
    "Regular Expression Matching": `# Regular Expression Matching

## Algorithm:
1. Use DP table: dp[i][j] = true if s[0..i-1] matches p[0..j-1].
2. Base case: dp[0][0] = true (empty string matches empty pattern).
3. Handle patterns with '*' (can match zero or more of previous char).
4. For each char: if match or pattern has '*', use result from previous states.

**Idea:**
DP tracks all possible matching states. '*' allows matching 0 or more occurrences.

- Time: O(m*n)
- Space: O(m*n)

---

## Code in Java:
\`\`\`java
class Solution {
    public boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m+1][n+1];
        dp[0][0] = true;
        
        for (int j = 2; j <= n; j++) {
            if (p.charAt(j-1) == '*') dp[0][j] = dp[0][j-2];
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j-1) == '*') {
                    dp[i][j] = dp[i][j-2] || (dp[i-1][j] && (s.charAt(i-1) == p.charAt(j-2) || p.charAt(j-2) == '.'));
                } else {
                    dp[i][j] = dp[i-1][j-1] && (s.charAt(i-1) == p.charAt(j-1) || p.charAt(j-1) == '.');
                }
            }
        }
        return dp[m][n];
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length(), n = p.length();
        vector<vector<bool>> dp(m+1, vector<bool>(n+1, false));
        dp[0][0] = true;
        
        for (int j = 2; j <= n; j++) {
            if (p[j-1] == '*') dp[0][j] = dp[0][j-2];
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p[j-1] == '*') {
                    dp[i][j] = dp[i][j-2] || (dp[i-1][j] && (s[i-1] == p[j-2] || p[j-2] == '.'));
                } else {
                    dp[i][j] = dp[i-1][j-1] && (s[i-1] == p[j-1] || p[j-1] == '.');
                }
            }
        }
        return dp[m][n];
    }
};
\`\`\`
`,
    "Climbing Stairs": `# Climbing Stairs

## Algorithm:
1. Base cases: 1 stair = 1 way, 2 stairs = 2 ways.
2. For each step n: ways[n] = ways[n-1] + ways[n-2].
3. Optimize to O(1) space by tracking only last two values.

**Idea:**
Each step can be reached from 1 or 2 steps below, so sum both possibilities.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public int climbStairs(int n) {
        if (n <= 2) return n;
        int prev = 1, curr = 2;
        for (int i = 3; i <= n; i++) {
            int temp = prev + curr;
            prev = curr;
            curr = temp;
        }
        return curr;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) return n;
        int prev = 1, curr = 2;
        for (int i = 3; i <= n; i++) {
            int temp = prev + curr;
            prev = curr;
            curr = temp;
        }
        return curr;
    }
};
\`\`\`
`,
    "Generate Parentheses": `# Generate Parentheses

## Algorithm:
1. Use backtracking with counters for open and close parentheses.
2. When open < n: add '(' and recurse.
3. When close < open: add ')' and recurse.
4. When open == close == n: add to result.

**Idea:**
Ensure at any point open >= close, guaranteeing valid parentheses.

- Time: O(4^n / √n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backtrack(result, "", 0, 0, n);
        return result;
    }
    
    private void backtrack(List<String> result, String current, int open, int close, int n) {
        if (current.length() == n * 2) {
            result.add(current);
            return;
        }
        if (open < n) backtrack(result, current + "(", open + 1, close, n);
        if (close < open) backtrack(result, current + ")", open, close + 1, n);
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
private:
    void backtrack(vector<string>& result, string current, int open, int close, int n) {
        if ((int)current.length() == n * 2) {
            result.push_back(current);
            return;
        }
        if (open < n) backtrack(result, current + "(", open + 1, close, n);
        if (close < open) backtrack(result, current + ")", open, close + 1, n);
    }
    
public:
    vector<string> generateParenthesis(int n) {
        vector<string> result;
        backtrack(result, "", 0, 0, n);
        return result;
    }
};
\`\`\`
`,
    "Sudoku Solver": `# Sudoku Solver

## Algorithm:
1. Use backtracking to fill empty cells.
2. For each empty cell, try digits 1-9.
3. Check if digit is valid (no conflict in row, column, 3x3 box).
4. If valid, place digit and recurse.
5. If no solution, backtrack and try next digit.

**Idea:**
Constraint satisfaction via backtracking with validity checks.

- Time: O(9^(n*n))
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public void solveSudoku(char[][] board) {
        backtrack(board);
    }
    
    private boolean backtrack(char[][] board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] != '.') continue;
                for (char c = '1'; c <= '9'; c++) {
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c;
                        if (backtrack(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
        return true;
    }
    
    private boolean isValid(char[][] board, int row, int col, char c) {
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == c || board[i][col] == c) return false;
            if (board[3*(row/3) + i/3][3*(col/3) + i%3] == c) return false;
        }
        return true;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
private:
    bool isValid(vector<vector<char>>& board, int row, int col, char c) {
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == c || board[i][col] == c) return false;
            if (board[3*(row/3) + i/3][3*(col/3) + i%3] == c) return false;
        }
        return true;
    }
    
    bool backtrack(vector<vector<char>>& board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] != '.') continue;
                for (char c = '1'; c <= '9'; c++) {
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c;
                        if (backtrack(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
        return true;
    }
    
public:
    void solveSudoku(vector<vector<char>>& board) {
        backtrack(board);
    }
};
\`\`\`
`,
    "Pascal's Triangle": `# Pascal's Triangle

## Algorithm:
1. Build triangle row by row.
2. First row: [1]. Each subsequent row starts and ends with 1.
3. Middle elements: sum of two elements from previous row.

**Idea:**
Each element is sum of two elements above it.

- Time: O(n²)
- Space: O(n²)

---

## Code in Java:
\`\`\`java
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < numRows; i++) {
            List<Integer> row = new ArrayList<>();
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    row.add(1);
                } else {
                    row.add(result.get(i-1).get(j-1) + result.get(i-1).get(j));
                }
            }
            result.add(row);
        }
        return result;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> result;
        for (int i = 0; i < numRows; i++) {
            vector<int> row(i + 1, 1);
            for (int j = 1; j < i; j++) {
                row[j] = result[i-1][j-1] + result[i-1][j];
            }
            result.push_back(row);
        }
        return result;
    }
};
\`\`\`
`,
    "Longest Increasing Subsequence": `# Longest Increasing Subsequence

## Algorithm:
1. Use binary search + DP approach.
2. Maintain array of smallest tail values for each LIS length.
3. For each number: find position using binary search and update tail.
4. Array length is the LIS length.

**Idea:**
Binary search on sorted tails array to find where each number fits.

- Time: O(n log n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums.length == 0) return 0;
        int[] tails = new int[nums.length];
        int size = 0;
        
        for (int num : nums) {
            int left = 0, right = size;
            while (left < right) {
                int mid = (left + right) / 2;
                if (tails[mid] < num) left = mid + 1;
                else right = mid;
            }
            tails[left] = num;
            if (left == size) size++;
        }
        return size;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> tails;
        for (int num : nums) {
            auto it = lower_bound(tails.begin(), tails.end(), num);
            if (it == tails.end()) tails.push_back(num);
            else *it = num;
        }
        return tails.size();
    }
};
\`\`\`
`,
    "Burst Balloons": `# Burst Balloons

## Algorithm:
1. Add 1s at boundaries (pad with 1s).
2. Use interval DP: dp[l][r] = max coins burst for balloons between l and r.
3. Assume last balloon k to burst in range [l, r].
4. When k bursts, left and right are still intact for final multiplication.

**Idea:**
Think backwards: consider which balloon bursts last in each range.

- Time: O(n³)
- Space: O(n²)

---

## Code in Java:
\`\`\`java
class Solution {
    public int maxCoins(int[] nums) {
        int n = nums.length;
        int[] balloons = new int[n + 2];
        balloons[0] = 1;
        balloons[n + 1] = 1;
        for (int i = 0; i < n; i++) balloons[i + 1] = nums[i];
        
        int[][] dp = new int[n + 2][n + 2];
        for (int len = 3; len <= n + 2; len++) {
            for (int left = 0; left + len - 1 < n + 2; left++) {
                int right = left + len - 1;
                for (int k = left + 1; k < right; k++) {
                    dp[left][right] = Math.max(dp[left][right],
                        dp[left][k] + balloons[left] * balloons[k] * balloons[right] + dp[k][right]);
                }
            }
        }
        return dp[0][n + 1];
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int maxCoins(vector<int>& nums) {
        int n = nums.size();
        vector<int> balloons(n + 2);
        balloons[0] = 1;
        balloons[n + 1] = 1;
        for (int i = 0; i < n; i++) balloons[i + 1] = nums[i];
        
        vector<vector<int>> dp(n + 2, vector<int>(n + 2, 0));
        for (int len = 3; len <= n + 2; len++) {
            for (int left = 0; left + len - 1 < n + 2; left++) {
                int right = left + len - 1;
                for (int k = left + 1; k < right; k++) {
                    dp[left][right] = max(dp[left][right],
                        dp[left][k] + balloons[left] * balloons[k] * balloons[right] + dp[k][right]);
                }
            }
        }
        return dp[0][n + 1];
    }
};
\`\`\`
`,
    "Min Cost Climbing Stairs": `# Min Cost Climbing Stairs

## Algorithm:
1. dp[i] = minimum cost to reach step i.
2. Step i can be reached from step i-1 or i-2.
3. dp[i] = cost[i] + min(dp[i-1], dp[i-2]).
4. Start from step 0 or 1 (no cost to reach).

**Idea:**
Track minimum cost at each step using choices from previous steps.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public int minimumCost(int[] cost) {
        int n = cost.length;
        int prev1 = cost[0], prev2 = cost[1];
        for (int i = 2; i < n; i++) {
            int current = cost[i] + Math.min(prev1, prev2);
            prev1 = prev2;
            prev2 = current;
        }
        return Math.min(prev1, prev2);
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int minimumCost(vector<int>& cost) {
        int n = cost.size();
        int prev1 = cost[0], prev2 = cost[1];
        for (int i = 2; i < n; i++) {
            int current = cost[i] + min(prev1, prev2);
            prev1 = prev2;
            prev2 = current;
        }
        return min(prev1, prev2);
    }
};
\`\`\`
`,
    "Partition Equal Subset Sum": `# Partition Equal Subset Sum

## Algorithm:
1. If sum is odd, return false.
2. Use DP: dp[i] = true if subset with sum i is possible.
3. For each number, update dp from right to avoid reusing same element.
4. Return dp[sum/2].

**Idea:**
0/1 Knapsack: can we pick a subset with sum = total/2?

- Time: O(n * sum/2)
- Space: O(sum/2)

---

## Code in Java:
\`\`\`java
class Solution {
    public boolean canPartition(int[] nums) {
        int sum = 0;
        for (int num : nums) sum += num;
        if (sum % 2 != 0) return false;
        
        int target = sum / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        
        for (int num : nums) {
            for (int i = target; i >= num; i--) {
                dp[i] = dp[i] || dp[i - num];
            }
        }
        return dp[target];
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int sum = 0;
        for (int num : nums) sum += num;
        if (sum % 2) return false;
        
        int target = sum / 2;
        vector<bool> dp(target + 1, false);
        dp[0] = true;
        
        for (int num : nums) {
            for (int i = target; i >= num; i--) {
                dp[i] = dp[i] || dp[i - num];
            }
        }
        return dp[target];
    }
};
\`\`\`
`,
    "Maximum Profit in Job Scheduling": `# Maximum Profit in Job Scheduling

## Algorithm:
1. Sort jobs by end time.
2. Use binary search to find latest compatible job for each job.
3. dp[i] = max(skip job i, take job i + profit from compatible).
4. Use DP with binary search for efficiency.

**Idea:**
For each job, find latest previous job that doesn't conflict using binary search.

- Time: O(n log n)
- Space: O(n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
        int n = startTime.length;
        Job[] jobs = new Job[n];
        for (int i = 0; i < n; i++) {
            jobs[i] = new Job(startTime[i], endTime[i], profit[i]);
        }
        Arrays.sort(jobs, (a, b) -> a.end - b.end);
        
        int[] dp = new int[n];
        dp[0] = jobs[0].profit;
        
        for (int i = 1; i < n; i++) {
            int profitWithJob = jobs[i].profit;
            int prevIdx = findLatest(jobs, i);
            if (prevIdx != -1) profitWithJob += dp[prevIdx];
            dp[i] = Math.max(dp[i - 1], profitWithJob);
        }
        return dp[n - 1];
    }
    
    private int findLatest(Job[] jobs, int i) {
        int left = 0, right = i - 1;
        int result = -1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (jobs[mid].end <= jobs[i].start) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
    
    class Job {
        int start, end, profit;
        Job(int s, int e, int p) { start = s; end = e; profit = p; }
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
private:
    struct Job {
        int start, end, profit;
    };
    
    int findLatest(vector<Job>& jobs, int i) {
        int left = 0, right = i - 1, result = -1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (jobs[mid].end <= jobs[i].start) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
    
public:
    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {
        int n = startTime.size();
        vector<Job> jobs(n);
        for (int i = 0; i < n; i++) {
            jobs[i] = {startTime[i], endTime[i], profit[i]};
        }
        sort(jobs.begin(), jobs.end(), [](const Job& a, const Job& b) {
            return a.end < b.end;
        });
        
        vector<int> dp(n);
        dp[0] = jobs[0].profit;
        
        for (int i = 1; i < n; i++) {
            int profitWithJob = jobs[i].profit;
            int prevIdx = findLatest(jobs, i);
            if (prevIdx != -1) profitWithJob += dp[prevIdx];
            dp[i] = max(dp[i - 1], profitWithJob);
        }
        return dp[n - 1];
    }
};
\`\`\`
`,
    "House Robber": `# House Robber

## Algorithm:
1. dp[i] = max profit robbing houses 0 to i.
2. For each house: either rob it (profit + dp[i-2]) or skip it (dp[i-1]).
3. dp[i] = max(rob[i] + dp[i-2], dp[i-1]).
4. Optimize to O(1) space with two variables.

**Idea:**
Can't rob adjacent houses, so track best option at each step.

- Time: O(n)
- Space: O(1)

---

## Code in Java:
\`\`\`java
class Solution {
    public int rob(int[] nums) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        
        int prev1 = nums[0], prev2 = 0;
        for (int i = 1; i < nums.length; i++) {
            int current = Math.max(nums[i] + prev2, prev1);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int rob(vector<int>& nums) {
        if (nums.empty()) return 0;
        if (nums.size() == 1) return nums[0];
        
        int prev1 = nums[0], prev2 = 0;
        for (int i = 1; i < nums.size(); i++) {
            int current = max(nums[i] + prev2, prev1);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
};
\`\`\`
`,
    "Longest Common Subsequence": `# Longest Common Subsequence

## Algorithm:
1. Build 2D DP table: dp[i][j] = LCS length of s1[0..i-1] and s2[0..j-1].
2. If characters match: dp[i][j] = dp[i-1][j-1] + 1.
3. Otherwise: dp[i][j] = max(dp[i-1][j], dp[i][j-1]).
4. Return dp[m][n].

**Idea:**
Track matching and non-matching character scenarios with DP.

- Time: O(m*n)
- Space: O(m*n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int m = text1.length(), n = text2.length();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1[i - 1] == text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }
};
\`\`\`
`,
    "Distinct Subsequences": `# Distinct Subsequences

## Algorithm:
1. dp[i][j] = number of distinct subsequences of s[0..i-1] using t[0..j-1].
2. Base: dp[i][0] = 1 (empty subsequence).
3. If s[i-1] == t[j-1]: dp[i][j] = dp[i-1][j-1] + dp[i-1][j].
4. Else: dp[i][j] = dp[i-1][j].

**Idea:**
Count ways to form target string as subsequence using DP.

- Time: O(m*n)
- Space: O(m*n)

---

## Code in Java:
\`\`\`java
class Solution {
    public int numDistinct(String s, String t) {
        int m = s.length(), n = t.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 0; i <= m; i++) dp[i][0] = 1;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                dp[i][j] = dp[i - 1][j];
                if (s.charAt(i - 1) == t.charAt(j - 1)) {
                    dp[i][j] += dp[i - 1][j - 1];
                }
            }
        }
        return dp[m][n];
    }
}
\`\`\`

## Code in C++:
\`\`\`cpp
class Solution {
public:
    int numDistinct(string s, string t) {
        int m = s.length(), n = t.length();
        vector<vector<long long>> dp(m + 1, vector<long long>(n + 1, 0));
        
        for (int i = 0; i <= m; i++) dp[i][0] = 1;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                dp[i][j] = dp[i - 1][j];
                if (s[i - 1] == t[j - 1]) {
                    dp[i][j] += dp[i - 1][j - 1];
                }
            }
        }
        return dp[m][n];
    }
};
\`\`\`
`
  };

  return specificSolutions[title] || `# ${title}\n\n(Solution content coming soon)`;
}
export { getSolution };