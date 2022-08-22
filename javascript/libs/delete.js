import {leadArray, modifyLeadArray, ul} from '../script.js';
import addToLocalStorage from './addToLocalStorage.js';
import deleteFromLocalStorage from './deleteFromLocalStorage.js';
import getFromLocalStorage from './getFromLocalStorage.js';
import render from './render.js';

export default function _delete(e) {
    if (e.target.tagName.toLowerCase() == 'img') {
        const sibling = e.target.previousElementSibling;

        let myLeads = getFromLocalStorage();
        modifyLeadArray([]);
        const tempArray = sliceOne();
        modifyLeadArray(tempArray);
        ul.textContent = '';
        deleteFromLocalStorage();
        addToLocalStorage();
        render();

        function sliceOne() {
            const index = myLeads.indexOf(sibling.getAttribute('href'));
            if (index > -1) {
                myLeads.splice(index, 1);
            }
            return myLeads;
        }
    }
}
