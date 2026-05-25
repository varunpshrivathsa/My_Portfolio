// src/resources/projects.ts
export type Project = {
  title: string;
  description: string;
  tools: string[];
  image: string;
  github?: string;
  demo?: string;
  order?: number;
  publishedAt?: string;
  category: string;
};

export const projects: Project[] = [
  {
    title: "Depth-Color Real-Time Alignment ROS2 Node",
    description:
      "Implemented a ROS2 node 'depth_to_color_align_node' that runs during rosbag recording and produces a RGB-Depth aligned Images.",
    tools: ["ROS2", "PyTorch"],
    image: "/images/projects/project-02/cover-02.jpg",
    github: "https://github.com/varunpshrivathsa/depth_to_color_align_node",
    order: 4,
    category: "Robotics Systems",
  },
  {
    title: "Monocular Visual Odometry (VO)",
    description:
      "Implemented a monocular visual odometry pipeline using ORB feature detection, feature matching, and epipolar geometry to estimate camera trajectory from image sequences on the KITTI dataset.",
    tools: ["KITTI", "PyTorch", "Computer Vision"],
    image: "/images/projects/project-03/cover-01.jpg",
    github: "https://github.com/varunpshrivathsa/Monocular-Visual-Odometry-ORB",
    order: 3,
    category: "Perception",
  },
  {
    title: "Stereo Visual Odometry (S-VO)",
    description:
      "Developed a stereo visual odometry pipeline to estimate camera trajectory from sequential image pairs on the KITTI dataset. Implemented ORB feature detection and descriptor matching across stereo and temporal frames, followed by outlier rejection using RANSAC.",
    tools: ["KITTI", "OpenCV", "NumPy", "Computer Vision", "PyTorch"],
    image: "/images/projects/project-04/cover-01.jpg",
    github: "https://github.com/varunpshrivathsa/Stereo-Visual-Odometery",
    order: 2,
    category: "Perception",
  },
  {
    title: "LiDAR Odometry (L-VO)",
    description:
      "Developed a LiDAR odometry pipeline to estimate ego-motion from sequential point clouds on the KITTI dataset. Implemented point cloud preprocessing and voxel downsampling, followed by point-to-plane ICP with outlier handling for robust frame-to-frame registration and trajectory estimation.",
    tools: ["KITTI", "LiDAR", "Computer Vision", "Open3D"],
    image: "/images/projects/project-05/cover-01.jpg",
    github: "https://github.com/varunpshrivathsa/LiDAR-Odometry",
    order: 1,
    category: "Perception",
  }
];