const panels = document.querySelectorAll(".panel") /* get nodelist of all .panels */

function toggleOpen() {
    this.classList.toggle("open")
}

function toggleActive(e) {
    console.log(e.propertyName)
    // using .includes("flex" instead of === "flex-grow" because Safari calls flex-grow flex)
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active")
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen))

panels.forEach(panel => panel.addEventListener("transitionend", toggleActive))