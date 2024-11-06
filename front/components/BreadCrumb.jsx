import './BreadCrumb.css'
import { useState } from 'react';
import { LuScanLine } from "react-icons/lu";
import { LuReceipt } from "react-icons/lu";

export default function BreadCrumb() {
    const [selected, setSelected] = useState('left'); 

    return (
        <div className="breadcrumb-container">
            <div 
                id="breadcrumb-left" 
                className={`breadcrumb ${selected === 'left' ? 'selected' : 'unselected'}`}
                onClick={() => setSelected('left')}
            >
                <LuScanLine />
                <p>Scanner</p>
            </div>
            <div 
                id="breadcrumb-right" 
                className={`breadcrumb ${selected === 'right' ? 'selected' : 'unselected'}`}
                onClick={() => setSelected('right')}
            >
                <LuReceipt />
                <p>Ticket</p>
            </div>
        </div>
    )
}