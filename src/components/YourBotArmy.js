// src/components/YourBotArmy.js

import React from 'react'; // Import React to use React features like components
import './YourBotArmy.css'; // Import CSS styles to make the component look nice

// Define a component named YourBotArmy
const YourBotArmy = ({ army, removeFromArmy, deleteBot }) => {
  return (
    <div className="your-bot-army"> {/* This is the main container for the YourBotArmy section */}
      <h2>Your Bot Army</h2> {/* This is the heading that shows "Your Bot Army" */}
      
      {/* Check if the army has no bots */}
      {army.length === 0 ? (
        // incase there are no bots show this message
        <p>No bots enlisted yet.</p> 
      ) : (
        <table className="army-table"> {/* Create a table to display the bots */}
          <thead> {/* Table header section */}
            <tr> {/* Table row for headers */}
              <th>ID</th> {/* Header for bot ID */}
              <th>Name</th> {/* Header for bot name */}
              <th>Avatar</th> {/* Header for bot avatar */}
              <th>Actions</th> {/* Header for action buttons */}
            </tr>
          </thead>
          <tbody> {/* Table body section */}
            {/* Loop through each bot in the army */}
            {army.map(bot => (
              <tr key={bot.id}> {/* Create a table row for each bot */}
                <td>{bot.id}</td> {/* Display the bot's ID */}
                <td>{bot.name}</td> {/* Display the bot's name */}
                <td>
                  {/* Show the bot's avatar image */}
                  <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
                </td>
                <td>
                  {/* Button to remove the bot from the army */}
                  <button onClick={() => removeFromArmy(bot)}>Remove</button>
                  {/* Button to delete the bot */}
                  <button onClick={() => deleteBot(bot)} className="delete-button">x</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default YourBotArmy; // Export the YourBotArmy component so it can be used in other parts of the app

