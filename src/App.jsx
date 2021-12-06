import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';

function App() {
   return (
      <div>
         <Topbar />
         <div className="container">
            <Sidebar />
            <div className="rightSide">Right Side</div>
         </div>
      </div>
   );
}

export default App;
