const express = require('express');
const router = express.Router();
const { createWorker } = require('tesseract.js')

const fakeOCRData = require('../fakeOCRDataReturn.json');

const db = require('../db/db.js');
const { getReceipts } = require('./models/receiptModel');

router.get('/', async (req, res) => {
  res.status(200).json({
    message: "accès à l'API OK"
  });
})

router.post('/ocr', async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ message: "Aucune image fournie." });
    }

    const regex = /^(\d+)\s+([a-zA-Z\s'\d]+)\s+(\d+[.,]?\d*)$/;

    async function convertImageToText(imageBase64) {
      const worker = await createWorker({
        langPath: 'https://tessdata.projectnaptha.com/4.0.0',
        logger: (m) => console.log(m),
      });
      
      await worker.load();
      await worker.loadLanguage('fra');
      await worker.initialize('fra');

      const imageBuffer = Buffer.from(imageBase64, 'base64');

      const { data } = await worker.recognize(imageBuffer);
      const list = data.text.toString();
      console.log("Texte OCR extrait :", list);

      await worker.terminate();
      return list;
    }

    const textResult = await convertImageToText(image);
    console.log("Texte OCR traité :", textResult);

    const items = textResult.split('\n').map(line => {
      console.log("Ligne OCR:", line);
      const normalizeLine = line.normalize("NFD").replace(/[^\w\ .\n']/gi, "")

      const match = normalizeLine.match(regex);
      if (match) {
        const quantity = parseInt(match[1], 10);
        const name = match[2].trim();
        const unitPrice = parseFloat(match[3].replace("," , "."));

        return {
          name: name,
          quantity: quantity,
          unitPrice: (unitPrice / 100).toFixed(2),
        };
      }
      return null;
    }).filter(item => item);

    console.log("Articles extraits :", items);

    res.status(200).json({ message: "Traitement OK", data: items });
  } catch (error) {
    console.error("Erreur OCR :", error);
    res.status(500).json({ message: "Erreur lors du traitement OCR" });
  }
});

router.get('/receipts', async (req, res) => {
  const data = await getReceipts(db);

  res.json(data);
})

module.exports = router;