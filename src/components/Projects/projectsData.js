export const projects = [
  {
    id: 1,
    title: "Analtyica - Personalised Social media Analytics",
    date: "LEVEL- Supermind Hackathon 2025",
    image:
      "https://res.cloudinary.com/daavjmge8/image/upload/v1737615101/analytica_rraov7.png",
    techStack: [
      "NextJS",
      "Datastax",
      "Cassandra",
      "Groqcloud",
      "LLM",
      "AstraDB",
      "TypeScript",
    ],
    description:
      "Personalised social media analytics platform for content creators and influencers",
    bulletPoints: [
      "Designed an interactive dashboard leveraging Langflow and DataStax Astra DB to track real-time engagement and analyze social media performance trends",
      "Engineered custom visualizations and post-type analysis with javascript libraries, providing actionable insights for users.",
      "Built an analytics agent with LangChain for auto-generated performance insights, enabling data-driven decision-making with seamless real-time updates.",
    ],
    liveLink: "https://social-media-final2.vercel.app/",
    githubLink: "https://github.com/AshKatale/social-media-final2",
  },
  {
    id: 2,
    title: "News Content Extraction and XML genreration",
    date: "Sakal News - Freelance Project",
    image:
      "https://res.cloudinary.com/daavjmge8/image/upload/v1737615103/Enews_i37jt6.png",
    techStack: ["Reactjs", "Python", "PyMuPDF", "GroqCloud", "LLM", "XML"],
    description:
      "Developed a scalable solution for extracting and structuring newspaper articles into a detailed XML format, enabling efficient data storage and retrieval",
    bulletPoints: [
      "Integrated PyMuPDF for extracting text blocks and Llama 3.1-8b-instant for AI-powered structuring, ensuring accurate segmentation of headings, subheadings, and content.",
      "Designed robust pipelines to handle multi-page PDFs with multiple articles, reducing processing time by 35% while maintaining high accuracy in article classification.",
      "Engineered application architecture and crafted database schema",
    ],
    liveLink: "https://e-news-digital.onrender.com/",
    githubLink: "https://github.com/Prathamesh-Bhaskar/E-news-Digital",
  },

  {
    id: 3,
    title: "Facetrack - Smart Attendance Monitoring",
    date: "Major Project",
    image:
      "https://res.cloudinary.com/daavjmge8/image/upload/v1737615099/faceattendance_ek9ezk.png",
    techStack: ["Python", "Machine Learning", "Opencv", "Firebase"],
    description:
      "This project is aimed at building a Siamese Neural Network for facial recognition using TensorFlow and OpenCV. ",
    bulletPoints: [
      "Collect positive and negative image pairs for training",
      "Implementation of Siamese Neural Network for learning embeddings",
      "Training the model to recognize similarities between facial images",
      "Evaluating the model performance with diffrent metrices",
    ],
    liveLink: "https://liveprojectlink.com",
    githubLink:
      "https://github.com/Prathamesh-Bhaskar/FacetrackAi--Smart-Attendance-Monitoring",
  },
  {
    id: 4,
    title: "AppleVisionAssist - AI for apple products",
    date: "Dec 2023",
    image:
      "https://res.cloudinary.com/daavjmge8/image/upload/v1737615100/applevision_j1ibid.jpg",
    techStack: ["ChatBot", "GenerativeAI", "LLM", "Streamlit"],
    description:
      "AppleVisionAssist is a conversational AI chatbot that serves both as an information resource and a sales agent for Apple's Vision Pro product. ",
    bulletPoints: [
      "Provide users with detailed product insights, answer queries for products",
      "Built using streamlit for backend and groq api for content",
      "Utilize tools like Chroma, HuggingFace for efficient information retrieval.",
      "Integration with document loaders, retrievers for sourcing  information",
    ],
    liveLink: "https://liveprojectlink.com",
    githubLink: "https://github.com/Prathamesh-Bhaskar/AppleVisionAssist",
  },
  {
    id: 5,
    title: "STUFIN - Fintech learning app for students",
    date: "BlackRock HackNight 2024 ",
    image:
      "https://res.cloudinary.com/daavjmge8/image/upload/v1737615101/stufin_wzymuk.jpg",
    techStack: [
      "React",
      "TypeScript",
      "Express",
      "JWT",
      "MongoDB",
      "Streamlit",
    ],
    description:
      "Financial literacy and tracking application tailored for students integrating analytics that track their financial health",
    bulletPoints: [
      "Students can track their monthly Expenses and get personalized recommendations based on their Expenses and Savings",
      "Worked on robust data pipelines for real-time integration using MongoDB",
      "Engineered application architecture and crafted database schema",
      "improved data retrieval speed by 40 percent during user interactions.",
    ],
    liveLink: "https://liveprojectlink.com",
    githubLink: "https://github.com/Prathamesh-Bhaskar/Stufin",
  },
];
