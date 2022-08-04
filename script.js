addEventListener('load', () => {
  const input = document.querySelector('input')
  const save_Input = document.querySelector('#saveInput-btn')
  const save_Tab = document.querySelector('#saveTab-btn')
  const delete_All = document.querySelector('#delete-btn');
  let leadArray = [];
  let ul = document.querySelector('ul')

  function saveInput() {
    if (input.value) {
      let value = input.value;
      leadArray.push(value);
      addToLocalStorage()
      render();
      input.value = ''
    }
  }

  function addToLocalStorage() {
    let myLeads = JSON.stringify(leadArray);
    localStorage.setItem('leadArray', myLeads)
  }

  function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('leadArray'))
  }

  function deleteFromLocalStorage() {
    localStorage.clear()
  }

  function render() {
    let result = getFromLocalStorage();
    if (result) {
      console.log(result)
      leadArray = result
    };
    if (!input.value) {
      for (let element of leadArray) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', `${element}`);
        a.setAttribute('target', '_blank');
        a.textContent = element;
        li.appendChild(a)
        ul.appendChild(li);
      }
    } else {
      let li = document.createElement('li');
      let a = document.createElement('a');
      for (let element of leadArray) {
        a.setAttribute('href', `${element}`);
        a.setAttribute('target', '_blank');
        a.textContent = element;
        li.appendChild(a)
        ul.appendChild(li);
      }
    }
  }
  render()

  function deleteAll() {
    ul.textContent = ''
    leadArray = [];
    deleteFromLocalStorage()
  }

  function saveTab() {
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
      leadArray.push(tabs[0].url);
      addToLocalStorage();
      let li = document.createElement('li');
      let a = document.createElement('a');
      for (let element of leadArray) {
        a.setAttribute('href', `${element}`);
        a.setAttribute('target', '_blank');
        a.textContent = element;
        li.appendChild(a)
        ul.appendChild(li);
      }
    });
  }

  save_Tab.addEventListener('click', saveTab)
  save_Input.addEventListener('click', saveInput)
  delete_All.addEventListener('dblclick', deleteAll)
})