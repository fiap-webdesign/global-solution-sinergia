import { NormalizeStyles } from './shared/NormalizeStyles';

import Header from './components/Header';
import Beneficios from './components/Beneficios';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className='container'>
      <NormalizeStyles />
      < Header/>
      <Beneficios />
      <Newsletter />

      <h1 className='text-center'>Hello, sinergIA!</h1>
    </div>
  )
}

export default App;