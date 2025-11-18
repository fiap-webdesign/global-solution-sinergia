import Home from './pages/Home';
import { NormalizeStyles } from './shared/NormalizeStyles';

import Navbar from './components/Navbar';

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