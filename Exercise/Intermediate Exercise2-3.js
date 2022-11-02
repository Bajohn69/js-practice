function flatten(arr) {
    let result = []
    helper(arr)
    console.log(result);
    return result

    function helper(arr1) {
        for(let i = 0; i < arr1.length; i++){
            if(Array.isArray(arr1[i])){
                // 如果 arr1[i] 是 array 的話，就再執行一次 helper
                // Array.isArray() 函式會檢查傳入的值是否為一個 Array
                helper(arr1[i])
            }else{
                result.push(arr1[i])
            }
        }
    }
}

flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]])