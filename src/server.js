// const express = require('express');
// const path = require('path');
// const readExcelData = require('./app');

// const app = express();
// const port = 3000;

// // Endpoint untuk membaca data dari Excel
// app.get('/data', (req, res) => {
//   const data = readExcelData();
//   res.json(data); // Kirim data dalam format JSON
// });

// // Static route untuk folder image-dummy
// app.use('/images', express.static(path.join(__dirname, 'image-dummy')));

// // Menjalankan server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// const express = require('express');
// const path = require('path');
// const {
//   loadExcelData,
//   getSpices,
//   getSpiceById,
//   addSpice,
//   updateSpice,
//   deleteSpice
// } = require('./app');

// const app = express();
// const port = 3000;

// app.use(express.json());
// app.use('/images', express.static(path.join(__dirname, 'image-dummy')));

// // Load data saat server dimulai
// loadExcelData();

// // GET all spices
// app.get('/data', (req, res) => {
//   res.json(getSpices());
// });

// // GET spice by ID
// app.get('/data/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const spice = getSpiceById(id);
//   if (spice) {
//     res.json(spice);
//   } else {
//     res.status(404).json({ message: 'Data tidak ditemukan' });
//   }
// });

// // POST new spice
// app.post('/data', (req, res) => {
//   const newSpice = {
//     id: spicesData.length + 1,
//     type: req.body.type,
//     funfact1: req.body.funfact1,
//     funfact2: req.body.funfact2,
//     sejarah: req.body.sejarah,
//     gambar: req.body.gambar || `/images/${req.body.type.replace(/\s+/g, '_').toLowerCase()}.jpg`
//   };
//   const addedSpice = addSpice(newSpice);
//   res.status(201).json(addedSpice);
// });

// // PUT (update) spice by ID
// app.put('/data/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const updatedSpice = {
//     type: req.body.type,
//     funfact1: req.body.funfact1,
//     funfact2: req.body.funfact2,
//     sejarah: req.body.sejarah,
//     gambar: req.body.gambar
//   };
//   const result = updateSpice(id, updatedSpice);
//   if (result) {
//     res.json(result);
//   } else {
//     res.status(404).json({ message: 'Data tidak ditemukan' });
//   }
// });

// // DELETE spice by ID
// app.delete('/data/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const deletedSpice = deleteSpice(id);
//   if (deletedSpice) {
//     res.json(deletedSpice);
//   } else {
//     res.status(404).json({ message: 'Data tidak ditemukan' });
//   }
// });

// // Menjalankan server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// const express = require('express');
// const app = express();
// const readExcelData = require('./app'); // sesuaikan path jika berbeda
// const PORT = 3000;

// app.get('/data', (req, res) => {
//   try {
//     const data = readExcelData();
//     res.json(data);
//   } catch (error) {
//     res.status(500).send('Error reading data');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


// src/server.js
const express = require('express');
const open = require('open');
const path = require('path');
const app = express();
const port = 3000;

// Endpoint untuk menggabungkan data
app.get('/combine-data', (req, res) => {
  const combinedData = processAndCombineData();
  res.json(combinedData); // Mengirim data JSON ke pengguna
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  // Membuka browser secara otomatis ke URL yang diinginkan
  open('http://localhost:3000/combine-data');
});

