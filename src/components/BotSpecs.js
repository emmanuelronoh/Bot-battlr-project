// Import React to use its features
import React from 'react';
// Import the CSS file to style this component
import './BotSpecs.css';

// This is a function that makes a special part of our page to show details about a bot
function BotSpecs({ bot, onEnlist }) {
  return (
    <div>
      {/* Show the bot's name in a big heading */}
      <h2>{bot.name}</h2>
      {/* Show the bot's picture with a width of 100 pixels */}
      <img src={bot.avatar_url} alt={bot.name} width="100" />
      {/* Show the bot's health */}
      <p>Health: {bot.health}</p>
      {/* Show the bot's damage */}
      <p>Damage: {bot.damage}</p>
      {/* Show the bot's armor */}
      <p>Armor: {bot.armor}</p>
      {/* Show the bot's class/type */}
      <p>Class: {bot.bot_class}</p>
      {/* Show the bot's catchphrase */}
      <p>Catchphrase: {bot.catchphrase}</p>
      {/* Button that lets you add this bot to your army */}
      <button onClick={() => onEnlist(bot)}>Enlist Bot</button>
    </div>
  );
}

// This lets us use the BotSpecs function in other parts of our app
export default BotSpecs;

