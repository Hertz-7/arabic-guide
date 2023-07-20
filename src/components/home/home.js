
import './home.css';
import  ClassCard  from '../classcard/classcard';
import Homebody from '../homebody/homebody';
import Homebodybg from '../homebodybg/homebodybg';
import Courseguide from '../courseguide/courseguide';
import Whattolearn from '../whattolearn/whattolearn';
import Testimonials from '../testimonials/testimonials';
import Faq from '../faq/faq';
import{BsFillPeopleFill,BsFillBookFill} from "react-icons/bs";
function App() {
  return (
    <div className="App">
      
      <div >
        <Homebodybg className="homebodybg"/>
        <Homebody className="homebody"/> 
        <div className='classcards'>
          <ClassCard className="card1" icon={<BsFillPeopleFill/>} title="ARABIC MASTERCLASS" txt="Pre-recorded Lectures"/> 
          <ClassCard className="card1" icon={<BsFillBookFill/>} title="ARABIC MASTERCLASS BOOKS" txt="PDF"/> 
        </div>
      </div>
      <Courseguide/>
      <Whattolearn/>
      <Faq/>
      <Testimonials/>
    </div>
  );
}

export default App;
