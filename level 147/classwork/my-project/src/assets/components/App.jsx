import { useState} from 'react'
import './app.css'
import Button from './ui/buton';



export default function ProfileCard() {
  return (
    <div>
      <Button></Button>
    </div>
  );
}
//1. components ში შევქმნით ui -- სადაც button.jsx and button.css create
//2. App.jsx and App.css move to components 
//3. we stole button styles from index.css :DD and give it to button.css
//4. we create Button default function to button.jsx and import button.css
//5. we get props from button function and werite on button 
//6. we import Button and write what we want inside  the element <Button> lomiii </Button>