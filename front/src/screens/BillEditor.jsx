import { useState } from 'react';
import './BillEditor.css';
import ButtonLarge from '../components/ButtonLarge';
import { LuBuilding, LuCalendar, LuTrash2, LuDollarSign, LuPizza } from "react-icons/lu";

export default function BillEditor({ file }) {
    if (!file) {
        return <p>Aucun fichier sélectionné</p>;
    }

    const fileURL = URL.createObjectURL(file);

    const [ocrData, setOcrData] = useState([
        { "name": "pizza 4 fromages", "quantity": 2, "unitPrice": 11.80 },
        { "name": "pizza napolitaine", "quantity": 1, "unitPrice": 12.50 },
        { "name": "burger normand", "quantity": 1, "unitPrice": 9.50 },
        { "name": "bière pression 25cl", "quantity": 2, "unitPrice": 3.50 },
        { "name": "soda", "quantity": 2, "unitPrice": 2.50 },
        { "name": "2xsundea €3.80", "quantity": 0, "unitPrice": 0 }
    ]);

    const [newArticle, setNewArticle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [showInputs, setShowInputs] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editName, setEditName] = useState('');
    const [editPrice, setEditPrice] = useState('');

    const handleDelete = (index) => {
        setOcrData(ocrData.filter((_, i) => i !== index));
    };

    const handleAddArticle = () => {
        if (newArticle && newPrice) {
            setOcrData([...ocrData, { name: newArticle, quantity: 1, unitPrice: parseFloat(newPrice) }]);
            setNewArticle('');
            setNewPrice('');
            setShowInputs(false);
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditName(ocrData[index].name);
        setEditPrice(ocrData[index].unitPrice);
    };

    const handleSaveEdit = (index) => {
        const updatedData = [...ocrData];
        updatedData[index] = { ...updatedData[index], name: editName, unitPrice: parseFloat(editPrice) };
        setOcrData(updatedData);
        setEditIndex(null);
    };

    const total = ocrData.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0).toFixed(2);

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
                        <th className='table-header-item' id='header-price' scope='col'>Prix Unitaire</th>
                        <th className='table-header-item' id='header-delete' scope='col'></th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {ocrData.map((item, index) => (
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
                                <label htmlFor="article" className="labels">Nom de l'article</label>
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
                        <ButtonLarge text="Confirmer" onClick={handleAddArticle} width="110%" color="#FFF" textColor="#000" />
                    </div>
                </div>
            )}
            <div className="separator" id="separator-button"></div>
            <div className="button-container">
                <ButtonLarge text="Ajouter un article" onClick={() => setShowInputs(true)} width="208%" />
            </div>
            <div className="separator" id="separator-button"></div>
            <div className="total-container">
                <div className="total-text">
                    <p>Total: </p>
                    <p className="numbers">{total} €</p>
                </div>
                <div className="button-container">
                    <ButtonLarge text="Valider" width="450%" color="#FFF" textColor="#000" />
                </div>
            </div>
        </section>
    );
}