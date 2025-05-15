import './App.css';
import { Icon } from '@iconify/react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';

function App() {
  return (
    <div className="flex w-full">
      <Navbar />

      <main className="flex gap-8 w-full xl:ml-20">
        <Home />

        {/* Sidebar only on xl and above */}
        <div className="hidden xl:block w-full">
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
