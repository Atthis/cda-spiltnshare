const express = require('express');
const router = express.Router();

const fakeOCRData = require('../fakeOCRDataReturn.json');

const db = require('../db/db.js');
const { getReceipts } = require('./models/receiptModel');

router.get('/', async (req, res) => {
  res.status(200).json({
    message: "accès à l'API OK"
  });
})

router.post('/ocr', async (req, res) => {
  const data = req.body;
  console.log(data);

  // ici le code de traitement de la donnée reçue par l'OCR

  const result = {
    message: "traitement OK",
    data: fakeOCRData
  }

  res.status(200).json(result);
})

router.get('/receipts', async (req, res) => {
  const data = await getReceipts(db);

  res.json(data);
})

module.exports = router;