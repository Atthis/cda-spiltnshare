import { useNavigate } from 'react-router-dom';
import './BillViewer.css';
import ButtonLarge from '../components/ButtonLarge';
import { LuCheck } from 'react-icons/lu';
import { useEffect } from 'react';

export default function BillViewer({ file }) {
    const navigate = useNavigate();
    if (!file) {
        return <p>Aucun fichier sélectionné</p>;
    }

    const fileURL = URL.createObjectURL(file);

    useEffect(() => {
        fetch("http://localhost:3615", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Fetch POST Request Example' }),
            mode: 'no-cors'
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Réponse de test", data);
        })
        .catch((error) => console.log(error));
    }, []);

    const imageToBase64 = (image) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
          const string = event.target.result.split(',')[1];
          return resolve(string);
        };
          reader.onerror = () =>
            reject(`Erreur lors du passage de l'image en base64`);
          reader.readAsDataURL(image);
        });
    };

    const postReceipt = async () => {
        try {
            const base64Img = await imageToBase64(file);
            console.log("Prêt à l'envoi " + base64Img);
            
            const response = await fetch("http://localhost:3615/api/ocr", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image: base64Img })
            });

            const data = await response.json();
            console.log("Réponse du serveur :", data);ù
            
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'image :", error);
        }
    };


    const handleSave = () => {
     navigate('/edit-file');
    };

    return (
        <>
            <div className="bill-viewer-container">
                <img src={fileURL} alt="Selected" className="bill-viewer-image" />
            </div>
            <ButtonLarge text="Valider" icon={LuCheck} onClick={postReceipt}/>
        </>
    );
} 