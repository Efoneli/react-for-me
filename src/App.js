import Creams from './components/Creams';
import './components/Creams.css'
import data from './data';

function App() {
  const newData = data.map(item  => {
    return (
      <Creams 
      key={item.id}
      img={item.img}
      name={item.name}
      contact={item.contact}
      review={item.review}
      openSpots={item.openSpots}
      />
    )
  })
  return (
    <section className="main-app">
      {newData}
    </section>
  );
}

export default App;
