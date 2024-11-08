import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './BillUploader.css';
import { LuImagePlus, LuArrowDownToLine, LuCamera } from "react-icons/lu";
import ButtonLarge from "../components/ButtonLarge";
import { TfiReceipt } from "react-icons/tfi";
import { IoIosArrowBack } from "react-icons/io";
import { FaCalculator } from "react-icons/fa6";

export default function BillUploader({ setSelectedFile, selectedView }) {
    const fileInputRef = useRef(null);
    const cameraInputRef = useRef(null);
    const navigate = useNavigate();

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleCameraClick = () => {
        if (cameraInputRef.current) {
            cameraInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            navigate('/view-file');
        }
    };

    // Fonction pour afficher la date au format jour mois année
    const TodayDate = () => {
        const today = new Date().toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        return today;
    };

    return (
        <div className="page-container">
            {selectedView === 'scanner' ? (
                <div className="bill-uploader-container">
                    <div className="file-import-container">
                        <div className="icon-container" onClick={handleIconClick}>
                            <LuImagePlus />
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <input
                            type="file"
                            ref={cameraInputRef}
                            style={{ display: 'none' }}
                            accept="image/*"
                            capture="environment"
                            onChange={handleFileChange}
                        />
                        <h1>Déposez votre ticket ici</h1>
                        <p className="text-options">Ou utilisez une des options ci-dessous</p>
                    </div>

                    <div className="button-container">
                        <ButtonLarge text="Choisir un fichier" onClick={handleIconClick} icon={LuArrowDownToLine} width="250px" />
                        <ButtonLarge text="Prendre une photo" onClick={handleCameraClick} icon={LuCamera} width="250px" />
                    </div>
                </div>
            ) : (
                <div className="bill-uploader-container2">
                    <div>
                        <div className="arrow-icon">
                            <IoIosArrowBack />
                            <h1>Retour</h1>
                        </div>
                        <div className="ticketName">
                            <div className="receipt-icon">
                                <TfiReceipt />
                            </div>
                            <h1 id="PlaceName">Le Bistrot Parisien</h1>
                            <p className="text-options-date">{TodayDate()}</p>
                        </div>
                    </div>
                    <hr />
                    
                        <div className="price-items">
                            <p className="text-options-items">Article</p>
                            <p className="text-options-items">Prix</p>
                        </div>
                        <hr />
                        <div className="item-check">
                            <input type="checkbox" id="itemName" name="itemName" />
                            <label htmlFor="itemName"></label>
                            <p>Bière</p>
                            <p className="price">10€</p>
                            <hr/>
                        </div>
                        
              
                    <div className="gradient">
                        <table className="centered-table">
                            <tr>
                                <td className="text-options">Ma consommation</td>
                                <td className="text-options">Total</td>
                            </tr>
                            <tr>
                                <td><h1>0.00€</h1></td>
                                <td><h1>22.00€</h1></td>
                            </tr>
                        </table>
                        <div className="recap-box">
                            <h1>Reste à payer</h1>
                            <h1>22.00€</h1>
                        </div>
                        <button className="conso">
                            <FaCalculator /> Déduire ma consommation                  
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
