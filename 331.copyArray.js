// how to copy an array?

let friends = ["MIke", "Josh"];
let copy = friends; // 複製他的 location 而已 (傳址)
let copy2 = [...friends]; // 複製一個新的 array (spread operator)(傳值)

// copy.push("Nelson");
copy2.push("Nelson");
console.log(friends, copy, copy2);
