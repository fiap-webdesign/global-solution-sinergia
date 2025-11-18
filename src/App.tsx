import Home from './pages/Home';
import { NormalizeStyles } from './shared/NormalizeStyles';

import Navbar from './components/Navbar';
import TestimonialsCard from './components/TestimonialsCard';

function App() {
  return (
    <>
      <NormalizeStyles />
      <Navbar />
      <Home />
    </>
  )
}

export default App;