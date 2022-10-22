
import './App.css';
import MainFrame from './pages/home/MainFrame';
//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainFrame />
      </div>
    </Provider>
  );
}

export default App;
