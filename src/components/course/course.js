
import './course.css';
// import Background from './coursebg';
import Coursecard from './coursecard';
import C1 from './c1.png';
import C2 from './c2.png';
import Backimage from './RZ.jpg'
import Overlay from '../background/overlay';
import Background from '../background/bgimg';
import cartimg1 from './cartimg.png';
import cartimg2 from './cartimg2.png';
function App() {
  const courses =[
    {
      id: 1,
      name: 'Arabic Master Class (Part 1)',
      ratings:60,
      price: 5000,
      image1: C1,
      image2: cartimg1
  },{
      id: 2,
      name: 'Arabic Master Class (Part 2)',
      price: 5000,
      ratings:20,
      image1: C2,
      image2: cartimg2
  }
  ]
  return (
    <div className="App">
      
        
        <Background bg={Backimage}/>
        <Overlay heading=''/>
        <div className='bodymain'>
            <div className='heading'>
                
                <div><p className='p2' >Checkout New List</p></div>
                <div><p className='tagcourses'>Explore Our Courses</p></div>
            </div>
            <div className='courses'>
              {
                courses.map((course) => (
                  <Coursecard subtitle={course.name} image={course.image1} image2={course.image2} ratings={course.ratings} price={course.price} />
                ))
              }
                
                
            </div>
        </div>
    
    </div>
  );
}

export default App;
