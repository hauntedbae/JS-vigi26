const nameInput = document.getElementById("name");

// 3 savybes su kuriom galima issitraukti 
// console.log(nameInput.textContent);
// console.log(nameInput.innerText);
// console.log(nameInput.innerHTML);

// nameInput.innerHTML = "<ul><li> Ha ha ha </li></ul>";
nameInput.addEventListener('click', handleClickOnName);

function handleClickOnName(){
    nameInput.style.color = "red";
    nameInput.style.backgroundColor = "blue";
    nameInput.style.textAlign = "right";
    nameInput.style.fontSize = "px";
}

const jumpButton = document.getElementById("jump");

jumpButton.addEventListener('click', handleJump);

jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px";

let inTop = true;

function handleJump(){
    if(inTop) {
        jumpButton.style.cssText = "position: absolute; bottom: 30px; left: 30px";
        // inTop = false;
        jumpButton.textContent = "Jump to top";
    } else {
        jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px";
        // inTop = True;
        jumpButton.textContent = "Jump to bottom";
    }

    inTop = !inTop;
}

const backwardsButton = document.getElementById("backwards");

backwardsButton.addEventListener("click", handleGoBackwards);

let position = 0;
const topLeft = "position: absolute; top: 10px; left: 10px;";
const topRight = "position: absolute; top: 10px; right: 10px;";
const bottomRight = "position: absolute; bottom: 10px; right: 10px;";
const bottomLeft = "position: absolute; bottom: 10px; left: 10px;";

backwardsButton.style.cssText = topLeft;

function handleGoBackwards() {
    if (position === 0){
        backwardsButton.style.cssText = bottomLeft;
    } else if (position === 1){
        backwardsButton.style.cssText = bottomRight;
    } else if (position === 2){
        backwardsButton.style.cssText = topRight;
    } else {
        backwardsButton.style.cssText = topLeft;
        position = -1;
    }

    position++;
}