import { useNavigate } from 'react-router-dom';
import './BillViewer.css';
import ButtonLarge from '../components/ButtonLarge';
import { LuCheck } from 'react-icons/lu';

export default function BillViewer({ file }) {
    const navigate = useNavigate();
    if (!file) {
        return <p>Aucun fichier sélectionné</p>;
    }

    const fileURL = URL.createObjectURL(file);

    const handleSave = () => {
     navigate('/edit-file');
    };

    return (
        <>
            <div className="bill-viewer-container">
                <img src={fileURL} alt="Selected" className="bill-viewer-image" />
            </div>
            <ButtonLarge text="Valider" icon={LuCheck} onClick={handleSave}/>
        </>
    );
} 