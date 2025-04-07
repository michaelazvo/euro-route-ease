const AssignmentCard = ({
  title,
  description,
  date,
  source,
}: {
  title: string;
  description: string;
  date: string;
  source: string;
}) => (
  <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow duration-300">
    <span className="text-sm text-muted-foreground">{date}</span>
    <h3 className="text-xl font-semibold mt-2">{title}</h3>
    <p className="mt-2 text-muted-foreground">{description}</p>
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block text-primary hover:underline">
      See more →
    </a>
  </div>
);

import Footer from "@/components/Footer";
import swotAnalysis from "../assets/assignments/swot.pdf";
import presentationIntro from "../assets/assignments/presentation_intro.pdf";
import userRequirements from "../assets/assignments/user_requirements.pdf";
import ethicalAspects from "../assets/assignments/ethical-aspects.pdf";
import erDiagram from "../assets/assignments/ER_diagram.pdf";
import modelData from "../assets/assignments/vizualizacia_modelovych_dat.pdf";
import ganttChart from "../assets/assignments/gantt-chart.pdf";
import supplyChain from "../assets/assignments/supply-chain.pdf";

const Assignments = () => {
  const assignments = [
    {
      title: "Assignment 8",
      description: "Supply chain",
      date: "March 31, 2025",
      source: supplyChain,
    },
    {
      title: "Assignment 7",
      description: "Gantt chart",
      date: "March 24, 2025",
      source: ganttChart,
    },
    {
      title: "Assignment 6",
      description: "Visualization of data",
      date: "March 17, 2025",
      source: modelData,
    },
    {
      title: "Assignment 5",
      description: "ER diagram",
      date: "March 10, 2025",
      source: erDiagram,
    },
    {
      title: "Assignment 4",
      description: "Ethical aspects",
      date: "March 3, 2025",
      source: ethicalAspects,
    },
    {
      title: "Assignment 3",
      description: "SWOT analysis",
      date: "February 24, 2025",
      source: swotAnalysis,
    },
    {
      title: "Assignment 2",
      description: "User Requirements",
      date: "February 17, 2025",
      source: userRequirements,
    },
    {
      title: "Assignment 1",
      description: "Project Initial Presentation",
      date: "February 10, 2025",
      source: presentationIntro,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-24 px-6 animate-fadeIn">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-sm bg-secondary inline-block rounded-full">Course Materials</span>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-4">Assignments</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            All the assignments we have complited during the semester are listed below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment, index) => (
            <AssignmentCard key={index} {...assignment} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Assignments;
