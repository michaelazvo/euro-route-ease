import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-lg text-primary font-semibold hover:opacity-80 transition-opacity">
            EuroRouteEase
          </Link>
          <div className="space-x-8">
            <Link to="/" className={`link-hover ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
              Home
            </Link>
            <Link to="/assignments" className={`link-hover ${location.pathname === '/assignments' ? 'text-primary' : 'text-muted-foreground'}`}>
              Assignments
            </Link>
            <Link to="/about" className={`link-hover ${location.pathname === '/about' ? 'text-primary' : 'text-muted-foreground'}`}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
