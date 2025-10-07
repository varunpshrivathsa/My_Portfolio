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
];
