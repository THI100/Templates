import { Link } from react-router-dom;
import ChatCS from '../Components/ChatCS';

export default function PageChats () {
    return (
        <section>
            <h2>Chats</h2>
            {chat.history.map ((chat) => (
                <Link to={ChatCS(chat.id)}>
                    <div>
                        <div>
                            <img src={user.photo} alt={user.name}/>
                            <h2>{user.name}</h2>
                        </div>
                        <h3>{message}</h3>
                    </div>
                </Link>
            ))}
        </section>
    );
}