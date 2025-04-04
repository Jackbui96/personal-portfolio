import stockImg from "../../assets/stock_prediction_app.jpg";

export const listOfProjects = [
    {
        title: "Live Traffic Monitor",
        category: "Web Development",
        description: "A real-time dashboard visualizing radar sensor data for smart cities and traffic analysis using the MERN stack and AWS.",
        image: stockImg,
        tags: [
            "React", "Node.js", "Express", "MongoDB",
            "Influx", "AWS"
        ]
    },
    {
        title: "Malicious URL Detection",
        category: "Machine Learning",
        description: "Lightweight machine learning system using TF-IDF and Logistic Regression to classify malicious URLs for safer browsing.",
        image: stockImg,
        tags: [
            "Python", "Machine Learning",
            "Logistic Regression", "TF-IDF", "Text Classification"
        ],
    },
    {
        title: "Stock Prediction App",
        category: "Machine Learning",
        description: "A deep learning-powered pipeline for forecasting stock prices using historical data from Snowflake and LSTM models.",
        image: stockImg,
        tags: [
            "Python", "TensorFlow", "Keras", "LSTM",
            "Snowflake"
        ]
    },
    {
        title: "Cascade (Distributed System)",
        category: "Distributed Systems",
        description: "A distributed coordination system using async gRPC, shared memory, and a tree-based overlay to stream and route data across sink nodes.",
        image: stockImg,
        tags: [
            "C++", "Python", "gRPC",
            "Multithreading", "Load Balancing", "Distributed Systems"
        ]
    },
]
