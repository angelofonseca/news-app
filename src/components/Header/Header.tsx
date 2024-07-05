/* eslint-disable jsx-a11y/control-has-associated-label */
import './header.css';
import { Dropdown } from 'react-bootstrap';
import { RxHamburgerMenu } from 'react-icons/rx';
import logoNews from '../../images/news-publishing-svgrepo-com .svg';
import useNews from '../../hooks/useNews';

function Header() {
  const { category, setCategory } = useNews();
  const selectedDropdown = 'selected-dropdown';
  return (
    <header className="d-flex align-items-center g-4">
      <button className="logo-btn" onClick={ () => setCategory('recentes') }>
        <img src={ logoNews } alt="" className="logo" />
      </button>
      <h1 className="mb-0 flex-grow-1 text-center">YOUR NEWS</h1>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <RxHamburgerMenu className="hamburger-icon" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={ () => setCategory('recentes') }
            className={ `${category === 'recentes' ? selectedDropdown : ''}` }
          >
            Mais Recentes
          </Dropdown.Item>
          <Dropdown.Item
            onClick={ () => setCategory('release') }
            className={ `${category === 'release' ? selectedDropdown : ''}` }
          >
            Releases
          </Dropdown.Item>
          <Dropdown.Item
            onClick={ () => setCategory('noticia') }
            className={ `${category === 'noticia' ? selectedDropdown : ''}` }
          >
            Notícias
          </Dropdown.Item>
          <Dropdown.Item
            onClick={ () => setCategory('favoritas') }
            className={ `${category === 'favoritas' ? selectedDropdown : ''}` }
          >
            Favoritas
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
}

export default Header;
