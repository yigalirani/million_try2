import { m, createElement, patch,VFlags} from 'million';

// Initialize app
var oldvnode=m('div', {key:'root'}, ['Hello World'],VFlags.ONLY_KEYED_CHILDREN)
const app_elemet = createElement(oldvnode);
function onclick(){
  gcount+=100
}
var offset
function app(count,depth,key){
  //return 'hello world '+count
  var children=['Hello World '+offset +' '+(count+offset)]
  offset+=1
  
  if (depth>0)
    children=children.concat([1,2].map(x=>app(count,depth-1,x)))
  var ans=m('div', {key,onclick}, children,VFlags.ONLY_KEYED_CHILDREN)
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
