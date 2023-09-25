const express = require("express");
const axios = require("axios");
const OpenAI = require("openai");
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

const promptMessage = async (req, res) => {
  try {
    const resp = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "",
        },
        { role: "user", content: req.body.question },
      ],
    });
    res.status(200).json({ message: resp.choices[0].message.content });
    console.log(resp.choices[0].message.content);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = { promptMessage};
