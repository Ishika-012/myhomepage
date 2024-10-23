//Event
const eventBar = document.querySelector("#eventBar");
const overlay = document.querySelector(".overlay");
const bar = document.querySelector(".bar")
const list3 = document.querySelector(".list3");

const showEvent = () => {
  
   eventBar.style.display = "block";
   overlay.style.display = "block";
   list3.style.display = 'none';
   setTimeout(() => {
    eventBar.style.left = "0%";
   },0)

   overlay.addEventListener("click", () => {
    overlay.classList.add('hide');
    list3.style.display = 'block';
    setTimeout(() => {
     eventBar.style.left = "-30%";
     eventBar.style.transition = "0.4s ease-in-out"
    },0)
  })
}


//project
const projectBar = document.querySelector("#projectBar");

const showProject = () => {
   projectBar.style.display = "block";
    overlay.style.display = "block"
    list3.style.display = 'none';
   setTimeout(() => {
    projectBar.style.left = "0%";
   },0)

   overlay.addEventListener("click", () => {
    overlay.classList.add('hide');
    list3.style.display = 'block';
    setTimeout(() => {
     projectBar.style.left = "-30%";
     projectBar.style.transition = "0.4s ease-in-out"
    },0)
  })
}
//contact
const contactBar = document.querySelector("#contactBar");

const showContact = () => {
   overlay.classList.remove('hide');
   contactBar.classList.remove('hide');
   list3.style.display = 'none';
  
   setTimeout(() => {
    contactBar.style.left = "0%";
   },0) 

   overlay.addEventListener("click", () => {
    overlay.classList.add('hide');
    list3.style.display = 'block';
    setTimeout(() => {
     contactBar.style.left = "-30%";
     contactBar.style.transition = "0.4s ease-in-out"
    },0)
  })
 
}

//progress

const progressBar = document.querySelector("#progressBar");

const showprogress = () => {
   overlay.classList.remove('hide');
   progressBar.classList.remove('hide');
   list3.style.display = 'none';
  
   setTimeout(() => {
    progressBar.style.left = "0%";
   },0) 

   overlay.addEventListener("click", () => {
    overlay.classList.add('hide');
    list3.style.display = 'block';
    setTimeout(() => {
     progressBar.style.left = "-30%";
     progressBar.style.transition = "0.4s ease-in-out"
    },0)
  })
 
}
const list4 =  document.querySelector(".list4")
const bars= document.querySelector("#bars")
const sec = document.querySelector(".sec");
let dropdown = () => {

  list4.classList.remove('hide');
    list4.style.top= "10%";
  const d= document.createElement("div");
  d.innerHTML=`<i class="fa-solid fa-bars-staggered" style="cursor:pointer"></i>`;
  bars.replaceWith(d);
  d.addEventListener("click",() => {
  list4.classList.add('hide');
  d.replaceWith(bars);
})
}

const post = document.querySelector("#post");
const postArea = document.querySelector("#postArea");
const icon = document.querySelector("#xicon");

post.addEventListener("click", () => {
    overlay.classList.remove('hide')
    postArea.style.display = "block";
})

icon.addEventListener("click",()=> {
  overlay.classList.add('hide')
postArea.style.display = "none";
})
//validation
const projectName = document.querySelector('.desc1');
    const desc = document.querySelector('.desc');
    const subBtn = document.querySelector('#subBtn');

    projectName.addEventListener('input', () => {
      const nameLength = projectName.value.length;
        const descLength = desc.value.length;

        if (nameLength < 5 || descLength < 10) {
            subBtn.disabled = true; // Disable the button
        } else {
          subBtn.disabled = false;
            subBtn.style.backgroundColor = "rgb(244, 94, 94)";
            subBtn.style.color = "white";
        }
    });
    desc.addEventListener('input', () => {
      const nameLength = projectName.value.length;
        const descLength = desc.value.length;

        if (nameLength < 5 || descLength < 10) {
            subBtn.disabled = true; // Disable the button
        } else {
          subBtn.disabled = false;
            subBtn.style.backgroundColor = "rgb(244, 94, 94)";
            subBtn.style.color = "white";
        }
    });

  

    //to do list
    const inputBox = document.getElementById("inputBox");
    const listContainer = document.querySelector("#listContainer");
    
    const addTask = () => {
      if(inputBox.value !== ''){
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
       
      }
      inputBox.value = "";
      
    }
    inputBox.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { 
        addTask(); 
    }
    })

    listContainer.addEventListener("click", ()=>{
        li.style.display ="none";
    })

    //deleting task
    listContainer.addEventListener("click",(e) => {
         if(e.target.tagName === "LI"){
          // e.target.classList.toggle("checked");
          e.target.style.display = "none";
         }
         else if(e.target.tagName === "SPAN"){
          e.target.parentElement.remove();  
         }
    }, false);


    