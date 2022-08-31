// Nth Smallest Element (Array Series #4)

// Task
// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// Input >> Output Examples
// nthSmallest({3,1,2} ,2) ==> return (2) 
// Explanation:
// Since the passed number is 2 , Then * the second smallest element in this array/list is 2*

// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// Explanation:
// Since the passed number is 3 , Then * the third smallest element in this array/list is 7*

// nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
// Explanation:
// Since the passed number is 4 , Then * the fourth smallest element in this array/list is 2*

// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
// Explanation:
// Since the passed number is 5 , Then * the fifth smallest element in this array/list is 92*


const nthSmallest = (a, p)=> a.sort((a,b)=> a-b)[p-1]



// Time: 616ms Passed: 45 Failed: 0
// Test Results:
// Basic tests
// Test Passed: Value == 2
// Test Passed: Value == 7
// Test Passed: Value == -1
// Test Passed: Value == -2
// Test Passed: Value == 2
// Completed in 4ms
// Random tests
// Testing for [-9335 ,-7571 ,-4582 ,97 ,7154 ,-74 ,-3 ,6 ,-4685 ,7 ,-4025 ,-7 ,46 ,-6 ,2 ,-9309] and 14
// Testing for [318 ,-6877 ,126 ,-7672 ,-38 ,-3 ,-398 ,8336 ,-2170 ,-1 ,-4288 ,4597 ,-318 ,461 ,-733 ,4077 ,-9957 ,-3844 ,847 ,230 ,2 ,615 ,-885 ,-501 ,4052 ,-3266 ,-736 ,1667 ,-198 ,-293 ,54 ,-3953 ,2 ,-1 ,0 ,4 ,2616 ,-2] and 17
// Testing for [-480 ,-31 ,1942 ,8 ,6824 ,50 ,-596 ,-8964 ,514 ,28 ,-894 ,7515 ,10 ,7530 ,6088 ,-6 ,386 ,8569 ,-796 ,552 ,44 ,-4 ,9 ,-34 ,-294 ,-266 ,-497 ,-28] and 18
// Testing for [75 ,73 ,988 ,84 ,1960 ,-3 ,-9 ,-1 ,285 ,25 ,7 ,377 ,-10 ,40 ,-5119 ,5 ,-50 ,1117 ,-2666 ,-87 ,-42 ,-795 ,7 ,6732 ,-393 ,5598 ,0 ,-97 ,-813 ,9012 ,37 ,2411 ,-1 ,-303 ,5854 ,-7616 ,8971 ,54 ,810 ,2576] and 5
// Testing for [-712 ,6775 ,-1026 ,-18 ,-6454 ,9 ,-5523 ,1] and 6
// Testing for [8344 ,-891 ,-296 ,-1915 ,-6 ,614 ,7365 ,-524 ,-5898 ,-1082 ,2821 ,-4066 ,-2 ,-7989 ,1285 ,-768 ,26] and 10
// Testing for [-2005 ,-9029 ,6691 ,-187 ,6594 ,67] and 2
// Testing for [-814 ,775 ,3 ,-59 ,-8630 ,6 ,883 ,-4888 ,-7437 ,-425 ,5558 ,-96 ,-6 ,5066 ,89 ,0 ,-1 ,6 ,-3889 ,-89 ,6484 ,16 ,6515 ,8 ,3898 ,37 ,678 ,10 ,-7 ,-4936 ,2 ,51] and 9
// Testing for [-7472 ,-19 ,-5085 ,5 ,-856 ,5163] and 6
// Testing for [2273 ,-7 ,-500 ,-93 ,-5 ,-13 ,0 ,644 ,-426 ,65 ,-523 ,-4312 ,76 ,-63 ,149 ,-1102 ,-967 ,-82 ,-913 ,4610 ,6079 ,3715 ,1 ,-805 ,-75 ,-1] and 23
// Testing for [-7421 ,-3384 ,107 ,-7926 ,966 ,210 ,148 ,-57 ,-677 ,-258 ,-4173 ,-253 ,-633 ,-10 ,8] and 2
// Testing for [89 ,7546 ,-1871 ,162 ,5 ,-454 ,-9366 ,5267 ,-17 ,-166 ,-59 ,0 ,1 ,-6 ,9587 ,-76 ,-8500] and 3
// Testing for [-10 ,7 ,424 ,2195 ,38 ,-14 ,5003 ,1261 ,4673 ,353 ,-3729 ,-772 ,-8795 ,1027 ,90 ,483 ,8248 ,804] and 11
// Testing for [6 ,-376 ,-2718 ,-403 ,4181 ,38 ,-893 ,9496 ,0 ,1 ,4 ,-5140 ,-6 ,877 ,-8833 ,7 ,0 ,67 ,-834 ,9188 ,-539 ,-5 ,2 ,4134 ,3221 ,35 ,-422 ,-47] and 7
// Testing for [-9324 ,-1 ,84 ,799 ,962 ,17 ,7797] and 1
// Testing for [-6 ,6557 ,755 ,9 ,-10 ,206 ,-1 ,2 ,-83 ,-2 ,278 ,-110 ,0 ,8817 ,198 ,-739 ,1 ,5989 ,-1 ,988 ,185 ,74] and 20
// Testing for [5022 ,9888 ,217 ,-68 ,-243 ,2 ,5972 ,-329 ,-76 ,-706 ,1300 ,57 ,165 ,6303 ,280 ,5 ,4 ,9 ,-10] and 11
// Testing for [118 ,-277 ,3 ,7 ,1688 ,-405 ,-15 ,-3263 ,-1 ,-965 ,-5957 ,5724 ,57 ,-291 ,838 ,-9342 ,-61 ,-4790 ,413 ,85 ,-941 ,28 ,313 ,-145 ,-5 ,-1623 ,-9998 ,-678 ,1479 ,-5 ,-13 ,140 ,-3326 ,435] and 6
// Testing for [-25 ,38 ,971 ,3106 ,-2262 ,6076 ,-90 ,16 ,242 ,-1 ,-5001 ,-543 ,-605 ,389 ,-6841 ,-7528 ,538 ,-6 ,-112 ,609 ,348 ,818 ,-64 ,-5364 ,4864 ,-9 ,3842 ,-7182 ,-732 ,-5178 ,8 ,85 ,819 ,-58] and 26
// Testing for [-2506 ,3738 ,-78 ,-86 ,595 ,-762 ,-9756 ,-194 ,-45 ,377 ,1077 ,8 ,-2] and 4
// Testing for [22 ,2569 ,-5093] and 2
// Testing for [-2 ,80 ,280 ,0 ,-1805 ,1385 ,-444 ,31 ,757 ,0 ,-8742 ,-666 ,5041] and 10
// Testing for [-10 ,-16 ,-3042 ,72 ,71 ,-180 ,-86] and 3
// Testing for [-113 ,203 ,2151 ,365 ,18 ,-63 ,793 ,-425 ,-5985 ,-811 ,-29 ,10 ,-583 ,477 ,6452 ,1 ,88 ,-36 ,24 ,-93 ,6551 ,-7523 ,6405 ,641 ,-7603 ,7 ,7 ,-591] and 24
// Testing for [-7065 ,43 ,4830 ,12] and 3
// Testing for [58 ,86 ,-8305 ,-2690 ,177 ,331 ,-317 ,-5102 ,-68 ,-9412 ,298 ,93] and 8
// Testing for [-18 ,1448 ,53 ,24 ,0 ,923 ,-883 ,-2978 ,-10 ,-5950 ,-76 ,-56 ,-6103 ,-987 ,5895 ,9454 ,-501 ,6968 ,79 ,-2236 ,490 ,9] and 16
// Testing for [-17 ,4221 ,3 ,195 ,16 ,954 ,-3450 ,0 ,-489 ,-9] and 3
// Testing for [-511 ,6144 ,-8075 ,30 ,0 ,-27 ,953 ,-8 ,-961 ,-5764 ,-46 ,-908 ,7 ,4 ,6633 ,2 ,5 ,3562 ,-339 ,171 ,-1989 ,1 ,-85 ,511 ,6 ,1695 ,480 ,-1 ,-1398 ,-9 ,-698 ,-470 ,-10 ,69 ,12 ,350 ,633 ,-315 ,-8001] and 38
// Testing for [-41 ,7808 ,999 ,-248 ,6653 ,53] and 3
// Testing for [886 ,-64 ,-5197 ,-1 ,777 ,2219 ,734 ,-880 ,1937 ,7240 ,-43 ,5 ,-4 ,6818 ,6431 ,-9641 ,-794 ,931 ,-844 ,-13 ,466 ,-661 ,797 ,-4960 ,192 ,837 ,-9801 ,6856 ,6992 ,42 ,2373 ,178 ,1] and 13
// Testing for [-2432 ,-101 ,-6849 ,80 ,7 ,817 ,80 ,873 ,-2620 ,-8399 ,-25 ,4073 ,-1556 ,1 ,-5510 ,211 ,9306 ,-45 ,36 ,8430 ,-12 ,-1 ,-365 ,-4] and 5
// Testing for [-279 ,463 ,-5587] and 1
// Testing for [-6332 ,466 ,-2040 ,-5 ,581 ,-712 ,3502 ,70 ,687 ,250 ,-5330] and 6
// Testing for [911 ,6269 ,99 ,-543 ,774 ,8 ,-1 ,4300 ,332 ,7 ,-34 ,-8789 ,43 ,-175 ,-9 ,661 ,-82 ,-7570 ,8577 ,0 ,543 ,4434 ,4538 ,6 ,348 ,-2 ,5 ,6454 ,80 ,8 ,14 ,-1882 ,0 ,463 ,73 ,862] and 28
// Testing for [50 ,7705 ,756 ,-4921 ,-3973 ,6269 ,3580 ,33 ,456 ,-2 ,984 ,-2545 ,-771 ,185 ,0 ,-614 ,8 ,-307 ,-2 ,193 ,1 ,3643 ,-5480 ,11 ,0 ,-862 ,-2710 ,-4611 ,-554 ,-66 ,751 ,-118 ,-7795 ,7 ,8546 ,7 ,-8908 ,-6] and 17
// Testing for [-5945 ,-317 ,-1730 ,9357 ,-6048 ,-5166 ,82 ,1 ,-1 ,0 ,-9 ,-408 ,68 ,9885 ,735 ,-7657 ,516] and 11
// Testing for [4 ,-443 ,0 ,-795 ,2298 ,-98] and 2
// Testing for [-691 ,-8337 ,-10 ,-63 ,660 ,2455 ,-9890 ,1041 ,-682] and 6
// Testing for [9079 ,802 ,-20 ,4 ,-7019 ,-9895 ,-10 ,62 ,8970 ,-932 ,-24 ,-8184 ,-454] and 12
// Completed in 12ms
// You have passed all of the tests! :)