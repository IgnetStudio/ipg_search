'use strict';

// toggle font resizer & dark mode

const root = document.querySelector(':root');
const body = document.querySelector('body');
const toggleFont = document.querySelector('.toggle-font');
const toggleContrast = document.querySelector('.toggle-contrast');

toggleFont.addEventListener('click', () => {
  root.classList.toggle('wcag-size');
});

toggleContrast.addEventListener('click', () => {
  body.classList.toggle('wcag-mode');
});

// call an endpoint for results

async function fetchResults(query = '') {
  const response = await fetch('http://localhost:5000/results?q=' + query);
  const results = await response.json();
  return results;
}

// consume results

async function getData(query = '') {
  try {
    const data = await fetchResults(query);
    drawTable(data); // set values, handle values, set table elements, insert data from API & apply changes
  } catch (error) {
    console.error(error);
  }
}

// fill-up the table with results

const drawTable = (data) => {
  // set values
  const tableBody = document.querySelector('table.table__results > tbody');
  const recordsLength = data.length;
  const recordsCounter = `${recordsLength} records`;
  const noData = 'No data';
  const tableEmpty = `<tr class="table__empty"><td>${noData}</td></tr>`;
  const searchInput = document.querySelector('input[name="search-data"]');
  const searchStatus = document.querySelector('span.search__status');

  // reset values
  searchStatus.innerHTML = '';
  tableBody.innerHTML = '';

  // handle values
  if (recordsLength && searchInput.value) {
    searchInput.classList.remove('input__error');
    searchStatus.classList.remove('error');
    searchInput.classList.add('input__success');
    searchStatus.classList.add('success');
    searchStatus.innerHTML = recordsCounter;
  } else if (!recordsLength && searchInput.value) {
    searchInput.classList.remove('input__success');
    searchInput.classList.add('input__error');
    searchStatus.classList.remove('success');
    searchStatus.classList.add('error');
    searchStatus.innerHTML = noData;
    tableBody.innerHTML = tableEmpty;
  } else {
    searchInput.classList.remove('input__success', 'input__error');
    searchStatus.classList.remove('success', 'error');
  }

  // DOM element class manipulation optimizer
  const fragment = document.createDocumentFragment();

  data.forEach((item, index) => {
    // set table elements
    const tableRow = document.createElement('tr');
    const tableCellId = document.createElement('td');
    const tableCellName = document.createElement('td');
    const tableCellEmail = document.createElement('td');

    // insert data from API
    tableCellId.innerText = item.id;
    tableCellName.innerText = item.name;
    tableCellEmail.innerText = item.email;

    // apply changes
    tableRow.appendChild(tableCellId);
    tableRow.appendChild(tableCellName);
    tableRow.appendChild(tableCellEmail);
    fragment.appendChild(tableRow);
  });
  tableBody.appendChild(fragment);
};

// search box handler

const Data = () => {
  getData();

  window.onload = () => {
    const searchInput = document.querySelector('input[name="search-data"]');
    let debouncer;

    // search box value
    searchInput.addEventListener('input', async (e) => {
      const query = e.target.value;

      // search box call optimizer
      clearTimeout(debouncer);
      debouncer = setTimeout(async () => {
        await getData(query);
      }, 500);
    });
  };
};

Data();
