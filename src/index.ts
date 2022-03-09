import { IPost } from "./interfaces/ipost.interface.js";

// APP CONFIG
let actualPostIndex: number = 0;
const isRandomPost: boolean = true;
let range: number = 1;
const isRandomRange: boolean = true;

//
let posts: IPost[] = [];
const postElement: HTMLElement = <HTMLElement>document.getElementById( 'posts' );  
const btnNext: HTMLButtonElement = <HTMLButtonElement>document.getElementById( 'next' );
btnNext.addEventListener( 'click', goNext );
const btnPrev: HTMLButtonElement = <HTMLButtonElement>document.getElementById( 'prev' );
btnPrev.addEventListener( 'click', goPrev );


function loadData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch( url )
    .then( res => res.json() )
    .then( jsonRes => saveData( jsonRes ) );
};

function saveData( data: IPost[] ) {
  //posts = data.splice(0, 5);
  posts = data;
  setRandom();
  buildPost( posts[actualPostIndex] );
};

function setRandom() {
  if( isRandomPost ){
    actualPostIndex = Math.round( Math.random()*posts.length );
  }
  if( isRandomRange ){
    range = Math.round( Math.random()*10 );
  }
  console.log( 'actualPostIndex -> ',actualPostIndex );
  console.log( 'range -> ',range );
};

function buildPost(post: IPost) {
  postElement.innerHTML = '';
  const template: string = `<div class="post col-8 mx-auto text-center">
                              <h6>${post.id} - ${ post.title.toUpperCase() }</h6>
                              <p>${ post.body }</p>
                            </div>`
  const div = document.createElement( 'div' );
  div.innerHTML = template;
  postElement.appendChild( div );
};

function goPrev() {
  if( actualPostIndex > range ){
    actualPostIndex -= range;
    buildPost( posts[actualPostIndex] );
    btnNext.style.display = 'inline';
  }else{
    window.alert( 'Has llegado al PRIMER elemento' );
    btnPrev.style.display = 'none';
  };
};

function goNext() {
  if( actualPostIndex < posts.length-range ) {
    actualPostIndex += range;
    buildPost( posts[actualPostIndex] );
    btnPrev.style.display = 'inline';
  }else{
    window.alert( 'Has llegado al ULTIMO elemento' );
    btnNext.style.display = 'none';
  };
};

function init() {
  loadData();
};

init();
