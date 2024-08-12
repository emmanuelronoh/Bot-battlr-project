import React from 'react'; // Import React library so we can use React features
import './BotCollection.css'; // Import the CSS file to style this component

// Create a BotCollection component that shows a list of bots
const BotCollection = ({ bots, addToArmy, deleteBot }) => {
  return (
    // This is the main container for the bot collection
    <div className="bot-collection">
      {/* A heading for the section */}
      <h2>Bot Collection</h2>
      {/* A table to display the list of bots */}
      <table className="bot-table">
        {/* Table header with column names */}
        <thead>
          <tr>
            <th>ID</th> {/* Column for bot ID */}
            <th>Name</th> {/* Column for bot Name */}
            <th>Avatar</th> {/* Column for bot Avatar */}
            <th>Actions</th> {/* Column for actions we can take with the bot */}
          </tr>
        </thead>
        <tbody>
          {/* Loop through each bot and create a row for it */}
          {bots.map(bot => (
            <tr key={bot.id}> {/* Unique key for each row */}
              <td>{bot.id}</td> {/* Show bot's ID */}
              <td>{bot.name}</td> {/* Show bot's Name */}
              <td>
                {/* Show bot's Avatar image */}
                <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
              </td>
              <td>
                {/* Button to view more details about the bot */}
                <button onClick={() => addToArmy(bot)}>View Details</button>
                {/* Button to delete the bot */}
                <button onClick={() => deleteBot(bot)} className="delete-button">x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BotCollection; // Export the component so it can be used in other parts of the app
