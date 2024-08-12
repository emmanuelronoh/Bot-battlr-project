// Import necessary modules and components
import React, { useState, useEffect } from 'react'; // Import React and hooks
import BotCollection from './components/BotCollection'; // Import BotCollection component
import YourBotArmy from './components/YourBotArmy'; // Import YourBotArmy component
import BotSpecs from './components/BotSpecs'; // Import BotSpecs component
import SortBar from './components/SortBar'; // Import SortBar component
import FilterBar from './components/FilterBar'; // Import FilterBar component
import './App.css'; // Import the CSS file for styling

// Main component function for the app
function App() {
  // State variables to store data
  const [bots, setBots] = useState([]); // List of all bots
  const [army, setArmy] = useState([]); // List of bots added to the user's army
  const [selectedBot, setSelectedBot] = useState(null); // Currently selected bot
  const [sortedBots, setSortedBots] = useState([]); // List of bots sorted based on a criteria
  const [filterClass, setFilterClass] = useState(null); // Class of bot to filter by

  // Fetch bots from the server when the component first loads
  useEffect(() => {
    fetch('http://localhost:8001/bots') // Request the list of bots
      .then(response => response.json()) // Convert the response to JSON
      .then(data => {
        setBots(data); // Save the bots in state
        setSortedBots(data); // Also save in the sorted bots state
      });
  }, []); // Empty dependency array means this runs once when the component loads

  // Function to add a bot to the user's army
  const addToArmy = (bot) => {
    // Check if the bot is not already in the army
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]); // Add the bot to the army
      setSelectedBot(null); // Clear the selected bot
    }
  };

  // Function to remove a bot from the user's army
  const removeFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id)); // Remove the bot from the army list
  };

  // Function to delete a bot from the server and local state
  const deleteBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { // Send a DELETE request to the server
      method: 'DELETE', // Specify the method as DELETE
    }).then(() => {
      // Update the lists to remove the deleted bot
      setBots(bots.filter(b => b.id !== bot.id));
      setSortedBots(sortedBots.filter(b => b.id !== bot.id));
      setArmy(army.filter(b => b.id !== bot.id));
    });
  };

  // Function to sort the bots based on a given property (e.g., health)
  const sortBy = (key) => {
    const sorted = [...sortedBots].sort((a, b) => b[key] - a[key]); // Sort the bots
    setSortedBots(sorted); // Save the sorted list
  };

  // Function to filter bots based on their class (e.g., Support, Medic)
  const filterByClass = (cls) => {
    setFilterClass(cls); // Set the filter class
    const filtered = bots.filter(bot => bot.bot_class === cls); // Filter the bots
    setSortedBots(filtered); // Save the filtered list
  };

  // Determine which bots to display based on the filter
  const filteredBots = filterClass ? bots.filter(bot => bot.bot_class === filterClass) : sortedBots;

  // Render the component
  return (
    <div> {/* Container for all the content */}
      <h1>Bot Battlr</h1> {/* Main title of the app */}
      
      {/* Display filter options */}
      <FilterBar filterByClass={filterByClass} /> 
      
      {/* Display sorting options */}
      <SortBar sortBy={sortBy} /> 
      
      {/* Check if a bot is selected */}
      {selectedBot ? (
        // If a bot is selected, show its details
        <BotSpecs bot={selectedBot} onEnlist={addToArmy} /> 
      ) : (
        <>
          {/* If no bot is selected, show the user's army */}
          <YourBotArmy 
            army={army} 
            removeFromArmy={removeFromArmy} 
            deleteBot={deleteBot} 
          /> 
          
          {/* Show the collection of all bots with filtering and sorting applied */}
          <BotCollection 
            bots={filteredBots} 
            addToArmy={setSelectedBot} 
            deleteBot={deleteBot} 
          /> 
        </>
      )}
    </div>
  );
}

export default App; // Export the App component for use in other files
