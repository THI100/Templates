import "./styles.css";
import Footer from "../Footer";
import Header from "../Header";
import ParagraphText from "../../ParagraphText";

export default function App() {
  return (
    <div>
        <Header />
        <ParagraphText text="This is a sample paragraph text component that can be used to display static or dynamic content." />
        <Footer />
    </div>
  );
}
