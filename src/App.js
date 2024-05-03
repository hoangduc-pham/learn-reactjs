import React, { useState } from 'react';
import './App.css';

function App() {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetOpen(!bottomSheetOpen);
  };

  return (
    <div className="container">
      <header>
        <h1>Trang Web với Bottom Sheet</h1>
      </header>
      <main>
        <section>
          <h2>Menu</h2>
          <ul className="menu">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </section>
      </main>
      <footer>
        <button className="toggle-bottom-sheet" onClick={toggleBottomSheet}>Toggle Bottom Sheet</button>
        {bottomSheetOpen && (
          <div className="bottom-sheet">
            <h2>Bottom Sheet</h2>
            <ul>
              <li>Action 1</li>
              <li>Action 2</li>
              <li>Action 3</li>
            </ul>
          </div>
        )}
        <p>© 2024 Trang Web với Bottom Sheet</p>
      </footer>
    </div>
  );
}

export default App;
