// 第一種作法(丟進一個結果(joke)裡)
async function getJoke() {
  let joke = await fetch("https://v2.jokeapi.dev/joke/Programming");
  let parseJoke = await joke.json();
  console.log(parseJoke);
}

// function getJoke2() {
//   fetch("https://v2.jokeapi.dev/joke/Programming")
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }

getJoke();
