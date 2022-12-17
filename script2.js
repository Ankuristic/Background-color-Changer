


function add() {

    let todol = document.getElementById(todol).value;
   let todofirst = document .getElementById(todofirst);
  let li = document.createElement('li')
  li.textContent=todol;

  todofirst.appendChild(li)
    
  }
  
  todol.oninput = updateCount;


 // https://www.dropbox.com/s/ww1ct9fshgfs1iu/todoproject.zip?dl=0