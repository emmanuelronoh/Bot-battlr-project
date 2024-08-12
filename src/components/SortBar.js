// src/SortBar.js
import React from 'react'; // This lets us use React to build our app
import './SortBar.css'; // This brings in our special design for the SortBar

function SortBar({ sortBy }) {
  return (
    <div>
      {/* This button will help us arrange our toys by how healthy they are */}
      <button onClick={() => sortBy('health')}>Sort by Health</button>

      {/* This button will help us arrange our toys by how much damage they can do */}
      <button onClick={() => sortBy('damage')}>Sort by Damage</button>

      {/* This button will help us arrange our toys by how strong their armor is */}
      <button onClick={() => sortBy('armor')}>Sort by Armor</button>
    </div>
  );
}

export default SortBar; // This lets other parts of the app use our SortBar

