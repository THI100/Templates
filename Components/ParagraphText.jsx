function ParagraphText(text) {
    return (
        <section className="paragraph-text">
            <p>{text}</p>
        </section>
    );
}

export default ParagraphText;

// For a certain convenience, the text can be added as static or dynamic content, on your app.jsx as a function or const.
// Or you can hard code it directly in the component.
