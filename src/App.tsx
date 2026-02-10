import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Marketing from './components/Marketing';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import MonthlyCosts from './components/MonthlyCosts';
import Guarantees from './components/Guarantees';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Plans />
      <MonthlyCosts />
      <Marketing />
      <TechStack />
      <Timeline />
      <Guarantees />
      <FAQ />
      <Footer />
    </div>
  );
}
