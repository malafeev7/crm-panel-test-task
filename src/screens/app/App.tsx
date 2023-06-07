import { Header } from 'components/Header';
import './App.style.scss';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from 'screens/homeScreen';
import AddressScreen from 'screens/addressScreen';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='address' element={<AddressScreen />} />
      </Routes>
    </div>
  );
}

export default App;
