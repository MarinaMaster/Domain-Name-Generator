// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

function combinations() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions =[".com", ".net", ".us", ".io", ".etc"];

  for (let i = 0; i < pronouns.length; i++) {
    for (let z = 0; z < adjs.length; z++) {
      for (let y = 0; y < nouns.length; y++) {
        for (let x =0; x <extensions.length; x++){
        console.log(`${pronouns[i]}${adjs[z]}${nouns[y]}${extensions[x]}`);
        }
      }
    }
  }
}
combinations();