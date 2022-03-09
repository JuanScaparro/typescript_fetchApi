// APP CONFIG
let actualPostIndex = 0;
const isRandomPost = true;
let range = 1;
const isRandomRange = true;
//
let posts = [];
const postElement = document.getElementById('posts');
const btnNext = document.getElementById('next');
btnNext.addEventListener('click', goNext);
const btnPrev = document.getElementById('prev');
btnPrev.addEventListener('click', goPrev);
function loadData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(jsonRes => saveData(jsonRes));
}
;
function saveData(data) {
    //posts = data.splice(0, 5);
    posts = data;
    setRandom();
    buildPost(posts[actualPostIndex]);
}
;
function setRandom() {
    if (isRandomPost) {
        actualPostIndex = Math.round(Math.random() * posts.length);
    }
    if (isRandomRange) {
        range = Math.round(Math.random() * 10);
    }
    console.log('actualPostIndex -> ', actualPostIndex);
    console.log('range -> ', range);
}
function buildPost(post) {
    postElement.innerHTML = '';
    const template = `<div class="post col-8 mx-auto text-center">
                              <h6>${post.id} - ${post.title.toUpperCase()}</h6>
                              <p>${post.body}</p>
                            </div>`;
    const div = document.createElement('div');
    div.innerHTML = template;
    postElement.appendChild(div);
}
;
function goPrev() {
    if (actualPostIndex > range) {
        actualPostIndex -= range;
        buildPost(posts[actualPostIndex]);
    }
    else {
        window.alert('Has llegado al PRIMER elemento');
    }
}
function goNext() {
    if (actualPostIndex < posts.length - range) {
        actualPostIndex += range;
        buildPost(posts[actualPostIndex]);
    }
    else {
        window.alert('Has llegado al ULTIMO elemento');
    }
}
;
function init() {
    loadData();
}
;
init();
export {};
