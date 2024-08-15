// Import React to use JSX and component features
import React from 'react';
// Import the CSS file to apply styles specific to this component
import './FilterBar.css';

// Define the FilterBar component for filtering bots by class
function FilterBar({ filterByClass }) {
  // List of bot classes to filter by
  const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];
  
  // Render the filter bar with buttons for each bot class
  return (
    <div>
      {/* Iterate over the classes array to create a button for each bot class */}
      {classes.map(cls => (
        // Each button represents a bot class and triggers filtering when clicked
        <button 
          key={cls} // Unique key for each button to help React track changes
          onClick={() => filterByClass(cls)} // Call filterByClass with the class name when button is clicked
        >
          {cls} {/* Display the class name on the button */}
        </button>
      ))}
    </div>
  );
}

// Export the FilterBar component so it can be used in other parts of the application
export default FilterBar;
