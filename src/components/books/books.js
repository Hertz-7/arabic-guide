
import './books.css';
import Overlay from '../background/overlay';
import Background from '../background/bgimg';
import Bookimg from './banner.jpg'
import Bookscard from './bookcard';
import b1 from './book-1.jpg';
import b2 from './book-2.jpg';
import cartb1 from './cartimgb1.jpg';
import cartb2 from './cartimgb2.jpg';
function App() {
  const Books=[{
                    id: 1,
                    name:'Al-Arabiya lin-Nasheen',
                    price: 500,
                    image1:b1,
                    image:cartb1
                },{
                    id: 2,
                    name : 'Arabia lin Nashieen Book 2',
                    price: 500,
                    image1:b2,
                    image:cartb2
                }]
  return (
    <div className="App">

        <Background bg={Bookimg}/>
        <Overlay heading="Books"/>
        <div className='bodymain'>
            <div className='heading'>
                
                <div><p className='bookp2' >Checkout New List</p></div>
                <div><p className='booktag'>Explore Our Books</p></div>
            </div>
            <div className='bookcards'>
              {
              Books.map((book) => (
                <Bookscard subtitle={book.name} image={book.image1} image2={book.image} price={book.price} />
              ))
              }
            </div>
        </div>
    
    </div>
  );
}

export default App;
