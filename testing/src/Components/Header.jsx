
import { Link } from 'react-router-dom';
import 'styles/Header.css'; // Optional \\
import Notifications from './Notifications';

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
      <Notifications />
    </header>
  );
}

// The utilization of title font on Routes is so their functions doesnt get consfused as HTML tags.