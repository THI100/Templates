import ChatWidget from "../Components/ChatWidget";
import AuctionItem from  "../Components/AuctionItem";
import ECommerceItem from  "../Components/ECommerceItem";

export default function HomePage () {
    return (
        <section>
            <ChatWidget className="Fixed"/>
            <div className="img-textfront">
                <h2>Inovate your sites with those pre-made compoents for react</h2>
            </div>
            <div className="bgcgreen-3subdiv">
                <h2>Innovate by using in your shop website one of those Components:</h2>
                <div className="Containing-AI">
                    <AuctionItem />
                    <p className="legenda">A Auction display for items, this has capacities of dynamic and server supported.</p>
                </div>
                <div className="Containing-ECI">
                    <ECommerceItem />
                    <p className="legenda">A Ecommerce display for a item disponible for sale, this has capacities of dynamic and server supported.</p>
                </div>
            </div>
            <div>
                <h3>And much more in:</h3> <Link to="/OutsideGH">Github</Link>
            </div>
        </section>
    );
}