import './BreadCrumb.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LuScanLine, LuReceipt } from "react-icons/lu";

export default function BreadCrumb() {
    const location = useLocation();
    const [selected, setSelected] = useState('left');

    useEffect(() => {
        if (location.pathname === '/') {
            setSelected('left');
        } else {
            setSelected('right');
        }
    }, [location.pathname]);

    return (
        <div className="breadcrumb-container">
            <div 
                className={`breadcrumb ${selected === 'left' ? 'selected' : 'unselected'}`}
                onClick={() => setSelected('left')}
            >
                <LuScanLine />
                <p className="text-scanner">Scanner</p>
            </div>
            <div 
                className={`breadcrumb ${selected === 'right' ? 'selected' : 'unselected'}`}
                onClick={() => setSelected('right')}
            >
                <LuReceipt />
                <p className="text-ticket">Ticket</p>
            </div>
        </div>
    );
}