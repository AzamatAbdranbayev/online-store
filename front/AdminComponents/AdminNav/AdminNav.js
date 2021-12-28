import Link from 'next/link';

const AdminNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Главная</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link href="/projectSupport/tyresList">
                <a className="nav-link"> Лист товаров</a>
              </Link>
              <Link href="/projectSupport/addtyres">
                <a className="nav-link"> Добавить автошины</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNav;
