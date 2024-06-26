const axios = require("axios");
const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

//GET all resorts
const getAllResortItems = async (req, res) => {
    const { sort_by = 'id', order_by = 'asc' } = req.query; 
    try {
        const data = await knex("resorts").orderBy(sort_by, order_by);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error retrieving resorts:", error);
        res.status(400).send(`Error retrieving resorts: ${error}`);
    }
};


//GET single resort
const getOneResort = async (req, res) => {
    try {
      const resortId = req.params.id;
      const resortFound = await knex("resorts")
        .select("*")
        .where("id", resortId)
        .first();
  
      if (!resortFound) {
        return res.status(404).json({ error: "Resort not found" });
      }
  
      res.status(200).json(resortFound);
    } catch (error) {
      console.error("Error retrieving single resort:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

// Function to fetch weather data by coordinates
const getWeatherForecast = async (latitude, longitude) => {
    try {
        const weatherAPIURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=precipitation_sum,snowfall_sum,weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max&forecast_days=5&timezone=America/Los_Angeles`;
        const response = await axios.get(weatherAPIURL);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw new Error("Error fetching weather data from the API");
    }
};

const getResortItemById = async (id) => {
    try {
        const foundId = await knex("resorts")
            .where({ id })
            .first();
        return foundId;
    } catch (error) {
        console.error("Error retrieving single resort:", error.message);
        throw new Error("Error retrieving single resort.");
    }
};

const getResortAndWeather = async (req, res) => {
    try {
        const resortId = req.params.id;
        const resort = await getResortItemById(resortId);

        if (!resort) {
            return res.status(404).json({ error: "Resort not found" });
        }

        const { latitude, longitude } = resort;

        if (latitude && longitude) {
            const weatherData = await getWeatherForecast(latitude, longitude);

            const resortWithWeather = {
                resortInfo: resort,
                weatherData,
            };

            return res.status(200).json(resortWithWeather);
        } else {
            return res.status(400).json({ error: "Invalid latitude or longitude" });
        }
    } catch (error) {
        console.error("Error retrieving resort and weather:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    getAllResortItems,
    getResortItemById,
    getOneResort,
    getResortAndWeather,
};