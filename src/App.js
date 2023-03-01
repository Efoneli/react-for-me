import Creams from './components/Creams';
import './components/Creams.css'
import data from './data';

function App() {
  const newData = data.map(item  => {
    return (
      <Creams 
      img={item.img}
      name={item.name}
      contact={item.contact}
      review={item.review}
      />
    )
  })
  return (
    <div className="main-app">
      {newData}
    </div>
  );
}

export default App;
