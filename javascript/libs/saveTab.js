import {leadArray} from '../script.js';
import addToLocalStorage from './addToLocalStorage.js';
import process2 from './process2.js';

export default function saveTab() {
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
      leadArray.push(tabs[0].url);
      addToLocalStorage();
      process2();
    });
  }