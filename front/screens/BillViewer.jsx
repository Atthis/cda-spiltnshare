import './BillViewer.css';
import ButtonLarge from '../components/ButtonLarge';
export default function BillViewer({ file }) {
    if (!file) {
        return <p>Aucun fichier sélectionné</p>;
    }

    const fileURL = URL.createObjectURL(file);

    return (
        <>
            <div className="bill-viewer-container">
                <img src={fileURL} alt="Selected" className="bill-viewer-image"/>
            </div>
            <ButtonLarge text="Valider" />
        </>
    );
} 