const panels = document.querySelectorAll(".panel") /* get nodelist of all .panels */

function toggleOpen() {
    this.classList.toggle("open")
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen))