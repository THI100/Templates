import { useState } from 'react';

function SlideSideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const popBar = () => {
        setIsOpen(true);
    };

    const closeBar = () => {
        setIsOpen(false);
    };

    return (
        <>
            {!isOpen ? <ClosedButton onClick={popBar} /> : <SidebarContent onClose={closeBar} />}
        </>
    );
}

function ClosedButton({ onClick }) {
    return (
        <div className="slide-sidebar-button" onClick={onClick}>
            <img src="" alt="" /> {/* Replace with an icon or image */}
        </div>
    );
}

function SidebarContent({ onClose }) {
  return (
    <div className="slide-sidebar-content">
        <div className="slide-sidebar-button" onClick={onClose}>
            <img src="" alt="" /> {/* Replace with an icon or image */}
        </div>
        <section>
        </section>
    </div>
  );
}

export default SlideSideBar;
