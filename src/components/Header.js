const Header = () => {
  const template = `
    <header class="header__wrapper wrapper">
      <div class="header__brand">
        <img src="./img/logo.png" alt="logo" tabindex="0" />
        <h1>Platform Admin</h1>
      </div>
      <div class="header__filter">
        <span>Filter:</span>
        <ul>
          <li><a href="#" class="selected">All</a></li>
          <li><a href="#">Free</a></li>
          <li><a href="#">Paying</a></li>
        </ul>
      </div>
    </header>
    `;

  return template;
};

export default Header;
