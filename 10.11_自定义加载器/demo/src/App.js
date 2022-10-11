import './App.css';
import ContentLoader, { List, BulletList, Instagram, Facebook } from 'react-content-loader'
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false)
    }, 3000);

    return () => {
      clearTimeout(t)
    }
  }, []);

  return (
    <div className="App">
      {
        loading ? (<>
          <header className="App-header">
            <h1>List</h1>
            <List></List>
            <h1>BulletList</h1>
            <BulletList></BulletList>
            <h1>Instagram</h1>
            <Instagram></Instagram>
            <h1>Facebook</h1>
            <Facebook></Facebook>
            <h1>ContentLoader</h1>
            <ContentLoader speed={2} width={400} height={160}>
              <rect x="0" y="0" rx="5" ry="5" width="70" height="70"></rect>
              <rect x="80" y="17" rx="4" ry="4" width="300" height="13"></rect>
              <rect x="80" y="40" rx="3" ry="3" width="250" height="10"></rect>
            </ContentLoader>
          </header></>) : (<h1>Data is here</h1>)
      }
    </div>
  );
}

export default App;
