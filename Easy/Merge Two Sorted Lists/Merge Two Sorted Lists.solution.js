const mergeTwoLists = (list1, list2) => [list1, list2].flat().sort((a, b) => a-b);
console.log(mergeTwoLists([1,2,4], [1,3,4]));
console.log(mergeTwoLists([], [0]));

//so in my knowledge we have 2 array, the arrays can have the same values
//we need to merge both them array or lists and sort them in ascending order