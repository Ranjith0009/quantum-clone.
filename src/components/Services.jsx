import React from "react";
import "./Services.css";
import { FaRobot, FaDatabase, FaMicrochip, FaCogs, FaChartBar, FaSearch } from "react-icons/fa";

const servicesData = [
  {
    title: "AI-Integrated Solutions",
    description: "Our foremost initiative involves the development of AI-driven applications tailored for EduTech.",
    icon: <FaMicrochip />,
  },
  {
    title: "Robotic Process Automation",
    description: "Build workflows that automate time-consuming business tasks and processes across applications and services using Power Automate.",
    icon: <FaRobot />,
  },
  {
    title: "Generative AI and NLP",
    description: "We provide solutions like Summarization, Question and Answer Generation, Deep Sentiment Analysis, Translation, and Speech Recognition using Generative AI.",
    icon: <FaCogs />,
  },
  {
    title: "IT Consulting & Testing Services",
    description: "Optimizing technology strategies, automating processes, software development, and testing.",
    icon: <FaDatabase />,
  },
  {
    title: "Data Science and Analytics",
    description: "Our expertise in advanced analytics, machine learning, and data-driven solutions empowers businesses to make informed decisions and drive innovation.",
    icon: <FaChartBar />,
  },
  {
    title: "Web Scraping & Competition Intelligence",
    description: "Empowers businesses to monitor competitors in real-time, tracking changes in product offerings, pricing strategies, and marketing campaigns.",
    icon: <FaSearch />,
  },
];
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-header">
        {icon} {title}
      </div>
      <div className="service-description">
        <p>{description}</p>
      </div>
    </div>
  );
};



const Services = () => {
  return (
    <section  id ="services" className="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
