document.addEventListener('DOMContentLoaded', () => {
  // --- Element Creation ---
  const creationContainer = document.getElementById('creation-container');
  let elementCounter = 1;

  document.getElementById('create-div').addEventListener('click', () => {
      const newDiv = document.createElement('div');
      newDiv.className = 'output-item';
      newDiv.textContent = `New Element #${elementCounter++}`;
      creationContainer.appendChild(newDiv);
  });

  document.getElementById('create-text').addEventListener('click', () => {
      const newDiv = document.createElement('div');
      newDiv.className = 'output-item';
      const textNode = document.createTextNode(`Text Element ${Math.floor(Math.random() * 100)}`);
      newDiv.appendChild(textNode);
      creationContainer.appendChild(newDiv);
  });

  document.getElementById('create-html').addEventListener('click', () => {
      const newDiv = document.createElement('div');
      newDiv.className = 'output-item';
      const now = new Date();
      newDiv.innerHTML = `HTML Element with <strong>styled</strong> content <span class="text-indigo-500">${now.toLocaleTimeString()}</span>`;
      creationContainer.appendChild(newDiv);
  });

  document.getElementById('clear-all-creation').addEventListener('click', () => {
      creationContainer.innerHTML = '';
      elementCounter = 1;
  });

  // --- Element Removal ---
  const removalContainer = document.getElementById('removal-container');
  let removals = 0
  document.getElementById('add-elements').addEventListener('click', () => {
      const range = Math.floor(Math.random() * 5) + 1
      for (let i = 1; i <= range; i++) {
          const item = document.createElement('div');
          item.className = 'output-item';
          item.textContent = `Removable Item ${removals+1}`;
          removals += 1
          removalContainer.appendChild(item);
      }
  });

  document.getElementById('remove-last').addEventListener('click', () => {
      if (removalContainer.lastElementChild) {
          removalContainer.removeChild(removalContainer.lastElementChild);
      }
      removals -= 1
  });

  document.getElementById('remove-first').addEventListener('click', () => {
      if (removalContainer.firstElementChild) {
          removalContainer.removeChild(removalContainer.firstElementChild);
      }
  });
  
  document.getElementById('remove-all').addEventListener('click', () => {
      removalContainer.innerHTML = '';
      removals = 0
  });

  // --- Element Styling ---
  const styleTarget = document.getElementById('style-target');
  const computedOutput = document.getElementById('computed-styles-output');

  document.getElementById('inline-style').addEventListener('click', () => {
      styleTarget.classList.remove('highlight');
      styleTarget.style.backgroundColor = '#ecfdf5';
      styleTarget.style.color = '#065f46';
      styleTarget.style.border = '2px solid #6ee7b7';
      styleTarget.style.fontWeight = 'bold';
  });

  document.getElementById('toggle-class').addEventListener('click', () => {
      styleTarget.style.cssText = '';
      styleTarget.classList.toggle('highlight');
  });
  
  document.getElementById('get-computed').addEventListener('click', () => {
      const styles = window.getComputedStyle(styleTarget);
      const bgColor = styles.getPropertyValue('background-color');
      const color = styles.getPropertyValue('color');
      computedOutput.textContent = `Computed: BG: ${bgColor}, Color: ${color}`;
  });

  document.getElementById('reset-styles').addEventListener('click', () => {
      styleTarget.style.cssText = ''; 
      styleTarget.classList.remove('highlight');
      computedOutput.textContent = '';
  });

  // --- Attributes ---
  const attributeInput = document.getElementById('attribute-input');
  const attributeOutput = document.getElementById('attribute-output');

  document.getElementById('set-attributes').addEventListener('click', () => {
      attributeInput.setAttribute('smk_lbn_tmr_hende', '');
      attributeInput.setAttribute('class', 'form-control bg-gray-200');
      attributeOutput.textContent = 'Set attributes: smk lbn tmr hende, class';
  });

  document.getElementById('get-attributes').addEventListener('click', () => {
      const cls = attributeInput.getAttribute('class');
      const disabled = attributeInput.hasAttribute('smk_lbn_tmr_hende');
      attributeOutput.textContent = `Class: ${cls}, smk lbn tmr hende: ${disabled}`;
  });

  document.getElementById('data-attributes').addEventListener('click', () => {
      attributeInput.dataset.demoid = '12345';
      attributeInput.dataset.userRole = 'admin';
      attributeOutput.textContent = `Set data attributes: demoId=${attributeInput.dataset.demoid}, userRole=${attributeInput.dataset.userRole}`;
  });

-
  document.getElementById('remove-attributes').addEventListener('click', () => {
      attributeInput.removeAttribute('smk_lbn_tmr_hende');
      attributeInput.removeAttribute('class');
      attributeInput.setAttribute('class', 'form-control'); // Reset to original class
      delete attributeInput.dataset.demoid;
      delete attributeInput.dataset.userRole;
      attributeOutput.textContent = 'Removed smk lbn tmr hende, class, and data attributes.';
  });

  // --- Content Manipulation ---
  const contentManipContainer = document.getElementById('content-manip-container');
  const contentManipOutput = document.getElementById('content-manip-output');
  const originalContent = contentManipContainer.innerHTML;

  document.getElementById('inner-html').addEventListener('click', () => {
      const now = new Date().toLocaleTimeString();
      contentManipContainer.innerHTML = `
          <h4>HTML Content</h4>
          <ul>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
          </ul>
          <p class="text-sm text-gray-500">Generated at ${now}</p>`;
      contentManipOutput.textContent = 'Used innerHTML to insert HTML content';
  });

  document.getElementById('text-content').addEventListener('click', () => {
      const now = new Date().toLocaleTimeString();
      contentManipContainer.textContent = `This is plain text content. Even if we include <tags> they will be displayed as text. Generated at ${now}`;
      contentManipOutput.textContent = 'Used textContent to insert plain text';
  });

  document.getElementById('insert-adjacent').addEventListener('click', () => {
      const now = new Date().toLocaleTimeString();
      contentManipContainer.insertAdjacentHTML('beforeend', `<p class="border-t pt-2 mt-2">Appended content at ${now}</p>`);
      contentManipOutput.textContent = 'Used insertAdjacentHTML to append content';
  });

  document.getElementById('reset-content').addEventListener('click', () => {
      contentManipContainer.innerHTML = originalContent;
      contentManipOutput.textContent = 'Content has been reset.';
  });

  // --- Event Handling ---
  const eventTarget = document.getElementById('event-target');
  const eventOutput = document.getElementById('event-output');
  
  const handleClick = () => {
      eventOutput.textContent = 'Click event fired!';
      eventTarget.style.backgroundColor = '#e0e7ff';
  };
  const handleMouseEnter = () => {
      eventOutput.textContent = 'Mouse Enter event fired!';
      eventTarget.style.backgroundColor = '#d1fae5';
  };
  const handleMouseLeave = () => {
      eventOutput.textContent = 'Mouse Leave event fired!';
      eventTarget.style.backgroundColor = '';
  };

  document.getElementById('add-events').addEventListener('click', () => {
      eventTarget.addEventListener('click', handleClick);
      eventTarget.addEventListener('mouseenter', handleMouseEnter);
      eventTarget.addEventListener('mouseleave', handleMouseLeave);
      eventOutput.textContent = 'Added click, mouseenter, and mouseleave events';
  });

  document.getElementById('remove-events').addEventListener('click', () => {
      eventTarget.removeEventListener('click', handleClick);
      eventTarget.removeEventListener('mouseenter', handleMouseEnter);
      eventTarget.removeEventListener('mouseleave', handleMouseLeave);
      eventOutput.textContent = 'Removed all events.';
      eventTarget.style.backgroundColor = '';
  });
});
let parenthoverd = false
document.getElementById('ParentBtn').addEventListener('click' , ()=> {
  parenthoverd = !parenthoverd 
  document.querySelector('.parent').style.backgroundColor = parenthoverd ?  'lightblue' : 'white'
})
let  childhoverd = false 
document.getElementById('ChildrenBtn').addEventListener('click' , ()=>{
  const array = document.querySelectorAll('.child')
  childhoverd = !childhoverd
  array.forEach((ch) =>{
    ch.style.backgroundColor = childhoverd ?  'lightblue' : 'white'
  })
})
let qhover = false
document.getElementById('QueryBtn').addEventListener('click' , ()=> {
  qhover = !qhover 
  document.querySelector('.grandchild').style.backgroundColor = qhover ?  'lightblue' : 'white'
})


let animInterval = null;
let directionX = 1;
let directionY = 1;
let posX = 0;
let posY = 0;
const step = 5;
const tick = 30;
const defaultColor = '#ff2d55';
let currentScale = 1;
let currentRotate = 0;

document.getElementById('btn-move').addEventListener('click', () => {
  const box = document.getElementById('anim-box');
  const parent = box.parentElement;
  if (animInterval) return;
  animInterval = setInterval(() => {
    const maxX = Math.max(0, parent.clientWidth - box.offsetWidth);
    const maxY = Math.max(0, parent.clientHeight - box.offsetHeight);
    posX += step * directionX;
    posY += step * directionY;
    if (posX >= maxX) { posX = maxX; directionX = -1; } else if (posX <= 0) { posX = 0; directionX = 1; }
    if (posY >= maxY) { posY = maxY; directionY = -1; } else if (posY <= 0) { posY = 0; directionY = 1; }
    box.style.transition = 'background .18s ease';
    box.style.transform = `translate(${posX}px, ${posY}px) scale(${currentScale}) rotate(${currentRotate}deg)`;
  }, tick);
});

document.getElementById('btn-color').addEventListener('click', () => {
  const box = document.getElementById('anim-box');
  if (box._colorInterval) {
    clearInterval(box._colorInterval);
    box._colorInterval = null;
    box.style.background = defaultColor;
    return;
  }
  let toggle = false;
  box._colorInterval = setInterval(() => {
    box.style.background = toggle ? '#ff2d55' : '#06b6d4';
    toggle = !toggle;
  }, 400);
});

document.getElementById('btn-transform').addEventListener('click', () => {
  const box = document.getElementById('anim-box');
  if (box._pulseInterval) {
    clearInterval(box._pulseInterval);
    box._pulseInterval = null;
    currentScale = 1;
    currentRotate = 0;
    box.style.transition = 'transform .35s ease, background .18s ease';
    box.style.transform = `translate(${posX}px, ${posY}px) scale(${currentScale}) rotate(${currentRotate}deg)`;
    setTimeout(()=>{ box.style.transition = ''; }, 380);
    return;
  }
  let growing = true;
  box._pulseInterval = setInterval(() => {
    currentScale = growing ? 1.4 : 1;
    currentRotate = growing ? 10 : 0;
    box.style.transition = 'transform .18s ease';
    box.style.transform = `translate(${posX}px, ${posY}px) scale(${currentScale}) rotate(${currentRotate}deg)`;
    growing = !growing;
  }, 400);
});

document.getElementById('btn-stop').addEventListener('click', () => {
  const box = document.getElementById('anim-box');
  if (animInterval) {
    clearInterval(animInterval);
    animInterval = null;
  }
  if (box._colorInterval) {
    clearInterval(box._colorInterval);
    box._colorInterval = null;
  }
  if (box._pulseInterval) {
    clearInterval(box._pulseInterval);
    box._pulseInterval = null;
  }
  posX = 0;
  posY = 0;
  directionX = 1;
  directionY = 1;
  currentScale = 1;
  currentRotate = 0;
  box.style.transition = 'transform .35s ease, background .18s ease';
  box.style.transform = `translate(${posX}px, ${posY}px) scale(${currentScale}) rotate(${currentRotate}deg)`;
  box.style.background = defaultColor;
  setTimeout(() => { box.style.transition = ''; }, 380);
});

// class maniplation 

const addClassBtn = document.getElementById('btn-add-class');
const removeBtn = document.getElementById('btn-remove-class');
const toggleBtn = document.getElementById('btn-toggle-class-2');
const checkBtn = document.getElementById('btn-check-class');
const replaceBtn = document.getElementById('btn-replace-class');
const target = document.getElementById('Classstyle-target');
const outclassarea = document.getElementById('computed-styles-output');
let CLASS = 'highlightblue';

function write(msg){
  outclassarea.textContent = msg;
}

addClassBtn.addEventListener('click', ()=>{
  console.log(CLASS)
    target.classList.add(CLASS);
    write(`Added class "${CLASS}".`);
});

removeBtn.addEventListener('click', ()=>{
  if(target.classList.contains(CLASS)){
    target.classList.remove(CLASS);
    write(`Removed class "${CLASS}".`);
  } else {
    write(`Element does not have "${CLASS}".`);
  }
});

toggleBtn.addEventListener('click', ()=>{
  const present = target.classList.toggle(CLASS);
  write(present ? `Toggled: "${CLASS}" added.` : `Toggled: "${CLASS}" removed.`);
});

checkBtn.addEventListener('click', ()=>{
  const has = target.classList.contains(CLASS);
  const s = getComputedStyle(target);
  // console.log(has)
  const info = [
    `Has "${CLASS}": ${has}`,
    `display: ${s.display}`,
    `font-size: ${s.fontSize}`,
    `color: ${s.color}`,
    `background-color: ${s.backgroundColor}`,
    `border: ${s.border}`,
    `box-shadow: ${s.boxShadow}`,
    `padding: ${s.padding}`,
    `margin: ${s.margin}`
  ].join('\n');
  write(info);
});

replaceBtn.addEventListener('click', ()=>{
  if(CLASS === 'highlightblue')
    CLASS =  'highlight'
  else
    CLASS =  'highlightblue'   
  console.log(CLASS)
});

// --- Form Manipulation ---
document.getElementById('btn-fill-form').addEventListener('click', ()=>{
  document.getElementById('f-name').value = 'Ammar';
  document.getElementById('f-color').value = 'green';
  document.getElementById('f-sub').checked = true; 
});

document.getElementById('btn-get-values').addEventListener('click', ()=>{
  let name = document.getElementById('f-name').value;
  if (name == '')
    name = 'not found'
  const color = document.getElementById('f-color').value;
  console.log(document.getElementById('textresponse'))
  document.getElementById('textresponse').textContent ='Name: ' + name + ' | Color: ' + color;
});

document.getElementById('btn-reset-form').addEventListener('click', ()=>{
  document.getElementById('f-name').value = '';
  document.getElementById('f-color').selectedIndex = 0;
  document.getElementById('f-sub').checked = false; 
});

 // --- Local Storage ---
 document.getElementById('btn-set-item').addEventListener('click', ()=>{
    const v = document.getElementById('ls-input').value;
    localStorage.setItem('demo', v);
    document.getElementById('ls-output').textContent = 'Saved: '+v;
  });
  document.getElementById('btn-get-item').addEventListener('click', ()=>{
    const v=localStorage.getItem('demo'); 
    document.getElementById('ls-output').textContent = 'Loaded: '+(v||'<empty>');
  });
 document.getElementById('btn-store-object').addEventListener('click', ()=>{ 
  const obj={name:'Ammar',time:Date.now()}; 
  localStorage.setItem('demoObj', JSON.stringify(obj)); 
  document.getElementById('ls-output').textContent = 'Stored object'; 
});
 document.getElementById('btn-clear-storage').addEventListener('click', ()=>{ 
  localStorage.removeItem('demo'); 
  localStorage.removeItem('demoObj'); 
  document.getElementById('ls-output').textContent='Cleared'; 
});

 // helper shortcut
const $ = (id)=>document.getElementById(id);
const output = $("AdvancedDomOut");
const log = (msg)=>{ output.textContent = msg + "\n"; };

// --- Advanced DOM ---
$("btn-clone").addEventListener("click", ()=>{ 
  const el = $("advanced-area"); 
  const clone = el.cloneNode(true); 
  clone.style.marginTop="8px"; 
  clone.addEventListener("click", ()=>clone.style.background="#eef");
  el.parentElement.appendChild(clone);
  log("Element cloned and appended.");
});

// debounce
function debounce(fn, wait=300){ 
  let t; 
  return (...args)=>{ 
    clearTimeout(t); 
    t = setTimeout(()=>fn(...args), wait); 
  }; 
}
const debounced = debounce(()=> log("Debounced action fired."), 500);
$("btn-debounce").addEventListener("click", ()=>{ debounced(); });

// template
$("btn-template").addEventListener("click", ()=>{
  const tpl = `<div class='p-2 mt-2 border rounded bg-light'>Template item at ${new Date().toLocaleTimeString()}</div>`;
  $("advanced-area").insertAdjacentHTML("beforeend", tpl);
  log("Template added.");
});

// observer
let obs=null;
$("btn-observer").addEventListener("click", ()=>{
  if(obs){ 
    obs.disconnect(); 
    obs=null; 
    log("Observer stopped.");
    return; 
  }
  obs = new MutationObserver((mut)=>{
    log("Mutation observed: "+mut.length+" change(s).");
  });
  obs.observe($("advanced-area"), {childList:true, subtree:false});
  log("Observer started. Will log on future changes.");
});

// accessibility
document.addEventListener("keydown", (e)=>{ 
  if(e.key==="Tab") document.body.classList.add("show-focus"); 
});
