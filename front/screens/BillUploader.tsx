import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './BillUploader.css';
import { LuImagePlus, LuArrowDownToLine, LuCamera } from "react-icons/lu";
import ButtonLarge from "../components/ButtonLarge";

export default function BillUploader({ setSelectedFile }) {
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

    return (
        <div className="page-container">
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
                    <p className="text-options">Ou utilisez une des options si dessous</p>
                </div>

                <div className="button-container">
                    <ButtonLarge text="Choisir un fichier" onClick={handleIconClick} icon={LuArrowDownToLine} width="250px" />
                    <ButtonLarge text="Prendre une photo" onClick={handleCameraClick} icon={LuCamera} width="250px" />
                </div>
            </div>
        </div>
    );
}