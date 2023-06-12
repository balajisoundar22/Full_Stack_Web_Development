import './App.css';
import { useState } from 'react';

function App() {
  const [muffinCount, setMuffinCount] = useState(10);
  const [cookieCount, setCookieCount] = useState(10);
  const [totalSold, setTotalSold] = useState(0);

  const buyMuffin = () => {
    if (muffinCount > 0) {
      setMuffinCount(muffinCount - 1);
      setTotalSold(totalSold + 1);
    }
  };

  const buyCookie = () => {
    if (cookieCount > 0) {
      setCookieCount(cookieCount - 1);
      setTotalSold(totalSold + 1);
    }
  };

  return (
    <div>
      <h2>Salem Café</h2>
      <div>
        <h3>Muffins</h3>
        <p>Available: {muffinCount}</p>
        <button onClick={buyMuffin} disabled={muffinCount === 0}>
          Buy Muffin
        </button>
      </div>
      <div>
        <h3>Chocolate Chip Cookies</h3>
        <p>Available: {cookieCount}</p>
        <button onClick={buyCookie} disabled={cookieCount === 0}>
          Buy Cookie
        </button>
      </div>
      <p>Total Items Sold: {totalSold}</p>
    </div>
  );
}

export default App;
