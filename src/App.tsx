import Home from './pages/Home';
import { NormalizeStyles } from './shared/NormalizeStyles';

import Navbar from './components/Navbar';
import TestimonialsCarousel from './components/TestimonialsCarousel';

function App() {
  return (
    <>
      <NormalizeStyles />
      <Navbar />
      <TestimonialsCarousel />
    </>
  )
}

export default App;