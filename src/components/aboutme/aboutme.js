
import './aboutme.css';
import Start from './start.jpg';
import Overlay from '../background/overlay';
import Background from '../background/bgimg';
import Backimg from './BANNER-ABOUT-ME.png'
function App() {
  return (
    <div className="App">
      
        
        <Background bg={Backimg}/>
        <Overlay heading="About Me"/>
        <div className='bodymain'>
            <div className='started'>
                <p className='tagstart'>How it all Started</p>
                <p className='startedtext'>In 2010, he finished his Quran memorization journey and became a hafiz of the Quran from a renowned Islamic institute in Lahore.</p>

                <p className='startedtext'>In 2014, He started his journey toward the path of Allah, which lead him to the discovery of mesmerizing voice and the ability to cover 5 Islamic novels in his own voice.</p>
                
                <p className='startedtext'>In 2015, the unstoppable journey of voice-over started which lead him to voice over 1000+ audios and videos of many renowned Islamic scholars.</p>

                <p className='startedtext'>The same year, he also became a part of YOUTH CLUB.</p>

                <p className='startedtext'>He is currently finishing his degree of B.S in Islamic studies from an international Islamic university and at the same time, he is working as a Media team lead at YOUTH CLUB HQ.</p>

                <p className='startedtext'>In 2019, He instituted The Arabic Guide channel, in which he taught Arabic in a unique way.</p>

                <p className='startedtext'>He likes to call himself a “Filmmaker” who happens to teach Arabic as well. With a wide range of interests, he enjoys reading and writing. He has immense love for Islamic and Arabic language teaching.</p>
            </div>
            <div className='startedimg'>    
                <img src={Start} alt='teaching '/>
            </div>
        </div>
    
    </div>
  );
}

export default App;
