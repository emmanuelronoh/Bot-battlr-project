// Import React to use JSX and component features
import React from 'react';
// Import the CSS file for styling the SortBar component
import './SortBar.css';

// Define the SortBar component for sorting bots based on different attributes
function SortBar({ sortBy }) {
  return (
    <div>
      {/* Button to sort bots by health attribute */}
      {/* When clicked, it calls the sortBy function with 'health' as the argument */}
      <button onClick={() => sortBy('health')}>Sort by Health</button>

      {/* Button to sort bots by damage attribute */}
      {/* When clicked, it calls the sortBy function with 'damage' as the argument */}
      <button onClick={() => sortBy('damage')}>Sort by Damage</button>

      {/* Button to sort bots by armor attribute */}
      {/* When clicked, it calls the sortBy function with 'armor' as the argument */}
      <button onClick={() => sortBy('armor')}>Sort by Armor</button>
    </div>
  );
}

// Export the SortBar component for use in other parts of the application
export default SortBar;
