import render from "./libs/render.js";
import saveTab from "./libs/saveTab.js";
import saveInput from "./libs/saveInput.js";
import deleteAll from "./libs/deleteAll.js";
import _delete from "./libs/delete.js";

const input = document.querySelector('input')
const save_Input = document.querySelector('#saveInput-btn')
const save_Tab = document.querySelector('#saveTab-btn')
const delete_All = document.querySelector('#delete-btn');

let leadArray = [];
let ul = document.querySelector('ul');

render();

save_Tab.addEventListener('click', saveTab)
save_Input.addEventListener('click', saveInput)
delete_All.addEventListener('click', deleteAll);
ul.addEventListener('click', (e) => {
  _delete(e);
})

export function modifyLeadArray(value) {
  leadArray = value;
}

export {
  ul, leadArray, input
};