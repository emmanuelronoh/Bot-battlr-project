// Import necessary modules and components
import React, { useState, useEffect } from 'react'; // Import React and hooks for state and side-effects
import BotCollection from './components/BotCollection'; // Import BotCollection component to display bot collection
import YourBotArmy from './components/YourBotArmy'; // Import YourBotArmy component to manage user's army
import BotSpecs from './components/BotSpecs'; // Import BotSpecs component to show details of a selected bot
import SortBar from './components/SortBar'; // Import SortBar component to handle sorting of bots
import FilterBar from './components/FilterBar'; // Import FilterBar component to filter bots by class
import './App.css'; // Import CSS for styling

// Main component function for the application
function App() {
  // State variables to manage application data
  const [bots, setBots] = useState([]); // State for all fetched bots
  const [army, setArmy] = useState([]); // State for the user's army of bots
  const [selectedBot, setSelectedBot] = useState(null); // State for the currently selected bot
  const [sortedBots, setSortedBots] = useState([]); // State for bots sorted by criteria
  const [filterClass, setFilterClass] = useState(null); // State for class-based filter criteria

  // Fetch bots from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:8001/bots') // API endpoint to fetch bots
      .then(response => response.json()) // Convert response to JSON
      .then(data => {
        setBots(data); // Update bots state with fetched data
        setSortedBots(data); // Initialize sorted bots with the fetched data
      });
  }, []); // Empty dependency array ensures this runs only once

  // Add a bot to the user's army if it's not already included
  const addToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) { // Check if bot is already in the army
      setArmy([...army, bot]); // Add the bot to the army array
      setSelectedBot(null); // Clear selected bot state
    }
  };

  // Remove a bot from the user's army
  const removeFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id)); // Filter out the bot from the army array
  };

  // Delete a bot from both the server and local state
  const deleteBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { // API endpoint to delete the bot
      method: 'DELETE', // HTTP method to delete the resource
    }).then(() => {
      // Update local state to reflect the deletion
      setBots(bots.filter(b => b.id !== bot.id));
      setSortedBots(sortedBots.filter(b => b.id !== bot.id));
      setArmy(army.filter(b => b.id !== bot.id));
    });
  };

  // Sort bots based on a specified property (e.g., health)
  const sortBy = (key) => {
    const sorted = [...sortedBots].sort((a, b) => b[key] - a[key]); // Sort in descending order
    setSortedBots(sorted); // Update sorted bots state
  };

  // Filter bots based on their class (e.g., Support, Medic)
  const filterByClass = (cls) => {
    setFilterClass(cls); // Update filter criteria
    const filtered = bots.filter(bot => bot.bot_class === cls); // Apply filter
    setSortedBots(filtered); // Update sorted bots with filtered results
  };

  // Determine which bots to display based on filter criteria
  const filteredBots = filterClass ? bots.filter(bot => bot.bot_class === filterClass) : sortedBots;

  // Render the application component
  return (
    <div> {/* Main container */}
      <h1>Bot Battlr</h1> {/* Application title */}
      
      {/* Render the filter bar for selecting bot class */}
      <FilterBar filterByClass={filterByClass} /> 
      
      {/* Render the sort bar for sorting bots */}
      <SortBar sortBy={sortBy} /> 
      
      {/* Conditionally render based on whether a bot is selected */}
      {selectedBot ? (
        // Display selected bot details if a bot is selected
        <BotSpecs bot={selectedBot} onEnlist={addToArmy} /> 
      ) : (
        <>
          {/* Render the user's army and provide options to remove or delete bots */}
          <YourBotArmy 
            army={army} 
            removeFromArmy={removeFromArmy} 
            deleteBot={deleteBot} 
          /> 
          
          {/* Render the bot collection with applied filters and sorting */}
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

export default App; // Export App component for use in other parts of the application
