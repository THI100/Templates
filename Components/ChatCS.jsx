import { useState, useEffect } from "react";

export default function ChatClientSeller() {
    const [user, setUser] = useState(null);
    const [chat, setChat] = useState(null);
    const [messageText, setMessageText] = useState("");
    const [loading, setLoading] = useState(true);

    // Simulated fetch function (replace with real API calls)
    const fetchChatData = async () => {
        try {
            // Dummy user
            const userData = await fetch("https://fakestoreapi.com/users/1").then(res => res.json());

            // Dummy chat data
            const chatData = {
                id: "chat123",
                messages: [
                    {
                        id: 1,
                        sender: { name: "Alice" },
                        text: "Hi! Is the item still available?",
                        timestamp: Date.now() - 100000,
                    },
                    {
                        id: 2,
                        sender: { name: userData.name.firstname },
                        text: "Yes, it's still available.",
                        timestamp: Date.now() - 50000,
                    },
                ],
            };

            setUser(userData);
            setChat(chatData);
            setLoading(false);
        } catch (err) {
            console.error("Failed to load chat data", err);
        }
    };

    useEffect(() => {
        fetchChatData();
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!messageText.trim()) return;

        const newMessage = {
            id: Date.now(),
            sender: { name: user.name.firstname },
            text: messageText,
            timestamp: Date.now(),
        };

        setChat((prevChat) => ({
            ...prevChat,
            messages: [...prevChat.messages, newMessage],
        }));
        setMessageText("");
    };

    if (loading || !user || !chat) return <p>Loading chat...</p>;

    return (
        <section>
            <header>
                <h2>Chat with {user.name.firstname}</h2>
                <h2>Chat code: {chat.id}</h2>
                <p>This chat is monitored, follow the rules</p>
            </header>

            <div className="chat-messages">
                {chat.messages.map((message) => (
                    <div key={message.id}>
                        <strong>{message.sender.name}:</strong>
                        <p>{message.text}</p>
                        <small>{new Date(message.timestamp).toLocaleString()}</small>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </section>
    );
}