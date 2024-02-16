import './App.css';
import ImageComponent from './components/ImageComponent';

//20 images
const mockData=[
  {
    id:1,
    desc:"NATURE IMAGE",
    src:"https://plus.unsplash.com/premium_photo-1667311649552-2cfab63bdcfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  },
  {
    id:2,
    desc:"BRIDGE IN NATURE",
    src:"https://images.unsplash.com/photo-1563207937-508961e52353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  },
  {
    id:3,
    desc:"A MAN STANDING",
    src:"https://images.unsplash.com/photo-1618886487325-f665032b6352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  },
  {
    id:4,
    desc:"NATURE IMAGE",
    src:"https://plus.unsplash.com/premium_photo-1667311649552-2cfab63bdcfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  },
  {
    id:5,
    desc:"BRIDGE IN NATURE",
    src:"https://images.unsplash.com/photo-1563207937-508961e52353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  },
  {
    id:6,
    desc:"A MAN STANDING",
    src:"https://images.unsplash.com/photo-1618886487325-f665032b6352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
  }
]



function App() {
  return (
    <div className="App">
      IMAGE GALLERY APP
      <div style={{display:"flex",justifyContent:"space-around",}}>
        {
          mockData.map((elem)=>(
            <ImageComponent id={elem.id} desc={elem.desc} src={elem.src} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
