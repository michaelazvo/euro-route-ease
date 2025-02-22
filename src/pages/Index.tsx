import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';

const Index = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const previewText =
    'The "Euro Route Ease" project simplifies toll payments for European travelers by offering a unified digital platform. With varied toll systems across countries, this initiative streamlines purchases, reduces preparation time, and enhances convenience.';

  const fullText =
    'The "Euro Route Ease" project simplifies toll payments for European travelers by offering a unified digital platform. With varied toll systems across countries, this initiative streamlines purchases, reduces preparation time, and enhances convenience. The platform features an intuitive interface, multilingual support, and seamless integration with payment methods and navigation systems. Partnering with toll operators ensures compatibility and compliance for smooth travel. AI-driven route planning and cost estimation help users optimize expenses, while account management tools benefit frequent travelers and businesses. Launching in high-traffic regions, the project will expand across Europe, prioritizing security and GDPR compliance. "Euro Route Ease" aims to modernize toll payments, making road travel easier and more efficient.';

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-6 animate-fadeIn">
        <div className="max-w-3xl w-full text-center space-y-6">
          <span className="px-3 py-1 text-sm bg-secondary inline-block rounded-full">Welcome to our project</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-primary">Euro Route Ease</h1>
          <div className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <p>{isExpanded ? fullText : previewText}</p>
            <button onClick={() => setIsExpanded(!isExpanded)} className="mt-2 text-primary hover:underline font-medium">
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link to="/assignments" className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
              View Assignments
            </Link>
            <Link to="/about" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 transition-opacity">
              Meet the Team
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
