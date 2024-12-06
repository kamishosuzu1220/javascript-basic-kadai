// 新しくh2要素を作成し、定数に代入する
//const h2 = document.createElement('h2');

//h2.textContent = 'ボタンがクリックされました';
//h2.innerHTML ='<a href="#">ボタンがクリックされました</a>';


//const targetElement = document.querySelector('.text');

//const btn = document.getElementById('btn');

//btn.addEventListener('click', () => {
    //const change = document.btn.text.value;

    //console.log(text)
//})



// h2要素を作成して定数に代入
//const h2 = document.createElement('h2');

// h2要素にテキストを設定（リンク付き）
//h2.innerHTML = '<a href="#">ボタンがクリックされました</a>';

// テキストを挿入する対象を取得（適切なセレクタを指定）
//const targetElement = document.querySelector('.text'); // または '#text' 等

// 対象の要素が存在する場合のみ h2 を追加
//if (targetElement) {
  //targetElement.appendChild(h2);
//} else {
  //console.error('指定された要素が見つかりません。セレクタを確認してください。');
//}


// ボタンの要素を取得
const button = document.getElementById('btn');
// 表示する文章の要素を取得
const messageElement = document.getElementById('text');

// ボタンがクリックされたときの動作を設定
button.addEventListener('click', () => {
    messageElement.textContent = 'ボタンをクリックしました！';
});