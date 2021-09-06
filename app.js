import { m, createElement, patch } from 'million';

// Initialize app
var oldvnode=m('div', { id: 'app' }, ['Hello World'])
const app_elemet = createElement(oldvnode);
function onclick(){
  gcount+=100
}
var offset
function app(count,depth,id){
  //return 'hello world '+count
  var children=['Hello World '+offset +' '+(count+offset)]
  offset+=1
  
  if (depth>0)
    children=children.concat([1,2].map(x=>app(count,depth-1,x)))
  var ans=m('div', { id: 'app'+id,onclick }, children)
  return ans
}
document.body.appendChild(app_elemet);
// Patch content
var gcount=0
setInterval(() => {
  offset=0
  var newvnode=app(gcount,10,1)
  patch(app_elemet,newvnode,oldvnode);
  oldvnode=newvnode  
  gcount++
}, 100);
