// Import React to use JSX and component features
import React from 'react';
// Import the CSS file to style the YourBotArmy component
import './YourBotArmy.css';

// Define the YourBotArmy component to display the user's bot army
const YourBotArmy = ({ army, removeFromArmy, deleteBot }) => {
  return (
    <div className="your-bot-army"> {/* Main container for the YourBotArmy section */}
      <h2>Your Bot Army</h2> {/* Heading that indicates the section for the user's bot army */}
      
      {/* Conditional rendering to check if the army is empty */}
      {army.length === 0 ? (
        // Message displayed when no bots are in the army
        <p>No bots enlisted yet.</p> 
      ) : (
        <table className="army-table"> {/* Table to display the list of bots in the army */}
          <thead> {/* Table header containing column titles */}
            <tr> {/* Header row */}
              <th>ID</th> {/* Column header for bot ID */}
              <th>Name</th> {/* Column header for bot name */}
              <th>Avatar</th> {/* Column header for bot avatar */}
              <th>Actions</th> {/* Column header for action buttons */}
            </tr>
          </thead>
          <tbody> {/* Table body containing the rows of bot data */}
            {/* Map over each bot in the army to create a row for it */}
            {army.map(bot => (
              <tr key={bot.id}> {/* Unique key for each row to help React identify changes */}
                <td>{bot.id}</td> {/* Display the bot's ID */}
                <td>{bot.name}</td> {/* Display the bot's name */}
                <td>
                  {/* Display the bot's avatar image */}
                  <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
                </td>
                <td>
                  {/* Button to remove the bot from the army */}
                  {/* Calls removeFromArmy function with the current bot as an argument */}
                  <button onClick={() => removeFromArmy(bot)}>Remove</button>
                  {/* Button to delete the bot completely */}
                  {/* Calls deleteBot function with the current bot as an argument */}
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

// Export the YourBotArmy component so it can be used in other parts of the application
export default YourBotArmy;
