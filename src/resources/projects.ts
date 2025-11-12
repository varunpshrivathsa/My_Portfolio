// src/resources/projects.ts
export type Project = {
  title: string;
  description: string;
  tools: string[];           // badges shown on the card
  image: string;             // public path, e.g. "/images/projects/xyz/cover.jpg"
  github?: string;           // "View code" button (optional)
  demo?: string;             // "Live demo" button (optional)
  order?: number;            // lower number appears first (optional)
  publishedAt?: string;      // optional if you ever want date sorting
};

export const projects: Project[] = [
  {
    title: "V-SLAM: Visual-LiDAR SLAM with Map Priors",
    description:
      "Developed a real-time SLAM pipeline with visual features, LiDAR scans, and GNSS/IMU fusion for localization and dynamic mapping.",
    tools: ["PyTorch", "CUDA", "KITTI", "ResNet18"],
    image: "/images/projects/project-01/cover-01.jpg", // swap to your own later
    github: "https://github.com/varunpshrivathsa?tab=repositories",
    demo: "https://github.com/varunpshrivathsa?tab=repositories",
    order: 1,
  },
  {
    title: "TurboFanRUL: Remaining Useful Life Prediction System",
    description:
      "• Developed turbofan engine RUL prediction pipeline using Linear Regression, Random Forest, and XGBoost.\n• Tuned XGBoost with Optuna, improving RMSE, R², and MAE while automating tracking through MLflow.\n• Deployed FastAPI service on AWS EC2 and built Streamlit dashboard for real-time prediction visualization.",
    tools: ["Python", "MLFlow", "Docker", "AWS EC2","FastAPI", "Streamlit"],
    image: "/images/projects/project-03/cover-01.jpg",
    github: "https://github.com/varunpshrivathsa/TurboFanRUL",
    demo: "https://turbofanrul-dashboardgit-xzhc7y3livzwpswlalnwjk.streamlit.app/",
    order: 2,
  },
];
