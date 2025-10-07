import {
  About,
  Blog,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
/**
 * IMPORTANT:
 * - Files under /public are available at the site root.
 * - Keep avatar as a RELATIVE public path (e.g., "/images/avatar.jpg").
 * - Do NOT use absolute URLs (http://localhost:3000/...) for images passed to UI components.
 */

const person: Person = {
  firstName: "Varun",
  lastName: "Phanindra",
  name: "Varun Phanindra",
  role: "ML Engineer | Software Development",
  avatar: "/images/avatar.jpg", // must exist at /public/images/avatar.jpg
  email: "vphan@ic.edu",
  location: "America/Chicago",
  languages: [],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/varunpshrivathsa?tab=repositories",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/varun-p-shrivathsa/",
  },
  { name: "Email", icon: "email", link: `mailto:${person.email}` },
  { name: "LeetCode", icon: "", link: "https://leetcode.com/u/varunpshrivathsa/" },
];

const home={
  path: "/",
  image: "/images/og/home.jpg", // served from /public/images/og/home.jpg
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I build intelligent software from data to deployment</>,
  subline: <>I’m Varun, an engineer integrating machine learning with modern software architecture from
  designing data pipelines, model training and scalable inference systems for real-world deployment.</>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a MSCS Thesis student at University of Illinois-Chicago specializing in Machine
        Learning, Deep Learning, and Robotics. Experienced in building end-to-end ML pipelines, My
        Research includes robotic exploration with hands-on work on AgileX LIMO and SCOUT Robots.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "G19 Studio",
        timeframe: "May 2025 - Aug 2025",
        role: "ML Student Intern",
        achievements: [
          <>
            Built 'TwinVerse', a human digital twin using real-time Apple Watch data with PyTorch,
            PPO-RL and XGBoost for stress &amp; fall detection.
          </>,
          <>
            Deployed with multi-modal signal processing and personalized recovery recommendations as
            Dockerized FastAPI microservices with Redis caching, improving response latency by 40%.
          </>,
        ],
        images: [],
      },
      {
        company: "Mekhalyn",
        timeframe: "Jan 2024 - Apr 2024",
        role: "Software Developer Intern",
        achievements: [
          <>
            Developed a recruiter analytics platform with Flask, React, and PostgreSQL, deployed via
            Kubernetes and CI/CD.
          </>,
          <>
            Fine-tuned GPT-3.5 using LoRA for resume insights, and ran XGBoost GPU inference on 5M+
            records, reducing screening time by 38%.
          </>,
          <>
            Implemented role-based authentication and RESTful APIs with unit tests, improving
            platform security.
          </>,
        ],
        images: [],
      },
      {
        company: "National Institute of Advanced Studies, IISc",
        timeframe: "Jun 2023 - Jun 2024",
        role: "Research Intern",
        achievements: [
          <>
            Led a GIS pipeline for STRR Phase-1 impact analysis using Cartosat, Landsat and
            ALOS-PALSAR to categorize 200m sqm with 92% accuracy.
          </>,
          <>
            Trained 2D CNNs on multispectral bands for automated land-cover segmentation, improving
            built-up detection.
          </>,
          <>Obtained Karnataka State Council for Science and Technology (KSCST) research funding.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of Illinois - Chicago",
        description: <>Master of Science in Computer Science (Thesis)</>,
      },
      {
        name: "Dayananda Sagar University",
        description: <>Bachelor of Technology - Computer Science and Engineering</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        tags: [{ name: "Figma", icon: "figma" }],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Supabase", icon: "supabase" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: "My Projects",
  description: `Design and dev projects by ${person.name}`,
};

const research = {
  path: "/research",
  label: "Research & Publications",
  title: "Research & Publications",
  description: `Publications, preprints, and talks by ${person.name}`,
};

const resume = {
  path: "/resume",
  label: "Resume",
  title: "Resume",
  description: `Resume of ${person.name}`,
};

const contact = {
  path: "/contact",
  label: "Contact",
  title: "Contact",
  description: `Get in touch with ${person.name}`,
};

/**
 * Blog cards use thumbnails under /public/blogs/.
 * Example: /public/blogs/blog1.jpg → "/blogs/blog1.jpg"
 */
const posts = [
  {
    slug: "kmeans-image-compression",
    metadata: {
      title: "Understanding K-Means Clustering: Simple Image Compression",
      image: "/blogs/blog1.jpg",
      publishedAt: "2024-12-26",
      tag: "Machine Learning",
      externalUrl:
        "https://medium.com/@varunpshrivathsa/understanding-k-means-clustering-simple-image-compression-90437350e3c455",
    },
  },
  {
    slug: "linear-regression-practical-approach",
    metadata: {
      title: "How Linear Regression Really Works? A Practical Approach",
      image: "/blogs/blog2.jpg",
      publishedAt: "2024-12-26",
      tag: "Machine Learning",
      externalUrl:
        "https://medium.com/@varunpshrivathsa/how-linear-regression-really-works-a-practical-approach-f337595d7883",
    },
  },
  {
    slug: "knn-mnist-classification",
    metadata: {
      title: "KNN Classification: MNIST Digit Recognition",
      image: "/blogs/blog3.jpg",
      publishedAt: "2025-02-12",
      tag: "Machine Learning",
      externalUrl:
        "https://medium.com/@varunpshrivathsa/knn-classification-mnist-digit-recognition-c4adf6855f19",
    },
  },
  {
    slug: "hierarchical-clustering-image-segmentation",
    metadata: {
      title: "Agglomerative Hierarchical Clustering in Image Segmentation",
      image: "/blogs/blog4.jpg",
      publishedAt: "2025-05-05",
      tag: "Machine Learning",
      externalUrl:
        "https://medium.com/@varunpshrivathsa/agglomerative-hierarchical-clustering-in-image-segmentation-c682153eb967",
    },
  },
  {
    slug: "pinecone-semantic-search-movies",
    metadata: {
      title: "Pinecone in Action: Semantic Search for Movie Recommendation.",
      image: "/blogs/blog5.jpg",
      publishedAt: "2025-05-12",
      tag: "Generative AI",
      externalUrl:
        "https://medium.com/@varunpshrivathsa/pinecone-in-action-semantic-search-for-movie-recommendation-1d597514e3ce",
    },
  },
];

const blogPosts = posts;

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  research,
  resume,
  contact,
  posts,
  blogPosts,
};
