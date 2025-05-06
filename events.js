//1. Button Click Event
//solution 1
function onButton() {
  console.log("clicked me")
}
//solution 2
const button = document.createElement('button');
button.textContent = 'Click me';

// Add click event listener to the button
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Append the button to the document body
document.body.appendChild(button);

//2. Dropdown Menu Toggle



document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("dropdownBtn");
  const menu = document.getElementById("dropdownMenu");

  btn.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  window.addEventListener("click", function (e) {
    if (!btn.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
});

//DOMContentLoaded este un eveniment din JavaScript care spune:
//„Tot HTML-ul a fost încărcat și analizat de browser, poți rula codul JS în siguranță.”

//Metoda toggle() este folosită pentru a adăuga sau elimina o clasă CSS 
// dintr-un element HTML. Dacă elementul nu are clasa respectivă, toggle() 
// o adaugă, iar dacă are deja clasa respectivă, toggle() o elimină.

//3. Mouse Enter Background Change

// function changeBackground(elementId, color) {
//   const element = document.getElementById(elementId)
//   element.addEventListener("mouseenter", () => {
//     element.style.backgroundColor = color
//   })
//   element.addEventListener("mouseleave", () => {
//     element.style.backgroundColor = "";
//   });
// }
// console.log(changeBackground("element-id", "red"))

// function changeBackground(elementId, color){
//     const element = document.getElementById(elementId);
//     if (!element) {
//         console.warn(`Elementul cu ID-ul '${elementId}' nu a fost găsit.`);
//         return;
//     }

//     element.addEventListener("mouseenter", () => {
//         element.style.backgroundColor = color;
//     });

//     element.addEventListener("mouseleave", () => {
//         element.style.backgroundColor = ""; // revine la implicit
//     });
// }

// // Asigură-te că DOM-ul este încărcat
// document.addEventListener("DOMContentLoaded", () => {
//     changeBackground("element-id", "red");
// });

//4. Form Validation with Error Message

function formValidation() {
  let form = document.getElementById("form");
  let errorMes = document.getElementById("errorMes");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    errorMes.innerHTML = "";

    const requiredFields = form.querySelectorAll("[required]");
    requiredFields.forEach((field) => {
      if (field.value.trim() === "") {
        const fieldName = field.name || field.id;
        const error = document.createElement("p");
        error.textContent = `${fieldName} is required`;
        errorMes.appendChild(error);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  formValidation();
});

//În concluzie, acest DOMContentLoaded garantează că funcția
//  de validare a formularului va rula doar după ce întreaga structură HTML a fost încărcată și toate elementele necesare sunt disponibile pentru manipulare.

// Cu novalidate	          Fără novalidate
// Control total prin      JS	Browserul face validarea
// JS rulează mereu	      JS poate fi blocat
// Poți personaliza        UI	Mesaje native de browser

// function formValidation() {
//   const form = document.getElementById("form");
//   const errorMes = document.getElementById("errorMes");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     errorMes.innerHTML = "";

//     let isValid = true;

//     const fields = form.querySelectorAll("[required]");
//     fields.forEach((field) => {
//       const fieldName = field.name || field.id;
//       const value = field.type === "checkbox" ? field.checked : field.value.trim();

//       if (!value) {
//         isValid = false;
//         const error = document.createElement("p");
//         error.textContent = `${fieldName} is required.`;
//         errorMes.appendChild(error);
//       }

//       // Extra: validare email
//       if (field.type === "email" && value) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(field.value)) {
//           isValid = false;
//           const error = document.createElement("p");
//           error.textContent = `Please enter a valid email address.`;
//           errorMes.appendChild(error);
//         }
//       }
//     });

//     if (isValid) {
//       alert("Form submitted successfully!");
//       form.reset();
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", formValidation);

// 5. Image Slideshow Navigation

function slideShow() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const images = document.querySelectorAll(".slideshow-img");
  let currentIndex = 0;

  function showImage(index) {
    // Ascunde toate imaginile
    images.forEach((img) => img.style.display = "none");

    // Afișează imaginea curentă
    images[index].style.display = "block";
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Inițial, arată prima imagine
  showImage(currentIndex);
}

document.addEventListener("DOMContentLoaded", slideShow);


//6. Drag-and-Drop List Reordering

const dragList = document.getElementById('dragList');
let draggedItem = null;

// Add event listeners for drag and drop events
dragList.addEventListener('dragstart', handleDragStart);
dragList.addEventListener('dragover', handleDragOver);
dragList.addEventListener('drop', handleDrop);

// Drag start event handler
function handleDragStart(event) {
  draggedItem = event.target;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', draggedItem.innerHTML);
  event.target.style.opacity = '0.5';
}

// Drag over event handler
function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  const targetItem = event.target;
  if (targetItem !== draggedItem && targetItem.classList.contains('drag-item')) {
    const boundingRect = targetItem.getBoundingClientRect();
    const offset = boundingRect.y + (boundingRect.height / 2);
    if (event.clientY - offset > 0) {
      targetItem.style.borderBottom = 'solid 2px #000';
      targetItem.style.borderTop = '';
    } else {
      targetItem.style.borderTop = 'solid 2px #000';
      targetItem.style.borderBottom = '';
    }
  }
}

// Drop event handler
function handleDrop(event) {
  event.preventDefault();
  const targetItem = event.target;
  if (targetItem !== draggedItem && targetItem.classList.contains('drag-item')) {
    if (event.clientY > targetItem.getBoundingClientRect().top + (targetItem.offsetHeight / 2)) {
      targetItem.parentNode.insertBefore(draggedItem, targetItem.nextSibling);
    } else {
      targetItem.parentNode.insertBefore(draggedItem, targetItem);
    }
  }
  targetItem.style.borderTop = '';
  targetItem.style.borderBottom = '';
  draggedItem.style.opacity = '';
  draggedItem = null;
}

//ALTA VARIANTA
// const list = document.getElementById("draggable-list");
// let draggingEl;

// list.addEventListener("dragstart", e => {
//   if (e.target.tagName === "LI") {
//     draggingEl = e.target;
//     e.target.classList.add("dragging");
//   }
// });

// list.addEventListener("dragend", e => {
//   if (e.target.tagName === "LI") {
//     e.target.classList.remove("dragging");
//   }
// });

// list.addEventListener("dragover", e => {
//   e.preventDefault();
//   const afterElement = getDragAfterElement(list, e.clientY);
//   const dragging = document.querySelector(".dragging");
//   if (afterElement == null) {
//     list.appendChild(dragging);
//   } else {
//     list.insertBefore(dragging, afterElement);
//   }
// });

// function getDragAfterElement(container, y) {
//   const draggableElements = [...container.querySelectorAll("li:not(.dragging)")];

//   return draggableElements.reduce((closest, child) => {
//     const box = child.getBoundingClientRect();
//     const offset = y - box.top - box.height / 2;

//     if (offset < 0 && offset > closest.offset) {
//       return { offset: offset, element: child };
//     } else {
//       return closest;
//     }
//   }, { offset: Number.NEGATIVE_INFINITY }).element;
// }
// let draggingEl = Creează o variabilă draggingEl care va reține elementul pe care îl tragem
// getDragAfterElement caută primul element care este sub cursorul, în raport cu poziția Y.
//container.querySelectorAll("li:not(.dragging)") IL EXCLUDE PE ALA PE CARE IL TRAGI
// /reduce(), closest este numele unui obiect intermediar 
// folosit ca „cel mai apropiat element detectat până acum”.
//reduce() parcurge toate elementele și îl păstrează pe cel care e cel mai aproape de poziția cursorului, 
//offset calculează cât de aproape este cursorul de centrul acelui element.
//getBoundingClientRect  este o funcție standard JavaScript (parte din Web API), definită pentru orice element DOM.
//Ea returnează un obiect cu informații despre poziția și dimensiunea elementului pe ecran:

// const offset = y - box.top - box.height / 2; calculează cât de departe este cursorul față de centrul vertical al fiecărui element.
//insertBefore Metoda inserează un element HTML în DOM înaintea altui element deja existent, ca „frate” în listă (adică nu în interiorul lui).



//7. Toggle Switch Implementation


document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggleSwitch');
  const stateText = document.getElementById('stateText');

  toggle.addEventListener('change', function () {
    if (toggle.checked) {
      stateText.textContent = 'Starea: ON';
    } else {
      stateText.textContent = 'Starea: OFF';
    }
  });
});

//8. Progress Bar Update

//trebuie sa am un bar care sa fie gol display none si care se umple cu o culoare pe 
// masura ce se executa ceva..

let progress = 0;
const totalTasks = 10;
const progressBar = document.getElementById('progressBar');

function addTask() {
  if (progress < 100) {
    progress += 100 / totalTasks;
    updateProgressBar();
  }
}

function resetProgress() {
  progress = 0;
  updateProgressBar();
}

function updateProgressBar() {
  progressBar.style.width = `${progress}%`;
}

//9. Enter Key Detection in Input

const input = document.getElementById("input");
const output = document.getElementById("output")
input.style.color = "orange"
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    output.textContent = "Enter key pressed! Input value: " + input.value;
    output.style.color = "blue"
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const clickableDiv = document.getElementById('clickableDiv');
  const outputDoubleClick = document.getElementById('outputDoubleClick');

  function handleDoubleClick(element, callback) {
    element.addEventListener('dblclick', function () {
      callback();
    });
  }

  // Use the function to handle double-click
  handleDoubleClick(clickableDiv, function () {
    outputDoubleClick.textContent = 'Double-click detected! Time: '
      + new Date().toLocaleTimeString();
    clickableDiv.style.backgroundColor = getRandomColor();
  });

  // Helper function to generate random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});

//11. Event Delegation on List Items

document.addEventListener('DOMContentLoaded', function () {
  const itemList = document.getElementById('itemList');
  const addItemBtn = document.getElementById('addItemBtn');
  const outputt = document.getElementById('result');
  let itemCount = 2;

  // Event delegation: listen for clicks on the parent ul
  itemList.addEventListener('click', function (event) {
    // Check if the clicked element is an LI
    if (event.target.tagName === 'LI') {
      outputt.textContent = `Clicked on: ${event.target.textContent}`;
      console.log(outputt)
      event.target.style.backgroundColor = '#d0d0d0';
    }
  });


  // Add new list item dynamically
  addItemBtn.addEventListener('click', function () {
    itemCount++;
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCount}`;
    itemList.appendChild(newItem);
  });
})
//13. Stop Propagation Example

document.addEventListener('DOMContentLoaded', function () {
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');
  const grandchild = document.getElementById('grandchild');
  const res = document.getElementById('res');

  // Event listener for the parent
  parent.addEventListener('click', function (event) {
    res.textContent += 'Parent clicked! ';
  });

  // Event listener for the child (with stopPropagation)
  child.addEventListener('click', function (event) {
    res.textContent += 'Child clicked! ';
    // Stops the event from bubbling up to the parent
  });

  // Event listener for the grandchild
  grandchild.addEventListener('click', function (event) {
    res.textContent = 'Grandchild clicked! ';
    event.stopPropagation();
  });
});


//15. Debounce Input Event


//Debouncing is a technique used to control how many times 
// we allow a function to be executed over time. When a JavaScript
//  function is debounced with a wait time of X milliseconds, it
//  must wait until after X milliseconds have elapsed since the
//  debounced function was last called.
//A typical use case of debouncing is when responding to user
//  input. When the user is typing, no other action should be 
// taken to avoid the UI becoming laggy

//16. LocalStorage Counter 

document.addEventListener('DOMContentLoaded', function () {

  let count = localStorage.getItem("count") ? JSON.parse(localStorage.getItem("count")) : 0;
  document.getElementById("counter").innerText = count;

  document.getElementById("incrementBtn").addEventListener("click", () => {
    count++;
    localStorage.setItem("count", count)
    //first count is the key, the second count is the value, because so it is saved in localStorage
    document.getElementById("counter").innerText = count;
  })

  document.getElementById("resetBtn").addEventListener("click", () => {
    count = 0;
    localStorage.setItem("count", count)
    document.getElementById("counter").innerText = count;

  })
})
//17. SessionStorage Cart
document.addEventListener('DOMContentLoaded', function () {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Mouse" }
  ];

  let cart = sessionStorage.getItem("cart") ? JSON.parse(sessionStorage.getItem("cart")) : [];

  function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerText = "";

    products.forEach(product => {
      const li = document.createElement("li");
      li.innerHTML = `${product.name} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
      productList.appendChild(li);
    });
  }

  window.addToCart = function (productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      displayCart(); // ✅ corect aici
    }
  };

  function displayCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    if (cart.length === 0) {
      cartList.innerHTML = "<li>Cart is empty</li>";
      return;
    }

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = `${item.name}`;
      cartList.appendChild(li);
    });
  }

  // ✅ Afișează la prima încărcare
  displayProducts();
  displayCart();
});