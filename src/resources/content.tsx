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
  lastName: "Shrivathsa",
  name: "Varun Shrivathsa",
  role: "Robotics Software Engineer | Autonomous Systems",
  avatar: "/images/avatar.jpg", // must exist at /public/images/avatar.jpg
  email: "varunpshrivathsa@gmail.com",
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
    link: "https://www.linkedin.com/in/varps/",
  },
  { name: "Email", icon: "email", link: `mailto:${person.email}` },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      <div style={{ fontSize: "0.8em" }}>
      Veni. Vidi. Vici.
    </div>
      <div style={{ whiteSpace: "nowrap" }}>
  SLAM. Perception. Control.
</div>
    </>
  ),
  subline: (
    <>
      I'm Varun, a Robotics Software Engineer specializing in end-to-end
      autonomous systems that integrate perception, mapping, planning, and control
      into real-time autonomy stacks.
    </>
  ),
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
      Robotics Software Engineer specializing in end-to-end autonomous systems, 
      integrating perception, mapping, planning, and control into real-time autonomy stacks. At UIC Robotics Lab, 
      I build perception-driven pipelines using RGB-D, LiDAR, and IMU for SLAM and safe navigation. 
      My research embeds Control Barrier Functions into 
      3D Gaussian Splatting for provably safe, real-time autonomous exploration on resource-constrained robotic platforms.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "University of Illinois - Chicago",
        timeframe: "Jun 2023 - Jun 2024",
        role: "Graduate Research Assistant - Robotics",
        achievements: [
          <>
            Conducting research on real-time 3D and 4D Gaussian scene representations for 
            autonomous campus-scale mapping, navigation, and safety-critical decision making on mobile robots.
          </>,
          <>
            Designing Gaussian-based scene representations as a geometry-grounded interface 
            between perception, planning, and control, enabling downstream safety reasoning.
          </>,
          <> Investigating geometry-aware safety mechanisms, including the use of Gaussian representations as inputs to
          control barrier function (CBF) constraints for real-time control.</>,
        ],
        images: [],
      },
      {
        company: "G19 Studio",
        timeframe: "Jan 2025 - Jan 2026",
        role: "ML Engineer Intern - Adv NLP Coursework",
        achievements: [
          <>
            Developed Twinverse with researchers and stakeholders for stress & fall detection and personalized exercise planning.
          </>,
          <>
            Built real-time wearable data ingestion and processing pipelines for Apple Watch and Garmin sensor data.
          </>,
          <>Developed pipeline using TCN, Prophet and XGBoost, achieving 88% stress and 92% fall-detection accuracy</>,
        ],
        images: [],
      },
      {
        company: "National Institute of Advanced Studies, IISc",
        timeframe: "Jun 2023 - Jun 2024",
        role: "Research Intern",
        achievements: [
          <>
            Conducted funded research on large-scale geospatial analysis focusing on geometry-driven modelling of 
            land-use and environmental changes.
          </>,
          <>
            Designed and evaluated supervised spatial classification pipelines over multi-resolution remote sensing data, 
            emphasising uncertainty handling and interpretability of geometric features.
          </>,
          <>Performed multi-temporal, pixel- and region-level change analysis to quantify infrastructure-induced 
          environmental impact, reinforcing principles of scene representation, spatial consistency, and 
          long-horizon mapping relevant to autonomous systems.
</>,
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
    slug: "hierarchical-clustering-image-segmentation",
    metadata: {
      title: "How RGB-D misalignment can cause issues?",
      image: "/blogs/blog10.jpg",
      publishedAt: "2026-03-04",
      tag: "Robotics",
      externalUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7435060346140299266/?originTrackingId=TnQ4tNe3WtrZmw26LVJmvQ%3D%3D",
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
