const input = document.querySelector("input");
const textContainer = document.querySelector(".text-container");
const addBtn = document.querySelector("#add");
const sort = document.querySelector("#sort");
const deleteInput = document.querySelector(".input > svg");

deleteInput.addEventListener("click", (e) => {
  input.value = "";
});

addBtn.addEventListener("click", (e) => {
  const text = document.createElement("div");
  text.classList.add("text");
  text.innerHTML = `
    <p>${input.value}</p>
    <button class="delete">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4" />
            <path d="M6 6L14 14" stroke="#C4C4C4" />
            <path d="M6 14L14 6" stroke="#C4C4C4" />
        </svg>
    </button>
    `;
  textContainer.appendChild(text);
  input.value = "";
});

let check = true;

/second/;

document.addEventListener("click", (e) => {
  console.log(e.target.childNodes);
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
    console.log(e.target.parentNode, "hello world");
  }
  if (
    e.target.getAttribute("viewBox") &&
    e.target.parentNode.className == "delete"
  ) {
    e.target.parentNode.parentNode.remove();
  }
});

sort.addEventListener("click", (e) => {
  const textSort = [...document.querySelectorAll(".text > p")]
    .map((text) => text.textContent)
    .sort();

  if (check) {
    console.log(textSort);
    check = false;
    sort.innerHTML = `
    <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="15" width="2.5" height="12.5" transform="rotate(-180 5 15)" fill="black" />
                <rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)" fill="black" />
                <rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)" fill="black" />
                <rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)" fill="black" />
                <path d="M3.75 6.55671e-07L6.99759 4.6875L0.502404 4.6875L3.75 6.55671e-07Z" fill="black" />
            </svg>`;

    document.querySelectorAll(".text > p").forEach((item, i) => {
      item.textContent = textSort[i];
    });
  } else {
    textSort.reverse();
    document.querySelectorAll(".text > p").forEach((item, i) => {
      item.textContent = textSort[i];
    });
    check = true;
    sort.innerHTML = `
    <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" width="2.5" height="12.5" fill="black"/>
                <rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)" fill="black"/>
                <rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)" fill="black"/>
                <rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)" fill="black"/>
                <path d="M3.75 15L0.502405 10.3125L6.9976 10.3125L3.75 15Z" fill="black"/>
                </svg>`;
  }
});