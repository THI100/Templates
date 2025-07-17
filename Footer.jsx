// THIS IS A LONELY COMPONENT
// You just need to import it in your main file and use it.

import { Link } from 'react-router-dom';
import 'styles/Footer.css'; // Optional \\

export default function Footer() {
  return (
    <footer>
      <h1>Copyright {copyrightYear}</h1>
      <br />
        <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/Contact">Contact</Link> </li>
        <li> <Link to="/About">About</Link> </li>
        <li> <Link to="/Pricing">Pricing</Link> </li>
        </ul>
    </footer>
  );
};

async function copyrightYear() {
    const year = new Date().getFullYear();
    return year;
};

// The utilization of title font on Routes is so their functions doesnt get consfused as HTML tags.