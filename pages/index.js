import { useState } from 'react'
import Button from '../components/Button'
import Vector from '../components/utils/Vector.png'
import Image from 'next/image'


const Home = () => {

  const [randomMessage, setRandomMessage] = useState({ greeting: "Hola !", message: "Lorem ipsum dolor sit amet." });
  const [counter, setCounter] = useState(0);
  const handleSendNotification = () => {
    // Generate a random message (for demonstration purposes)
    const messages = [
      { greeting: "Hello !", message: "Hello! This is a random message." },
      { greeting: "Hey !", message: "You have a new notification!" },
      { greeting: "Hola !", message: "Lorem ipsum dolor sit amet." },
      { greeting: "Hii !", message: "Click the button again for another message!" },
    ];

    const index = counter;

    if (counter == 3) {
      setCounter(0);
    }
    else {
      setCounter(counter + 1);
    }

    const message = messages[index];
    // Update state to display the random message
    setRandomMessage(message);
  };

  return (

    <div className='main'>
      <div id="container">
        {randomMessage && (
          <p id="greeting">
            {randomMessage.greeting}
          </p>
        )}

        <div id="circle">
          <div id="circle2">
            <div id="circle3">
              <div id='circle4'>
                <Image id='vectorImg' src={Vector} />
              </div>
            </div>
          </div>
        </div>

        <h2 id="noti_head">New Notification...</h2>
        {randomMessage && (
          <p className='noti_msg'>
            {randomMessage.message}
          </p>
        )}

        <Button id="noty_btn" onClick={handleSendNotification}>Send Notifications</Button>
      </div>
    </div>
  )
}

export default Home
