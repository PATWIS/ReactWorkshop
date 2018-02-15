// import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import {data} from './data';
import {elem} from './example.jsx';

let index = 0;
let books = data[index]

// let book = function(books) {
//   return (React.createElement('div',{ className: "media" },
//     React.createElement('div', { className: "media-left" },
//       React.createElement('img', { className: "mr-3", alt: "image", src: "https://picsum.photos/100/100" })
//     ),
//     React.createElement('div', { className: "media-body" },
//       React.createElement('h5', { className: "mt-0", style: { fontSize: font_size + "em" } }, books.name),
//       books.desc)
//   ))
// }


document.querySelector('#next').addEventListener('click', () => {
  index++;
  render();
})

document.querySelector('#prev').addEventListener('click', () => {
  index = index===0 ? 0 : (index - 1);
  render();
})

function render() {
  books = books[index]
  ReactDom.render(elem(books), document.getElementById('app'));
}

render()
