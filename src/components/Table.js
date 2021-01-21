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

// fetch & pass results

async function fetchResults() {
  const response = await fetch('http://localhost:5000/results');
  const results = await response.json();
  return results;
}

async function passData() {
  try {
    const data = await fetchResults();
    drawTable(data); // merge static table & data
  } catch (error) {
    console.error(error);
  }
}

passData(); // to table below

function drawTable(data) {
  const tableBody = document.querySelector('table > tbody');

  data.forEach(function (item, index) {
    // set table elements
    const tableRow = document.createElement('tr');
    const tableCellId = document.createElement('td');
    const tableCellName = document.createElement('td');
    const tableCellEmail = document.createElement('td');

    // pass data to cells
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

export default Table;
