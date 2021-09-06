import { m, createElement, patch } from 'million';

// Initialize app
var the_div=m('div', { id: 'app' }, ['Hello World'])
const app_elemet = createElement(the_div);
function onclick(){
  gcount+=100
}
function app(count){
  //return 'hello world '+count
  var ans=m('div', { id: 'app',onclick }, ['World'+count])
  return ans
}
document.body.appendChild(app_elemet);
// Patch content
var gcount=0
setInterval(() => {
  patch(app_elemet, app(gcount));  
  gcount++
}, 100);
