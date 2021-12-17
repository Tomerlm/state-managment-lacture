import './App.css';
import Question from './Question';
import Progress from './Progress';
import { Provider } from 'react-redux';
import store from './state/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

export default App;
