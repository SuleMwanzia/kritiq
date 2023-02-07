
import './App.css';

const App =() => {
  const name = 'Rama';
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Karibu Sana, Kritiq {isNameShowing ? name : 'Mgeni'}!</h1>
      {name ? (
        <> 
        test
        
        </>
      ) : (
        test
      )}  
    </div>
  );
}

export default App;
