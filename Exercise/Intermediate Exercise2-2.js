function intersection(arr1, arr2) {
    result = []
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                // 這邊要確認有沒有一樣的數字已經被加進去陣列了
                let okay = true
                for(let k = 0; k < result.length; k++){
                    if(arr1[i] == result[k]){
                        okay = false
                    }
                }
                if(okay){
                    result.push(arr1[i])
                }
            }
        }
    }
    console.log(result);
}

intersection([1, 3, 4, 6, 10, 3], [5, 11, 4, 3, 100, 144, 0]);