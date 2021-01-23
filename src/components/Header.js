'use strict';

const Header = () => {
  const template = `
    <header class="header__wrapper wrapper">
      <div class="header__brand">
        <img src="/img/logo.png" srcset="/img/logo.png 1x, /img/logo@2x.png 2x" alt="logo" tabindex="0">
        <h1>Platform Admin</h1>
      </div>
      <div class="header__filter">
        <span>Filter:</span>
        <nav class="header__navigation">
          <ul>
            <li><a href="#">All</a></li>
            <li><a href="#">Free</a></li>
            <li><a href="#">Paying</a></li>
            <li class="header__filter-overlay"></li>
          </ul>
        </nav>
      </div>
    </header>
    `;

  return template;
};

export default Header;
