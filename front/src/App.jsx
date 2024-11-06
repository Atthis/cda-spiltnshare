import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logo from '../components/Logo';
import BreadCrumb from '../components/BreadCrumb';
import BillUploader from '../screens/BillUploader';
import BillViewer from '../screens/BillViewer';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <Router>
      <Logo />
      <BreadCrumb />
      <Routes>
        <Route path="" element={<BillUploader setSelectedFile={setSelectedFile} />} />
        <Route path="/view-file" element={<BillViewer file={selectedFile} />} />
      </Routes>
    </Router>
  );
}

export default App;