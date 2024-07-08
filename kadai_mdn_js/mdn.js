const today = new Date();
const month12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(
  today.getFullYear() +
    "年" +
    month12[today.getMonth()] +
    "月" +
    today.getDate() +
    "日"
);
