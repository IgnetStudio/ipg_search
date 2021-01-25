'use strict';

// set static search box

const Search = () => {
  const template = `
  <div class="search__wrapper wrapper">
    <div class="search__box">
      <i class="search__icon"></i>
      <input class="search__input" type="search" placeholder="Search" name="search-data" id="search-data" aria-label="Search through site content">
      <span class="search__status"></span>
    </div>
    <button class="search__button" type="button">Create new Account</button>
  </div>
  `;

  return template;
};

export default Search;
