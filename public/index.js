// const promesa: Promise<string | void> = new Promise( 
//   (resolve, reject) => {
//     setTimeout(() => {
//       const res = true
//       if( res ){
//         resolve( "TODO BIEN" )
//       }else{
//         reject( "TODO MAL" )
//       }
//     }, 4000);
//   }
// )
// .then( respuesta => console.log( respuesta))
// .catch( e => console.log(e))
let isPostsVisible = false;
let posts = [];
const postElement = document.getElementById('posts');
const btnShow = document.getElementById('btnShowPost');
btnShow.textContent = 'Ver Posts';
btnShow.addEventListener('click', togglePosts);
function togglePosts() {
    if (isPostsVisible) {
        postElement.innerHTML = '';
        btnShow.textContent = 'Ver Posts';
    }
    else {
        showData();
        btnShow.textContent = 'Ocultar Posts';
    }
    isPostsVisible = !isPostsVisible;
}
;
function loadData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(jsonRes => saveData(jsonRes));
}
;
function saveData(data) {
    posts = data;
}
;
function showData() {
    posts.forEach(el => {
        const template = `<div class="post col-8 mx-auto text-center">
      <h6>${el.title.toUpperCase()}</h6>
      <p>${el.body}</p>
    </div>`;
        const div = document.createElement('div');
        div.innerHTML = template;
        postElement.appendChild(div);
    });
}
;
function init() {
    loadData();
}
;
init();
export {};
