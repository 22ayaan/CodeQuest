export const javascriptDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

// Time: O(log n)
// const binarySearch = (arr, target) => {
//  return binarySearchHelper(arr, target, 0, arr.length - 1);
// };

// const binarySearchHelper = (arr, target, start, end) => {
//  if (start > end) {
//    return false;
//  }
//  let mid = Math.floor((start + end) / 2);
//  if (arr[mid] === target) {
//    return mid;
//  }
//  if (arr[mid] < target) {
//    return binarySearchHelper(arr, target, mid + 1, end);
//  }
//  if (arr[mid] > target) {
//    return binarySearchHelper(arr, target, start, mid - 1);
//  }
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const target = 5;
// console.log(binarySearch(arr, target));
console.log("helloworld");
`;

export const questions = [
  {
    id: 1,
    title: "Two Sum",
    diff: "Easy",
    style: "!text-teal-400 font-semibold",
    desc: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  },
  {
    id: 2,
    title: "Longest Substring Without Repeating Characters",
    diff: "Medium",
    style: "!text-green-400 font-semibold",
    desc: "Given a string s, find the length of the longest substring without repeating characters.",
  },
  {
    id: 3,
    title: "Merge Intervals",
    diff: "Medium",
    style: "!text-green-400 font-semibold",
    desc: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
  },
  {
    id: 4,
    title: "Find Median from Data Stream",
    diff: "Hard",
    style: "!text-red-500 font-semibold",
    desc: "The MedianFinder class has two methods: addNum(int num) adds the integer num from the data stream and findMedian() returns the median of all elements so far.",
  },
  {
    id: 5,
    title: "Search in Rotated Sorted Array",
    diff: "Medium",
    style: "!text-green-400 font-semibold",
    desc: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is rotated at an unknown pivot index. Given the rotated array nums, search for a given target.",
  },
  {
    id: 6,
    title: "Reverse Nodes in k-Group",
    diff: "Hard",
    style: "!text-red-500 font-semibold",
    desc: "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list. k is a positive integer less than or equal to the length of the linked list.",
  },
];