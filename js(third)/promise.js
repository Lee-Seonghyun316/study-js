// const increaseAndPrint = (n, callback) => {
//   setTimeout(() => {
//     const increased = n + 1;
//     console.log(increased);
//     if (callback) {
//       callback(increased);
//     }
//   }, 1000);
// };
//
// increaseAndPrint(0, (n) => {
//   increaseAndPrint(n, (n) => {
//     increaseAndPrint(n, (n) => {
//       increaseAndPrint(n, (n) => {
//         increaseAndPrint(n, (n) => {
//           console.log("끝!");
//         });
//       });
//     });
//   });
// });

function increaseAndPrint2(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint2(0)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .catch((e) => {
    console.error(e);
  });
