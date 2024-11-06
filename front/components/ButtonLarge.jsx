import './ButtonLarge.css';

export default function ButtonLarge({ text, onClick, icon: Icon, width }) {
    return (
        <button className="button-large" onClick={onClick} style={{ width }}>
            {Icon && <Icon style={{ marginRight: '8px' }} />}
            <p>{text}</p>
        </button>
    );
}