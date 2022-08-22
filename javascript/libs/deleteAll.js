import {ul, modifyLeadArray,leadArray} from '../script.js';
import deleteFromLocalStorage from './deleteFromLocalStorage.js';

export default function deleteAll() {
    ul.textContent = '';
    modifyLeadArray([]);
    deleteFromLocalStorage()
}
