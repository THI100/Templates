// THIS IS A LONELY COMPONENT
// You just need to import it in your main file and use it.

import { Link } from 'react-router-dom';
import 'styles/Header.css'; // Optional \\

export default function Header() {
  return (
    <header>
      <h1>Welcome to My Website</h1>
      <nav>
        <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/Contact">Contact</Link> </li>
        <li> <Link to="/About">About</Link> </li>
        <li> <Link to="/Pricing">Pricing</Link> </li>
        </ul>
      </nav>
    </header>
  );
}

// The utilization of title font on Routes is so their functions doesnt get consfused as HTML tags.