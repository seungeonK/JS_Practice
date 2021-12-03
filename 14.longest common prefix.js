var longestCommonPrefix = function(strs) {
    // only lower character contained
    return "" ? (strs.length === 0 || strs === null) : solution(strs);
};

//divide and conquer
let solution = strs => {
    let res = strs[0];

    //pivot-1 because we need to check i and i+1th items
    for(let i=0; i<strs.length; i++){
        res = commonPrefix(res, strs[i]);
    }
    
    return res;
};

let commonPrefix = (leftStr,rightStr) => {
    
    let min = Math.min(leftStr.length, rightStr.length);
    for(let i=0; i<min; i++){
        if(leftStr[i] != rightStr[i]){
            return leftStr.substring(0,i);
        }
    }
        return leftStr.substring(0,min);
}

console.log(longestCommonPrefix(["aaa","aa","aaa"]));




