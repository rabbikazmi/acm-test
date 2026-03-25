import { getSolution } from './solutions';

export const EVENT_START_DATE = "2026-03-22T00:00:00Z";

function generateMarkdown(item) {
  if (item.markdown) return item.markdown;
  return getSolution(item.title);
}

function generateDay(day, beginner, intermediate, advanced) {
  return [
    {
      id: `sp26-b-${day}`, eventId: "spring-2026", phase: "beginner", day,
      title: beginner.title, difficulty: "Easy", problemLink: beginner.link,
      solutionLink: "#",
      solution: generateMarkdown(beginner)
    },
    {
      id: `sp26-i-${day}`, eventId: "spring-2026", phase: "intermediate", day,
      title: intermediate.title, difficulty: "Medium", problemLink: intermediate.link,
      solutionLink: "#",
      solution: generateMarkdown(intermediate)
    },
    {
      id: `sp26-a-${day}`, eventId: "spring-2026", phase: "advanced", day,
      title: advanced.title, difficulty: "Hard", problemLink: advanced.link,
      solutionLink: "#",
      solution: generateMarkdown(advanced)
    }
  ];
}

function makeLink(title) {
  const cleanTitle = title.replace(/^#\d+\s+/, '');
  const slug = cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `https://leetcode.com/problems/${slug}/`;
}

export const potdData = [
  ...generateDay(1, 
    { title: "Two Sum", link: makeLink("Two Sum") },
    { title: "Product of Array Except Self", link: makeLink("Product of Array Except Self") },
    { title: "Trapping Rain Water", link: makeLink("Trapping Rain Water") }
  ),
  ...generateDay(2, 
    { title: "Remove Duplicates from Sorted Array", link: makeLink("Remove Duplicates from Sorted Array") },
    { title: "Subarray Sum Equals K", link: makeLink("Subarray Sum Equals K") },
    { title: "First Missing Positive", link: makeLink("First Missing Positive") }
  ),
  ...generateDay(3, 
    { title: "Best Time to Buy and Sell Stock", link: makeLink("Best Time to Buy and Sell Stock") },
    { title: "Sort Colors", link: makeLink("Sort Colors") },
    { title: "Largest Rectangle in Histogram", link: makeLink("Largest Rectangle in Histogram") }
  ),
  ...generateDay(4, 
    { title: "Missing Number", link: makeLink("Missing Number") },
    { title: "Two Sum II - Input Array Is Sorted", link: makeLink("Two Sum II - Input Array Is Sorted") },
    { title: "Count of Smaller Numbers After Self", link: makeLink("Count of Smaller Numbers After Self") }
  ),
  ...generateDay(5, 
    { title: "Move Zeroes", link: makeLink("Move Zeroes") },
    { title: "3Sum", link: makeLink("3Sum") },
    { title: "Sliding Window Maximum", link: makeLink("Sliding Window Maximum") }
  ),
  ...generateDay(6, 
    { title: "Check if N and Its Double Exist", link: makeLink("Check if N and Its Double Exist") },
    { title: "Continuous Subarray Sum", link: makeLink("Continuous Subarray Sum") },
    { title: "Candy", link: makeLink("Candy") }
  ),
  ...generateDay(7, 
    { title: "Rotate Array", link: makeLink("Rotate Array") },
    { title: "Increasing Triplet Subsequence", link: makeLink("Increasing Triplet Subsequence") },
    { title: "Maximum Score of a Good Subarray", link: makeLink("Maximum Score of a Good Subarray") }
  ),
  ...generateDay(8, 
    { title: "Reverse Linked List", link: makeLink("Reverse Linked List") },
    { title: "Remove Nth Node From End of List", link: makeLink("Remove Nth Node From End of List") },
    { title: "Reverse Nodes in k-Group", link: makeLink("Reverse Nodes in k-Group") }
  ),
  ...generateDay(9, 
    { title: "Linked List Cycle", link: makeLink("Linked List Cycle") },
    { title: "Linked List Cycle II", link: makeLink("Linked List Cycle II") },
    { title: "LRU Cache", link: makeLink("LRU Cache") }
  ),
  ...generateDay(10, 
    { title: "Middle of the Linked List", link: makeLink("Middle of the Linked List") },
    { title: "Add Two Numbers", link: makeLink("Add Two Numbers") },
    { title: "Merge K Sorted Lists", link: makeLink("Merge K Sorted Lists") }
  ),
  ...generateDay(11, 
    { title: "Merge Two Sorted Lists", link: makeLink("Merge Two Sorted Lists") },
    { title: "Sort List", link: makeLink("Sort List") },
    { title: "All O'one Data Structure", link: makeLink("All O'one Data Structure") }
  ),
  ...generateDay(12, 
    { title: "Remove Duplicates from Sorted List", link: makeLink("Remove Duplicates from Sorted List") },
    { title: "Rotate List", link: makeLink("Rotate List") },
    { title: "Copy List with Random Pointer", link: makeLink("Copy List with Random Pointer") }
  ),
  ...generateDay(13, 
    { title: "Intersection of Two Linked Lists", link: makeLink("Intersection of Two Linked Lists") },
    { title: "Remove Duplicates from Sorted List II", link: makeLink("Remove Duplicates from Sorted List II") },
    { title: "Search in Rotated Sorted Array", link: makeLink("Search in Rotated Sorted Array") }
  ),
  ...generateDay(14, 
    { title: "Palindrome Linked List", link: makeLink("Palindrome Linked List") },
    { title: "Swap Nodes in Pairs", link: makeLink("Swap Nodes in Pairs") },
    { title: "LFU Cache", link: makeLink("LFU Cache") }
  ),
  ...generateDay(15, 
    { title: "Valid Parentheses", link: makeLink("Valid Parentheses") },
    { title: "Min Stack", link: makeLink("Min Stack") },
    { title: "Maximal Rectangle", link: makeLink("Maximal Rectangle") }
  ),
  ...generateDay(16, 
    { title: "Implement Queue using Stacks", link: makeLink("Implement Queue using Stacks") },
    { title: "Daily Temperatures", link: makeLink("Daily Temperatures") },
    { title: "Trapping Rain Water II", link: makeLink("Trapping Rain Water II") }
  ),
  ...generateDay(17, 
    { title: "Implement Stack using Queues", link: makeLink("Implement Stack using Queues") },
    { title: "Next Greater Element I", link: makeLink("Next Greater Element I") },
    { title: "Remove Duplicate Letters", link: makeLink("Remove Duplicate Letters") }
  ),
  ...generateDay(18, 
    { title: "Remove All Adjacent Duplicates In String", link: makeLink("Remove All Adjacent Duplicates In String") },
    { title: "Next Greater Element II", link: makeLink("Next Greater Element II") },
    { title: "Minimum Cost Tree From Leaf Values", link: makeLink("Minimum Cost Tree From Leaf Values") }
  ),
  ...generateDay(19, 
    { title: "Backspace String Compare", link: makeLink("Backspace String Compare") },
    { title: "Evaluate Reverse Polish Notation", link: makeLink("Evaluate Reverse Polish Notation") },
    { title: "Parse Lisp Expression", link: makeLink("Parse Lisp Expression") }
  ),
  ...generateDay(20, 
    { title: "Remove Outermost Parentheses", link: makeLink("Remove Outermost Parentheses") },
    { title: "Remove K Digits", link: makeLink("Remove K Digits") },
    { title: "Maximum Frequency Stack", link: makeLink("Maximum Frequency Stack") }
  ),
  ...generateDay(21, 
    { title: "Make The String Great", link: makeLink("Make The String Great") },
    { title: "132 Pattern", link: makeLink("132 Pattern") },
    { title: "Shortest Subarray with Sum at Least K", link: makeLink("Shortest Subarray with Sum at Least K") }
  ),
  ...generateDay(22, 
    { title: "Flood Fill", link: makeLink("Flood Fill") },
    { title: "Number of Islands", link: makeLink("Number of Islands") },
    { title: "Cheapest Flights Within K Stops", link: makeLink("Cheapest Flights Within K Stops") }
  ),
  ...generateDay(23, 
    { title: "Find the Town Judge", link: makeLink("Find the Town Judge") },
    { title: "Course Schedule", link: makeLink("Course Schedule") },
    { title: "Reconstruct Itinerary", link: makeLink("Reconstruct Itinerary") }
  ),
  ...generateDay(24, 
    { title: "Find Center of Star Graph", link: makeLink("Find Center of Star Graph") },
    { title: "Number of Provinces", link: makeLink("Number of Provinces") },
    { title: "Critical Connections in a Network", link: makeLink("Critical Connections in a Network") }
  ),
  ...generateDay(25, 
    { title: "Maximum Depth of Binary Tree", link: makeLink("Maximum Depth of Binary Tree") },
    { title: "Binary Tree Level Order Traversal", link: makeLink("Binary Tree Level Order Traversal") },
    { title: "Binary Tree Maximum Path Sum", link: makeLink("Binary Tree Maximum Path Sum") }
  ),
  ...generateDay(26, 
    { title: "Invert Binary Tree", link: makeLink("Invert Binary Tree") },
    { title: "Kth Smallest Element in a BST", link: makeLink("Kth Smallest Element in a BST") },
    { title: "Serialize and Deserialize Binary Tree", link: makeLink("Serialize and Deserialize Binary Tree") }
  ),
  ...generateDay(27, 
    { title: "Diameter of Binary Tree", link: makeLink("Diameter of Binary Tree") },
    { title: "Lowest Common Ancestor of a Binary Tree", link: makeLink("Lowest Common Ancestor of a Binary Tree") },
    { title: "Recover Binary Search Tree", link: makeLink("Recover Binary Search Tree") }
  ),
  ...generateDay(28, 
    { title: "Subtree of Another Tree", link: makeLink("Subtree of Another Tree") },
    { title: "Construct Binary Tree from Preorder and Inorder Traversal", link: makeLink("Construct Binary Tree from Preorder and Inorder Traversal") },
    { title: "Vertical Order Traversal of a Binary Tree", link: makeLink("Vertical Order Traversal of a Binary Tree") }
  ),
  ...generateDay(29, 
    { title: "Fibonacci Number", link: makeLink("Fibonacci Number") },
    { title: "Subsets", link: makeLink("Subsets") },
    { title: "N-Queens", link: makeLink("N-Queens") }
  ),
  ...generateDay(30, 
    { title: "Power of Two", link: makeLink("Power of Two") },
    { title: "Combination Sum", link: makeLink("Combination Sum") },
    { title: "Regular Expression Matching", link: makeLink("Regular Expression Matching") }
  ),
  ...generateDay(31, 
    { title: "Climbing Stairs", link: makeLink("Climbing Stairs") },
    { title: "Generate Parentheses", link: makeLink("Generate Parentheses") },
    { title: "Sudoku Solver", link: makeLink("Sudoku Solver") }
  ),
  ...generateDay(32, 
    { title: "Pascal's Triangle", link: makeLink("Pascal's Triangle") },
    { title: "Longest Increasing Subsequence", link: makeLink("Longest Increasing Subsequence") },
    { title: "Burst Balloons", link: makeLink("Burst Balloons") }
  ),
  ...generateDay(33, 
    { title: "Min Cost Climbing Stairs", link: makeLink("Min Cost Climbing Stairs") },
    { title: "Partition Equal Subset Sum", link: makeLink("Partition Equal Subset Sum") },
    { title: "Maximum Profit in Job Scheduling", link: makeLink("Maximum Profit in Job Scheduling") }
  ),
  ...generateDay(34, 
    { title: "House Robber", link: makeLink("House Robber") },
    { title: "Longest Common Subsequence", link: makeLink("Longest Common Subsequence") },
    { title: "Distinct Subsequences", link: makeLink("Distinct Subsequences") }
  ),
];
