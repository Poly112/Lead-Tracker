import { leadArray, ul } from "../script.js";

export default function process2() {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let img = document.createElement("img");
    let element = leadArray[leadArray.length - 1];

    a.setAttribute("href", `${element}`);
    a.setAttribute("target", "_blank");
    img.setAttribute("src", "./icons/icons8-delete-67.png");
    a.textContent = element;
    li.appendChild(a);
    li.appendChild(img);
    li.classList.add("flex");
    ul.appendChild(li);
}
