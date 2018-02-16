// import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import './scss/main.scss'
import {data} from './data';
import {eventCard} from './cardEvent.jsx';


let list = data.slice(0,3);

const EventsList = function(list){
  return (
    <div>{
      list.map((event)=> <div key={list.id}>{eventCard(event)}</div>)
    }</div>
  )
}

ReactDom.render(EventsList(list), document.getElementById('app'));



