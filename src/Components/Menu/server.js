const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/generate-routine', async (req, res) => {
    try {
        const { weight, height, aspirations } = req.body;

        // Construye el prompt según la entrada del usuario

        const prompts = {
            model: 'meta-llama/Llama-2-70b-chat-hf',
            messages: [
              {
                role: 'user',
                content: `Create a routine for the gym. Weight: ${weight}, Height: ${height}, Aspirations: ${aspirations}`
              }
            ]
          };
          
          // Configurando solicitud API
          const metaOptions = {
            method: 'POST',
            url: 'https://meta-llama-2-ai.p.rapidapi.com/',
            headers: {
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': 'b3747dea79msha71c17d145622fdp1ab7b6jsn42df68fa2626',
              'X-RapidAPI-Host': 'meta-llama-2-ai.p.rapidapi.com',
            },
            data: prompts  // Enviar directamente el objeto prompts como el contenido del mensaje
          };
          
          

        // Configurando solicitud API
        

        // Realizamos la solicitud a la API
        const response = await axios.request(metaOptions);

        // Extraer respuesta y enviarla al cliente
        const generatedRoutine = response.data;
        res.json({ generatedRoutine });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al generar la rutina' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
