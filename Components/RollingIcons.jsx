import './Styles/RollingIcons.css';

const icons = [
  '/icons/icon1.png',
  '/icons/icon2.png',
  '/icons/icon3.png',
  '/icons/icon4.png',
  '/icons/icon5.png',
  '/icons/icon6.png',
  '/icons/icon7.png',
  '/icons/icon8.png',
  '/icons/icon9.png',
  '/icons/icon10.png',
];

export default function RollingIcons() {
  // Duplicate the list for seamless looping
  const allIcons = [...icons, ...icons];

  return (
    <div className="rolling-wrapper">
      <div className="rolling-track">
        {allIcons.map((icon, index) => (
          <div className="rolling-icon" key={index}>
            <img src={icon} alt={`icon-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}