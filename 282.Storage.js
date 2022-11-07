// Local Storage and Session Storage
// storage 都存在瀏覽器裡
// Local Storage 沒有 clear 就會一直在
// Session Storage 關掉瀏覽器就會消失
// Storage can only store string

/**
 * Local Storage and Session Storage 皆可使用以下四種
 * setltem(key, value)
 * getitem(key)
 * removeltem(key)
 * clear()
 * 
 * key 不能重複
 */

localStorage.setItem('name', 'Bajohn')
localStorage.setItem('address', 'Hawaii St.')
localStorage.setItem('car', 'Toyota')

// console.log(localStorage);

let myData = localStorage.getItem('name')
console.log(myData);

localStorage.removeItem('car')
localStorage.clear()