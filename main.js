import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
 console.log('react is here');
 render(){
  return(
   <div>
    <h1>Ohai!</h1>
    <p>The phrase is an intentionally misspelled “Oh hi” and is usually used as a title on cutesy pictures of animals like on lolcats.</p>
   </div>
  )
 }
}
function run() {
 ReactDOM.render(<Hello/>, document.getElementById('root'));
}

if (window.addEventListener) {
 console.log('first one');
 window.addEventListener('DOMContentLoaded', run);
} else {
 console.log('second one');
 window.attachEvent('onload', run);
}
