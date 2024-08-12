// We bring in the React library and the CSS file to make our FilterBar look nice
import React from 'react';
import './FilterBar.css';

// This is like a recipe for making a FilterBar
function FilterBar({ filterByClass }) {
  // Here we list different kinds of bot characters
  const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];
  
  // This part creates the buttons for each kind of bot
  return (
    <div>
      {/* For each bot kind, make a button */}
      {classes.map(cls => (
        <button key={cls} onClick={() => filterByClass(cls)}>
          {cls}
        </button>
      ))}
    </div>
  );
}

// We make sure this FilterBar can be used somewhere else in the app
export default FilterBar;
