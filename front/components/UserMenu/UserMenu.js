import { useSelector } from 'react-redux';
import Image from 'next/image';
import customer from '../../public/customer.svg';
import Link from 'next/link';

const UserMenu = () => {
  const state = useSelector((state) => state.user);
  const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  return (
    <>
      <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserMenu;
