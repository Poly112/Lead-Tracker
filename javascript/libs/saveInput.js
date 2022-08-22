import {input, leadArray} from '../script.js';
import addToLocalStorage from './addToLocalStorage.js';
import render from './render.js';

export default function saveInput() {
    if (input.value) {
      let value = input.value;
      leadArray.push(value);
      addToLocalStorage()
      render();
      input.value = ''
    }
  }