import { NormalizeStyles } from './shared/NormalizeStyles';

import Navbar from './components/Navbar';
import TestimonialsCarousel from './components/TestimonialsCarousel';

function App() {
  return (
    <div className='container'>
      <NormalizeStyles />
      <Navbar />
      <TestimonialsCarousel />
    </div>
  )
}

export default App;