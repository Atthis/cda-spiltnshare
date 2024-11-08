import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logo from './components/Logo';
import BreadCrumb from './components/BreadCrumb';
import BillUploader from './screens/BillUploader';
import BillViewer from './screens/BillViewer';
import BillEditor from './screens/BillEditor';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [OCRData, setOCRData] = useState(null);

  const [selectedView, setSelectedView] = useState('scanner'); // Initialiser avec 'scanner'

  return (
    <Router>
      <Logo />
      <BreadCrumb selectedView={selectedView} setSelectedView={setSelectedView} />
      <Routes>
      <Route 
          path="" 
          element={<BillUploader setSelectedFile={setSelectedFile} selectedView={selectedView} />} 
        />
        <Route path="/view-file" element={<BillViewer file={selectedFile} ocrData={{OCRData, setOCRData}}/>} />
        <Route path="/edit-file" element={<BillEditor file={selectedFile} ocrData={{OCRData, setOCRData}}/>} />
      </Routes>
    </Router>
  );
}

export default App;
