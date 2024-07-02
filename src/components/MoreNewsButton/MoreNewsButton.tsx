import React from 'react';

function MoreNewsButton({ setPage }: {
  setPage: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <button
      onClick={ () => setPage((prevPage) => prevPage + 10) }
      className="btn btn-warning mt-5"
      aria-label="Carregar mais notícias"
    >
      Get more news
    </button>
  );
}

export default MoreNewsButton;
