import yeliImage from '../assets/yeli.png';
import svitoImage from '../assets/svito.png';
import ihorImage from '../assets/ihor.png';
import miskaImage from '../assets/miska.png';
import Footer from '@/components/Footer';

const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <div className="group relative overflow-hidden rounded-lg bg-card border p-6 hover:shadow-lg transition-shadow duration-300">
    <div className="aspect-square rounded-full overflow-hidden mb-4 bg-muted">
      <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" loading="lazy" />
    </div>
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-muted-foreground">{role}</p>
  </div>
);

const About = () => {
  const team = [
    {
      name: 'Svitozar Railian',
      role: 'Manager',
      image: svitoImage,
    },
    {
      name: 'Yelyzaveta Liakhovets',
      role: 'Creative',
      image: yeliImage,
    },
    {
      name: 'Ihor Hoi',
      role: 'Versatilist',
      image: ihorImage,
    },
    {
      name: 'Michaela Zvolenská',
      role: 'ICT Specialist',
      image: miskaImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-24 px-6 animate-fadeIn">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-sm bg-secondary inline-block rounded-full">Our Team</span>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-4">Meet the Team</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">We're a dedicated group of professionals passionate about creating exceptional web experiences.</p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
