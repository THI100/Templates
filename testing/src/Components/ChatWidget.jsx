import { useState } from "react";

export default function HelpChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const responses = {
        shipping: "You can track the shipping by going to the shipping page.",
        payment: "We only accept Credit card, instant payment (PIX(Brasil), SWIFT(EU)) or Cryptocurrencies.",
        verified: "Verified sellers are the only secured sellers by us.",
        encryption: "Encryption is present on the chat and your personal information is even more secure.",
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = {
            id: Date.now(),
            sender: "You",
            text: input,
            timestamp: new Date(),
        };

        // Find the matching response
        const matchedKeyword = Object.keys(responses).find((keyword) =>
            input.toLowerCase().includes(keyword)
        );

        const botMessage = {
            id: Date.now() + 1,
            sender: "Helper Bot",
            text: matchedKeyword
                ? responses[matchedKeyword]
                : "Sorry, I didn't understand that. Try using keywords like 'Shipping', 'Payment', 'Verified', or 'Encryption'.",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage, botMessage]);
        setInput("");
    };

    return (
        <section>
            <h2>Assistant Chat</h2>
            <div>
                {messages.map((msg) => (
                    <div key={msg.id} style={{ marginBottom: "1rem" }}>
                        <strong>{msg.sender}:</strong>
                        <p style={{ margin: 0 }}>{msg.text}</p>
                        <small>{msg.timestamp.toLocaleTimeString()}</small>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSend}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Shipping, Payment..."
                />
                <button type="submit">Send</button>
            </form>
        </section>
    );
}
