// const xlsx = require('xlsx');
// const path = require('path');

// const readExcelData = () => {
//   const filePath = path.join(__dirname, 'DATASET_FUNFACT.xlsx');
//   const workbook = xlsx.readFile(filePath);
  
//   const sheetFunFact = workbook.Sheets['Fun Fact'];
//   const sheetSejarah = workbook.Sheets['Sejarah'];

//   // Mengonversi data dari sheet pertama (Fun Fact)
//   const funFacts = xlsx.utils.sheet_to_json(sheetFunFact);
  
//   // Mengonversi data dari sheet kedua (Sejarah)
//   const sejarahData = xlsx.utils.sheet_to_json(sheetSejarah, { header: 1 });

//   // Menyusun sejarah rempah dari sheet Sejarah
//   const sejarahRempah = {};
//   for (let i = 1; i < sejarahData.length; i++) {
//     const spiceName = sejarahData[i][0].trim();
//     const sejarahText = sejarahData[i][1];
//     sejarahRempah[spiceName.toLowerCase()] = sejarahText;
//   }

//   // Menggabungkan fun fact dengan sejarah rempah dan gambar
//   funFacts.forEach(item => {
//     const spiceName = item['Type Of Spices'].trim().toLowerCase();
//     item['Sejarah'] = sejarahRempah[spiceName] || 'Tidak ditemukan sejarah';
//     item['Gambar'] = `/images/${spiceName.replace(/\s+/g, '_')}.jpg`;
//   });

//   return funFacts;
// };

// module.exports = readExcelData;



// const xlsx = require('xlsx');
// const path = require('path');

// let spicesData = [];

// const loadExcelData = () => {
//   const filePath = path.join(__dirname, 'DATASET_FUNFACT.xlsx');
//   const workbook = xlsx.readFile(filePath);
//   const sheetFunFact = workbook.Sheets['Fun Fact'];
//   const sheetSejarah = workbook.Sheets['Sejarah'];
  
//   const funFacts = xlsx.utils.sheet_to_json(sheetFunFact);
//   const sejarahData = xlsx.utils.sheet_to_json(sheetSejarah, { header: 1 });

//   const sejarahRempah = {};
//   for (let i = 1; i < sejarahData.length; i++) {
//     const spiceName = sejarahData[i][0].trim();
//     const sejarahText = sejarahData[i][1];
//     sejarahRempah[spiceName.toLowerCase()] = sejarahText;
//   }

//   spicesData = funFacts.map(item => {
//     const spiceName = item['Type Of Spices'].trim().toLowerCase();
//     return {
//       id: item['No'],
//       type: item['Type Of Spices'],
//       funfact1: item['Funfact 1'],
//       funfact2: item['Funfact 2'],
//       sejarah: sejarahRempah[spiceName] || 'Tidak ditemukan sejarah',
//       gambar: `/images/${spiceName.replace(/\s+/g, '_')}.jpg`
//     };
//   });
// };

// const getSpices = () => spicesData;

// const getSpiceById = id => spicesData.find(spice => spice.id === id);

// const addSpice = (newSpice) => {
//   spicesData.push(newSpice);
//   return newSpice;
// };

// const updateSpice = (id, updatedSpice) => {
//   const index = spicesData.findIndex(spice => spice.id === id);
//   if (index !== -1) {
//     spicesData[index] = { ...spicesData[index], ...updatedSpice };
//     return spicesData[index];
//   }
//   return null;
// };

// const deleteSpice = (id) => {
//   const index = spicesData.findIndex(spice => spice.id === id);
//   if (index !== -1) {
//     return spicesData.splice(index, 1)[0];
//   }
//   return null;
// };

// module.exports = {
//   loadExcelData,
//   getSpices,
//   getSpiceById,
//   addSpice,
//   updateSpice,
//   deleteSpice
// };


// const xlsx = require('xlsx');
// const path = require('path');

// const readExcelData = () => {
//   const filePath = path.join(__dirname, 'DATASET_FUNFACT.xlsx');

//   const workbook = xlsx.readFile(filePath);
//   const sheet1 = workbook.Sheets['Fun Fact'];
//   const sheet2 = workbook.Sheets['Sejarah'];

//   const data1 = xlsx.utils.sheet_to_json(sheet1);
//   const data2 = xlsx.utils.sheet_to_json(sheet2, { header: 1 });

//   const sejarahRempah = {};
//   for (let i = 1; i < data2.length; i++) {
//     const spiceName = data2[i][0]?.trim();
//     const sejarahText = data2[i][1];
//     sejarahRempah[spiceName?.toLowerCase()] = sejarahText;
//   }

//   data1.forEach(row1 => {
//     const spiceName = row1['Type Of Spices']?.trim().toLowerCase();
//     const sejarah = sejarahRempah[spiceName];
//     row1['Sejarah'] = sejarah ? sejarah : 'Tidak ditemukan sejarah';
//   });

//   return data1;
// };

// module.exports = readExcelData;


// const xlsx = require('xlsx');
// const path = require('path');

// const readExcelData = () => {
//   const filePath = path.join(__dirname, '..', 'DATASET_FUNFACT.xlsx');
//   console.log('Reading Excel file from:', filePath); // Logging lokasi file yang dibaca

//   const workbook = xlsx.readFile(filePath);
//   const sheet1 = workbook.Sheets['Fun Fact'];
//   const sheet2 = workbook.Sheets['Sejarah'];

//   const data1 = xlsx.utils.sheet_to_json(sheet1);
//   const data2 = xlsx.utils.sheet_to_json(sheet2, { header: 1 });

//   console.log('Data from Fun Fact sheet:', data1); // Logging data dari sheet pertama
//   console.log('Data from Sejarah sheet:', data2); // Logging data dari sheet kedua

//   const sejarahRempah = {};
//   for (let i = 1; i < data2.length; i++) {
//     const spiceName = data2[i][0]?.trim();
//     const sejarahText = data2[i][1];
//     sejarahRempah[spiceName?.toLowerCase()] = sejarahText;
//   }

//   data1.forEach(row1 => {
//     const spiceName = row1['Type Of Spices']?.trim().toLowerCase();
//     const sejarah = sejarahRempah[spiceName];
//     row1['Sejarah'] = sejarah ? sejarah : 'Tidak ditemukan sejarah';
//   });

//   console.log('Final data with Sejarah:', data1); // Logging data final setelah diproses
//   return data1;
// };

// module.exports = readExcelData;


const xlsx = require('xlsx');
const path = require('path');

// Fungsi untuk membaca file DATASET_FUNFACT.xlsx
const readDatasetFunFact = () => {
  // Menggunakan path yang benar untuk file di luar folder src
  const filePath = path.join(__dirname, '..', 'DATASET_FUNFACT.xlsx');
  console.log('Reading Excel file DATASET_FUNFACT from:', filePath);

  const workbook = xlsx.readFile(filePath);
  const sheet1 = workbook.Sheets['Fun Fact'];
  const sheet2 = workbook.Sheets['Sejarah'];

  const funFactData = xlsx.utils.sheet_to_json(sheet1);
  const sejarahData = xlsx.utils.sheet_to_json(sheet2, { header: 1 });

  const sejarahRempah = {};
  for (let i = 1; i < sejarahData.length; i++) {
    const spiceName = sejarahData[i][0]?.trim();
    const sejarahText = sejarahData[i][1];
    sejarahRempah[spiceName?.toLowerCase()] = sejarahText;
  }

  funFactData.forEach(row1 => {
    const spiceName = row1['Type Of Spices']?.trim().toLowerCase();
    const sejarah = sejarahRempah[spiceName];
    row1['Sejarah'] = sejarah ? sejarah : 'Tidak ditemukan sejarah';
  });

  console.log('Data from DATASET_FUNFACT with Sejarah:', funFactData);
  return funFactData;
};

// Fungsi untuk membaca file Dataset(1).xlsx
const readDataset1 = () => {
  const filePath = path.join(__dirname, '..', 'Dataset(1).xlsx');
  console.log('Reading Excel file Dataset(1) from:', filePath);

  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets['Sheet1']; // Sesuaikan dengan nama sheet di Dataset(1)

  const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  console.log('Data from Dataset(1):', data);

  const benefitsAndSideEffects = {};
  for (let i = 1; i < data.length; i++) {
    const spiceName = data[i][0]?.trim().toLowerCase();
    const benefits = data[i][1];
    const sideEffects = data[i][2];
    benefitsAndSideEffects[spiceName] = { benefits, sideEffects };
  }

  return benefitsAndSideEffects;
};

// Gabungkan data dari kedua file
const processAndCombineData = () => {
  const funFactData = readDatasetFunFact();
  const dataset1Data = readDataset1();

  funFactData.forEach(row => {
    const spiceName = row['Type Of Spices']?.trim().toLowerCase();
    const additionalInfo = dataset1Data[spiceName];
    if (additionalInfo) {
      row['Manfaar'] = additionalInfo.benefits || 'Tidak ditemukan manfaat';
      row['Efek Samping'] = additionalInfo.sideEffects || 'Tidak ditemukan efek samping';
    } else {
      row['Manfaat'] = 'Tidak ditemukan manfaat';
      row['Efek Samping'] = 'Tidak ditemukan efek samping';
    }
  });

  console.log('Final combined data:', funFactData);
  return funFactData;
};

// Export function for use in other files
module.exports = { processAndCombineData };



