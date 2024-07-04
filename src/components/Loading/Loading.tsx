import { CSSProperties } from 'react';
import { FadeLoader } from 'react-spinners';
import useNews from '../../hooks/useNews';

function Loading() {
  const { isLoading, isFetchingNextPage } = useNews();
  const color = 'gray';
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    marginTop: '30px',
  };

  return (
    <div className="sweet-loading">
      <FadeLoader
        color={ color }
        loading={ isLoading || isFetchingNextPage }
        cssOverride={ override }
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
