import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './profil/ProfilePhoto';
import FullName from './profil/FullName';
import Address from './profil/Address';
function App() {
  return (
    <div className="contenair">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
