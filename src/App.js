import './App.css';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h3>React props and Lists</h3>
      </header>
      <h1>Name List</h1>
      <p>We are going to get some random user information 
        from <i>randomuser.me</i> and display the data as a list 
        using <b>react props and lists</b>
      </p>
       <NameList/>
    </div>
  );
}

export default App;
