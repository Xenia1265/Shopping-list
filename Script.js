const myInput = document.querySelector("#myInput");
const addingButton = document.querySelector("#addItem");
const list = document.querySelector("#sList");

myInput.addEventListener ("keydown", (e) => {
    if (e.key === "Enter") {
        addOne();
    }
});

addingButton.onclick = addOne;

function addOne() {
    if (myInput.value.trim() === "") {
        return;
    }
    const item = document.createElement("li");
    item.textContent = myInput.value;
    
    const removingButton = document.createElement("button");
    removingButton.className = "removeItem";
    removingButton.textContent = "Remove";
    removingButton.addEventListener("click", () => item.remove());
    
    item.appendChild(removingButton);
    list.appendChild(item);
    
    myInput.value = "";
    myInput.focus();
}