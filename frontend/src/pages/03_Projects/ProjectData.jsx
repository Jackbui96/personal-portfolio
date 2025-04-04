import stockImg from "../../assets/stock_prediction_app.jpg";

export const listOfProjects = [
    {
        title: "Stock Prediction App",
        description: "This project implements a full pipeline for predicting stock prices using a deep learning model. The application fetches historical stock data directly from Snowflake, preprocesses it using MinMax scaling, and trains a Long Short-Term Memory (LSTM) model to predict future closing prices.",
        image: stockImg,
        tags: [
            "Deep Learning", "LSTM", "Time Series Forecasting", "TensorFlow", "Snowflake",
            "Python", "Stock Market", "Data Visualization", "MinMaxScaler", "Keras", "Finance"
        ]
    },
    {
        title: "Live Traffic Monitor",
        description: "Live traffic dashboard powered by Node.js & AWS.",
        image: stockImg,
        tags: ["React", "Influx"]
    },
    {
        title: "Stock Prediction App",
        description: "Real-time stock forecasting using Gemini + LSTM, Kafka, and React.",
        image: stockImg,
    },
    {
        title: "Malicious URL Detection",
        description: "Detect malicious URLs using TF-IDF feature extraction and Logistic Regression. Lightweight, interpretable, and built for real-world safety applications.",
        image: stockImg,
        tags: ["Machine Learning", "Logistic Regression", "TF-IDF", "Cybersecurity", "Text Classification", "Python"],
    }
]
