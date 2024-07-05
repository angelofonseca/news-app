import { Dropdown } from 'react-bootstrap';
import { RxHamburgerMenu } from 'react-icons/rx';
import useNews from '../../hooks/useNews';

function DropDownBtn() {
  const { category, setCategory } = useNews();
  const selectedDropdown = 'selected-dropdown';

  return (
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
  );
}

export default DropDownBtn;
