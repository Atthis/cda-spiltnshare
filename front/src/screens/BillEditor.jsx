import { useState } from 'react';
import './BillEditor.css';
import ButtonLarge from '../components/ButtonLarge';
import { LuBuilding, LuCalendar, LuTrash2, LuDollarSign, LuPizza } from "react-icons/lu";

export default function BillEditor({ file, ocrData }) {
    // if (!file) {
    //     return <p>Aucun fichier sélectionné</p>;
    // }

    const fileURL = URL.createObjectURL(file);

    const [currentOcrData, setCurrentOcrData] = useState(ocrData.OCRData);

    const [newArticle, setNewArticle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [showInputs, setShowInputs] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editName, setEditName] = useState('');
    const [editPrice, setEditPrice] = useState('');

    const handleDelete = (index) => {
        setCurrentOcrData(currentOcrData.filter((_, i) => i !== index));
    };

    const handleAddArticle = () => {
        if (newArticle && newPrice) {
            setCurrentOcrData([...currentOcrData, { name: newArticle, quantity: 1, unitPrice: parseFloat(newPrice) }]);
            setNewArticle('');
            setNewPrice('');
            setShowInputs(false);
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditName(currentOcrData[index].name);
        setEditPrice(currentOcrData[index].unitPrice);
    };

    const handleSaveEdit = (index) => {
        const updatedData = [...currentOcrData];
        updatedData[index] = { ...updatedData[index], name: editName, unitPrice: parseFloat(editPrice) };
        setCurrentOcrData(updatedData);
        setEditIndex(null);
    };

    const total = currentOcrData.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0).toFixed(2);

    return (
        <section className="bill-editor-container">
            <img src={fileURL} alt="Selected" className="bill-editor-image" />
            <div className="input-container">
                <div className="restaurant-input-container">
                    <div className="icon-label-container">
                        <LuBuilding />
                        <label htmlFor="restaurant" className="labels">Restaurant</label>
                    </div>
                    <input type="text" className="bill-editor-inputs" />
                </div>
                <div className="date-input-container">
                    <div className="icon-label-container">
                        <LuCalendar />
                        <label htmlFor="date" className="labels">Date</label>
                    </div>
                    <input type="date" className="bill-editor-inputs" />
                </div>
            </div>
            <div className="separator"></div>
            <table className="ocr-table">
                <thead className="table-header">
                    <tr className='table-header-row'>
                        <th className='table-header-item' id='header-article' scope='col'>Article</th>
                        <th className='table-header-item' id='header-price' scope='col'>Prix</th>
                        <th className='table-header-item' id='header-delete' scope='col'></th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {currentOcrData.map((item, index) => (
                        <tr key={index}>
                            <td className='table-body-item' id='body-article'>
                                {editIndex === index ? (
                                    <input
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        onBlur={() => handleSaveEdit(index)}
                                        className="bill-editor-inputs"
                                    />
                                ) : (
                                    <span onClick={() => handleEdit(index)}>{item.name}</span>
                                )}
                            </td>
                            <td className='table-body-item' id='body-price'>
                                {editIndex === index ? (
                                    <input
                                        type="number"
                                        value={editPrice}
                                        onChange={(e) => setEditPrice(e.target.value)}
                                        onBlur={() => handleSaveEdit(index)}
                                        className="bill-editor-inputs"
                                    />
                                ) : (
                                    <span onClick={() => handleEdit(index)}>{item.unitPrice} €</span>
                                )}
                            </td>
                            <td className='table-body-item' id='body-delete' onClick={() => handleDelete(index)}><LuTrash2 /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="separator" id="separator-button"></div>
            {showInputs && (
                <div className="new-article-form">
                    <div className="new-article-inputs">
                        <div className="article-input-container">
                            <div className="icon-label-container">
                                <LuPizza />
                                <label htmlFor="article" className="labels">Article</label>
                            </div>
                            <input
                                type="text"
                                value={newArticle}
                                onChange={(e) => setNewArticle(e.target.value)}
                                className="bill-editor-inputs"
                            />
                        </div>
                        <div className="price-input-container">
                            <div className="icon-label-container">
                                <LuDollarSign />
                                <label htmlFor="price" className="labels">Prix</label>
                            </div>
                            <input
                                type="number"
                                value={newPrice}
                                onChange={(e) => setNewPrice(e.target.value)}
                                className="bill-editor-inputs"
                            />
                        </div>
                    </div>
                    <div className="button-container">
                        <ButtonLarge text="Confirmer" onClick={handleAddArticle} width="250px" color="#FFF" textColor="#000" />
                    </div>
                </div>
            )}
            <div className="separator" id="separator-button"></div>
            <div className="add-button-container">
                <ButtonLarge text="Ajouter un article" onClick={() => setShowInputs(true)} width="208%" />
            </div>
            <div className="separator" id="separator-button"></div>
            <div className="total-container">
                <div className="total-text">
                    <p>Total: </p>
                    <p className="numbers">{total} €</p>
                </div>
                <div className="validate-button-container">
                    <ButtonLarge text="Valider" width="250px" color="#FFF" textColor="#000" />
                </div>
            </div>
        </section>
    );
}