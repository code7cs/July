/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-21 21:52:11
 * @LastEditTime: 2020-07-21 22:00:51
 */

//  1. Rewrite using Async/Await
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json')
//   .catch(alert); // Error: 404

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

loadJson("no-such-user.json").catch(alert); // Error: 404
