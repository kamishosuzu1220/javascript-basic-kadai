// ボタンの要素を取得
const button = document.getElementById('btn');
// 表示する文章の要素を取得
const messageElement = document.getElementById('text');

// ボタンがクリックされたときの処理
button.addEventListener('click', () => {
    // ボタンを押したら、2秒後にメッセージを変更
    setTimeout(() => {
        messageElement.textContent = 'ボタンをクリックしました！';
    }, 2000); 
});