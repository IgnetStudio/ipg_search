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

export default Table;
