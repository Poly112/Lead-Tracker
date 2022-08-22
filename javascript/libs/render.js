import { modifyLeadArray,leadArray, input} from '../script.js';

import getFromLocalStorage from './getFromLocalStorage.js';
import process1 from './process1.js';
import process2 from './process2.js';

export default function render() {
    let result = getFromLocalStorage();
    if (result) {
      modifyLeadArray(result);
    };
    if (!input.value) {
      process1();
    } else {
      process2();
    }
}