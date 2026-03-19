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
    title: "Depth-Color Real-Time Alignment ROS2 Node",
    description:
      "Implemented a ROS2 node 'depth_to_color_align_node' that runs during rosbag recording and produces a RGB-Depth aligned Images.",
    tools: ["ROS2", "PyTorch"],
    image: "/images/projects/project-02/cover-02.jpg", // swap to your own later
    github: "https://github.com/varunpshrivathsa/depth_to_color_align_node",
    // demo: "https://github.com/varunpshrivathsa?tab=repositories",
    order: 4,
  },
    {
    title: "Monocular Visual Odometry (VO) ",
    description:
      "Implemented a monocular visual odometry pipeline using ORB feature detection, feature matching, and epipolar geometry to estimate camera trajectory from image sequences on the KITTI dataset.",
    tools: ["KITTI", "PyTorch", "Computer Vision"],
    image: "/images/projects/project-03/cover-01.jpg", // swap to your own later
    github: "https://github.com/varunpshrivathsa/Monocular-Visual-Odometry-ORB",
    // demo: "https://github.com/varunpshrivathsa?tab=repositories",
    order: 3,
  },
  {
    title: "Stereo Visual Odometry (S-VO)",
    description:
      "Developed a stereo visual odometry pipeline to estimate camera trajectory from sequential image pairs on the KITTI dataset. Implemented ORB feature detection and descriptor matching across stereo and temporal frames, followed by outlier rejection using RANSAC.",
    tools: ["KITTI", "OpenCV", "NumPy", "Computer Vision", "PyTorch"],
    image: "/images/projects/project-04/cover-01.jpg",
    github: "https://github.com/varunpshrivathsa/Stereo-Visual-Odometery",
    order: 2,
  }
];
