'use strict';

const Table = () => {
  const template = `
    <div class="table__wrapper wrapper">
      <table aria-label="Table results">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Owner email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12401</td>
            <td>ACME Corporation</td>
            <td>tom.hudges@apple.com</td>
          </tr>
          <tr>
            <td>12401</td>
            <td>intera d.o.o.</td>
            <td>the.boss@intera.si</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  return template;
};

export default Table;
