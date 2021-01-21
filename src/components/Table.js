'use strict';

// set static table

const Table = () => {
  const template = `
    <div class="table__wrapper wrapper">
      <table class="table__results" aria-label="Table results">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Owner email</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  `;

  return template;
};

// consume results

async function fetchResults(query = '') {
  const response = await fetch('http://localhost:5000/results?q=' + query);
  const results = await response.json();
  return results;
}

async function getData(query = '') {
  try {
    data = await fetchResults(query);
    drawTable(data); // export data to static table
  } catch (error) {
    console.error(error);
  }
}

function drawTable(data) {
  const tableBody = document.querySelector('table > tbody');

  // handle values
  tableBody.innerHTML = '';
  if (!data.length) {
    tableBody.innerHTML = 'no data';
  }

  data.forEach(function (item, index) {
    // set table elements
    const tableRow = document.createElement('tr');
    const tableCellId = document.createElement('td');
    const tableCellName = document.createElement('td');
    const tableCellEmail = document.createElement('td');

    // fill-up the table
    tableCellId.innerText = item.id;
    tableCellName.innerText = item.name;
    tableCellEmail.innerText = item.email;

    // apply changes
    tableRow.appendChild(tableCellId);
    tableRow.appendChild(tableCellName);
    tableRow.appendChild(tableCellEmail);
    tableBody.appendChild(tableRow);
  });
}

let data;
getData();

window.onload = function () {
  const searchInput = document.querySelector('input[name="search-data"]');
  let debouncer;

  // value interception
  searchInput.addEventListener('keyup', async (e) => {
    const query = e.target.value;

    // 1 second to optimize search box call
    clearTimeout(debouncer);
    debouncer = setTimeout(async () => {
      await getData(query);
    }, 1000);
  });
};

export default Table;
