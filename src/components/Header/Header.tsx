/* eslint-disable jsx-a11y/control-has-associated-label */
import './header.css';
import { useEffect, useState } from 'react';
import logoNews from '../../images/news-publishing-svgrepo-com .svg';
import useNews from '../../hooks/useNews';
import Categories from '../Categories/Categories';
import DropDownBtn from '../DropDownBtn/DropDownBtn';

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { setCategory } = useNews();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="d-flex justify-content-between align-items-center">
      <button className="logo-btn" onClick={ () => setCategory('recentes') }>
        <img src={ logoNews } alt="" className="logo" />
      </button>
      <h1 className="mb-0 text-center">YOUR NEWS</h1>
      {windowWidth < 768 ? (
        <DropDownBtn />
      ) : (
        <Categories />
      )}
    </header>
  );
}

export default Header;
