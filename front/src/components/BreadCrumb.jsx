import './BreadCrumb.css';
import { LuScanLine, LuReceipt } from "react-icons/lu";

export default function BreadCrumb({ selectedView, setSelectedView }) {
    return (
        <div className="breadcrumb-container">
            <div 
                className={`breadcrumb ${selectedView === 'scanner' ? 'selected' : 'unselected'}`}
                onClick={() => setSelectedView('scanner')}
            >
                <LuScanLine />
                <p className="text-scanner">Scanner</p>
            </div>
            <div 
                className={`breadcrumb ${selectedView === 'ticket' ? 'selected' : 'unselected'}`}
                onClick={() => setSelectedView('ticket')}
            >
                <LuReceipt />
                <p className="text-ticket">Ticket</p>
            </div>
        </div>
    );
}
