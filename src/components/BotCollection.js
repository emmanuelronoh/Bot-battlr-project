import React from 'react'; // Import React to use JSX and component features
import './BotCollection.css'; // Import CSS for styling this component

// Define the BotCollection component to display a list of bots
const BotCollection = ({ bots, addToArmy, deleteBot }) => {
  return (
    // Main container for the bot collection section
    <div className="bot-collection">
      {/* Heading for the bot collection section */}
      <h2>Bot Collection</h2>
      
      {/* Table to display the list of bots */}
      <table className="bot-table">
        {/* Table header defines the column titles */}
        <thead>
          <tr>
            <th>ID</th> {/* Column for displaying bot IDs */}
            <th>Name</th> {/* Column for displaying bot names */}
            <th>Avatar</th> {/* Column for displaying bot avatars */}
            <th>Actions</th> {/* Column for action buttons (e.g., view details, delete) */}
          </tr>
        </thead>
        <tbody>
          {/* Iterate over the bots array to create a row for each bot */}
          {bots.map(bot => (
            <tr key={bot.id}> {/* Unique key prop for each row to help React identify changes */}
              <td>{bot.id}</td> {/* Display the bot's ID */}
              <td>{bot.name}</td> {/* Display the bot's name */}
              <td>
                {/* Display the bot's avatar image */}
                <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
              </td>
              <td>
                {/* Button to view more details about the bot; triggers addToArmy function */}
                <button onClick={() => addToArmy(bot)}>View Details</button>
                {/* Button to delete the bot; triggers deleteBot function */}
                <button onClick={() => deleteBot(bot)} className="delete-button">x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BotCollection; // Export the BotCollection component for use in other parts of the application
