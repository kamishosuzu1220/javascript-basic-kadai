// 変数numに1〜60までのランダムな整数を代入する
let num = Math.floor(Math.random() * 60 + 1);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が3の倍数であれば、「3の倍数です」という文字列を表示させる
if(num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}    
else if(num % 3 === 0) {
    console.log('3の倍数です');
}
else if(num % 5 === 0) {
    console.log('5の倍数です');
}
else {
    console.log(num);
}
