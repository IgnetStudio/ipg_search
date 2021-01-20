'use strict';

const Search = () => {
  const template = `
      <div class="search__wrapper wrapper">
        <div class="search__box">
          <i class="search__icon"></i>
          <input class="search__input" type="search" placeholder="Search" id="search-box" name="search-box" aria-label="Search through site content">
        </div>
        <button class="search__button" type="button">Create new Account</button>
      </div>
      `;

  return template;
};

export default Search;
