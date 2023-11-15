// We import useState and useEffect in our component
import { useState, useEffect } from 'react';

// import components

function App() {
  // We declare a state variable that is an array called `issues` and a function to update it.
  const [repos, setRepos] = useState([]);

  // When the page loads, set the document title, array is empty so it only runs once
  useEffect(() => {
    document.title = "Colton Laidig's Portfolio";
  }, []);

}