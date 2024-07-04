import './header.css';
import logoNews from '../../images/news-publishing-svgrepo-com .svg';

function Header() {
  return (
    <header className="d-flex p-2 mb-5 align-items-center g-4">
      <img src={ logoNews } alt="" className="logo" />
      <h1 className="mb-0 flex-grow-1 text-center">YOUR NEWS</h1>
    </header>
  );
}

export default Header;
