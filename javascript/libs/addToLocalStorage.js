import {leadArray} from '../script.js';

export default function addToLocalStorage() {
    let myLeads = JSON.stringify(leadArray);
    localStorage.setItem('leadArray', myLeads)
  }
