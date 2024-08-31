// Import necessary hooks from React
import React, { useEffect } from 'react';

function App() {
  // Using useEffect to set the document title
  useEffect(() => {
    document.title = 'DUA Foundation'; // Set the webpage title
  }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

  return (
      <div className="App">
        {/* Your main content */}
        <h1>Welcome to the DUA Foundation</h1>
        {/* Add more components or content here */}
      </div>
  );
}

export default App;
