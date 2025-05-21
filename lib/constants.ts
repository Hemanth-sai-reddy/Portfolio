import { 
  GraduationCap, 
  Code, 
  FileText, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Github,
  BookOpen
} from "lucide-react";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const EDUCATION = [
  {
    id: 1,
    institution: "Kalasalingam Academy of Research and Education",
    degree: "B.Tech – Computer Science & Engineering (AI/ML)",
    duration: "2021 – 2025",
    grade: "CGPA: 8.77",
    icon: GraduationCap,
  },
  {
    id: 2,
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate Education",
    duration: "2019 – 2021",
    grade: "Percentage: 94.2%",
    icon: BookOpen,
  },
  {
    id: 3,
    institution: "Dr. KKR Gowtham Concept School",
    degree: "Secondary Education",
    duration: "2018 – 2019",
    grade: "CGPA: 9.5",
    icon: BookOpen,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "AI + Streamlit Platform for Data Assistance",
    description: "Real-time visualization, preprocessing, and smart analytics with seamless interaction using Streamlit.",
    longDescription: "Developed an integrated platform that leverages artificial intelligence algorithms to provide automated data analysis, visualization, and preprocessing capabilities. The platform uses Streamlit to create an intuitive and interactive user interface, allowing users without technical expertise to derive valuable insights from complex datasets. Features include automated data cleaning, pattern recognition, visualization suggestion, and predictive analytics.",
    technologies: ["Python", "Streamlit", "Machine Learning", "Data Visualization", "Pandas", "Scikit-learn"],
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: Code,
  },
  {
    id: 2,
    title: "Startup Guidance Platform for Entrepreneurs in India",
    description: "AI-powered solution addressing fragmented ecosystems and mentorship gaps.",
    longDescription: "Created a comprehensive platform designed to support entrepreneurs in India by addressing the challenges of fragmented startup ecosystems and limited access to quality mentorship. The platform uses AI to match entrepreneurs with suitable mentors based on their industry, stage, and specific challenges. It also provides resources, funding opportunities, and networking capabilities tailored to the Indian market. The solution includes features for business plan development, market analysis, funding preparation, and regulatory compliance guidance.",
    technologies: ["React.js", "Node.js", "MongoDB", "Natural Language Processing", "Machine Learning", "Express.js"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: Code,
  },
];

export const PUBLICATIONS = [
  {
    id: 1,
    title: "A Comprehensive Platform for Entrepreneurs Startup Guidance and Networking",
    conference: "4th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS 2024)",
    abstract: "This paper presents a novel platform designed to address the challenges faced by entrepreneurs in accessing quality mentorship and navigating the startup ecosystem in India. The platform leverages artificial intelligence to connect entrepreneurs with appropriate mentors and resources based on their specific needs and industry focus.",
    link: "https://ieeexplore.ieee.org/document/10867181",
    icon: FileText,
  },
  {
    id: 2,
    title: "Data Assistance Through AI and Streamlit Integration",
    conference: "ICUIS 2024",
    abstract: "This research introduces an innovative approach to data analysis and visualization through the integration of AI algorithms with Streamlit's interactive framework. The platform enables users without technical expertise to perform complex data operations through an intuitive interface, democratizing access to data insights.",
    link: "https://ieeexplore.ieee.org/document/10867196",
    icon: FileText,
  },
];

export const SKILLS = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Python", level: 95 },
  { name: "Java", level: 80 },
  { name: "SQL", level: 85 },
  { name: "Web Development", level: 90 },
  { name: "AI/ML", level: 95 },
  { name: "Data Analysis", level: 90 },
];

export const CONTACT_INFO = [
  {
    id: 1,
    type: "Email",
    value: "saireeddy1997@gmail.com",
    icon: Mail,
    href: "mailto:saireeddy1997@gmail.com",
  },
  {
    id: 2,
    type: "Phone",
    value: "+91 9676188449",
    icon: Phone,
    href: "tel:+919676188449",
  },
  {
    id: 3,
    type: "Location",
    value: "Nellore, Andhra Pradesh",
    icon: MapPin,
    href: null,
  },
];

export const SOCIAL_LINKS = [
  {
    id: 1,
    platform: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/devarapalli-hemanth-sai-b71654295/",
  },
  {
    id: 2,
    platform: "GitHub",
    icon: Github,
    href: "https://github.com/Hemanth-sai-reddy",
  },
];