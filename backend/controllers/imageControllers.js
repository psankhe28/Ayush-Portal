const axios = require('axios');

const generateImage = async (prompt, size = '1024x1024') => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/generate',
      {
        prompt,
        n: 1,
        size,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    const imageUrl = response.data.data[0].url;
    return imageUrl;
  } catch (error) {
    throw new Error('Failed to generate image');
  }
};

module.exports = {generateImage};
