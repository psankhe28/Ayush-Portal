const axios = require('axios');

async function verifyGST(gstNo) {
    try {
      const apiUrl = `https://appyflow.in/api/verifyGST?key_secret=${process.env.GST_SECRET}&gstNo=${gstNo}`;
      const response = await axios.get(apiUrl);
      const data = response.data;
  
      if (data.error) {
        return { error: true, message: data.message };
      } else {
        return data;
      }
    } catch (error) {
      return { error: true, message: error.message };
    }
  }

  module.exports =verifyGST;

  