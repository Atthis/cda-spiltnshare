import './ButtonLarge.css';

export default function ButtonLarge({ text, onClick, icon: Icon, width, color, textColor }) {
    return (
        <button className="button-large" onClick={onClick} style={{ width, backgroundColor: color, color: textColor }}>
            {Icon && <Icon style={{ marginRight: '8px' }} />}
            <p>{text}</p>
        </button>
    );
}