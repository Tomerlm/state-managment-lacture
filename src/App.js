import logo from './logo.svg';
import './App.css';
import Question from './Question';
import Progress from './Progress';
import { Provider } from 'react-redux';
import store from './state/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div>
            <Question></Question>
            <Progress></Progress>
          </div>
        </header>
      </div>
    </Provider>
  );
}

export default App;
