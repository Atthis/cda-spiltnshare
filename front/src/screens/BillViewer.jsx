import { useNavigate } from 'react-router-dom';
import './BillViewer.css';
import ButtonLarge from '../components/ButtonLarge';
import { LuCheck, LuUser2, LuMail } from 'react-icons/lu';

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
                <div className="bill-viewer-input-container">
                    <div className="icon-label-container">
                        <LuUser2 />
                        <label htmlFor="name">Prénom</label>
                    </div>
                    <input className="bill-viewer-inputs" type="text"/>
                    <div className="icon-label-container">
                        <LuMail />
                        <label htmlFor="name">Adresse email</label>
                    </div>
                    <input className="bill-viewer-inputs" type="text"/>
                </div>
            </div>
            <div className="button-container">
            <ButtonLarge text="Valider" icon={LuCheck} onClick={handleSave} width="250px"/>
            </div>
        </>
    );
} 