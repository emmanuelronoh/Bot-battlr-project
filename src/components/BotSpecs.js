// Import React to use JSX and component features
import React from 'react';
// Import the CSS file to apply specific styles for this component
import './BotSpecs.css';

// Define the BotSpecs component to display detailed information about a bot
function BotSpecs({ bot, onEnlist }) {
  return (
    <div className='div'>
      {/* Display the bot's name in a prominent heading */}
      <h2>{bot.name}</h2>
      
      {/* Display the bot's avatar image with a fixed width of 100 pixels */}
      <img src={bot.avatar_url} alt={bot.name} width="100" />
      
      {/* Display the bot's health attribute */}
      <p>Health: {bot.health}</p>
      
      {/* Display the bot's damage attribute */}
      <p>Damage: {bot.damage}</p>
      
      {/* Display the bot's armor attribute */}
      <p>Armor: {bot.armor}</p>
      
      {/* Display the bot's class/type (e.g., Support, Medic) */}
      <p>Class: {bot.bot_class}</p>
      
      {/* Display the bot's catchphrase */}
      <p>Catchphrase: {bot.catchphrase}</p>
      
      {/* Button to enlist this bot into the user's army */}
      {/* Calls the onEnlist function passed as a prop with the current bot as an argument */}
      <button onClick={() => onEnlist(bot)}>Enlist Bot</button>
    </div>
  );
}

// Export the BotSpecs component for use in other parts of the application
export default BotSpecs;

