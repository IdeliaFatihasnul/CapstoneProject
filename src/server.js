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
const Hapi = require('@hapi/hapi');
const readExcelData = require('./app'); // Pastikan app.js berada di folder yang benar

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  // Definisikan rute untuk mendapatkan data
  server.route({
    method: 'GET',
    path: '/data',
    handler: async (request, h) => {
      try {
        const data = readExcelData(); // Memanggil fungsi dari app.js untuk membaca data
        return h.response(data).code(200); // Mengembalikan respons dengan status 200
      } catch (err) {
        console.error('Error occurred:', err); // Menampilkan error di console
        return h.response({ error: 'An internal server error occurred', details: err.message }).code(500);
      }
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();


