const express = require('express');
const fs = require('fs').promises;
const multer = require('multer');
const path = require('path');

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
  const { message } = req.body;
  await fs.writeFile('./uploads/exercicio1', message);
  res.status(200).json('OK');
});

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, './uploads'),
  filename: (req, file, callback) => callback(null, file.originalname),
});

// const upload = multer({ storage: multer.memoryStorage() });

// app.post('/image', upload.single('arquivo'), async (req, res) => {
//   const { buffer, ...fileData } = req.file;
//   const path = `./uploads/${fileData.originalname}`;
//   if (fileData.mimetype.includes('image')) {
//     await fs.writeFile(path, buffer);
//     res.status(200).json({ message: 'Arquivo armazenado com sucesso' });
//   } else {
//     res.status(400).json({ message: 'Não é uma imagem válida' });
//   }
// });

const upload = multer({ dest: './uploads' });

app.post('/image', upload.any(), async (req, res) => {
  console.log(req.files);
  const fileNames = req.files.map(file => file.filename);
  res.json({ files: fileNames });
});

app.use('/uploads', express.static('uploads'));

app.get('/files', async (req, res) => {
  const fileNames = await fs.readdir('./uploads');
  res.json(fileNames.map(file => `http://localhost:3000/uploads/${file}`));
});

// app.get('/:arquivo', async (req, res) => {
//   const { arquivo } = req.params;
//   const fileText = await fs.readFile(`./uploads/${arquivo}`, 'utf-8');
//   res.status(200).json({ text: fileText });
// });


const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening...');
});
