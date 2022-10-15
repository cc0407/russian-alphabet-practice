import React, { useState } from "react";
import Head from "../components/Head";
// @ts-ignore
import bruh from "../audio/Bruh.mp3" ;
// @ts-ignore
import mining from "../audio/IM MINING.mp3" ;
// @ts-ignore
import yeah from "../audio/Yeahh Boy.mp3" ;

import { dictEntry, CreateLetterDictionary } from "../components/LetterDictionary";


// This is a high-level view of what the page will be
export const SamplePage = () => {
  return (
    <div className="h-full w-full bg-lightBlue column centered overflow-hidden">
      <Head
        title="Russian Alphabet Test" // Title of page for metadata, displayed on tab menu
        description="Presents a random Cyrillic letter, and plays its associated sound when prompted." // Description of page for metadata
        url="" // This is the final url of the page, used for embed/meta data
      />
      <Sample />
    </div>
  );
};

const getRandomLetter = (dictionary) => {
  const length = dictionary.length;
  const randomIndex = Math.floor(Math.random() * length);
  return dictionary[randomIndex];
}


// This is the Body of the page, does not include header, nav, or footer
// Custom props are defined in this interface
interface props {}
// Default values are defined in this interface
const defaultProps: Partial<props> = {};

const Sample: React.FC<props> = () => {
  const dictionary = CreateLetterDictionary();
  const [letter, setLetter] = useState(getRandomLetter(dictionary));
  const [playAudio, setPlayAudio] = useState(false);
  

  console.log(dictionary);
  return (
    <div className="midground">
      <div className="foreground column centered">
        <div className="letterDisplay centered">
          {letter.letter}
        </div>

        {playAudio // Plays audio if playAudio is set to true, sets it to false once finished playing
        ? <audio autoPlay={true} className="h-12 text-8 my-4" onEnded={() => {setPlayAudio(false);}}>
            <source src={letter.sound} type="audio/mpeg"/>
            <source src={bruh} type="audio/mpeg"/>
          </audio>
        : ''}
        
        <div className="buttonWrapper">
          <div className={'button leftButton ' + (playAudio ? `` : `activeButton`)} onClick={() => {setPlayAudio(true);}}>
            { !playAudio ? "Play Sound" : "Playing..." }
          </div>
          <div className={"button rightButton activeButton " + (playAudio ? 'invisible' : '')} onClick={() => {setLetter(getRandomLetter(dictionary));}}>
            Next Letter
          </div>
        </div>
      </div>
      
    </div>
  );
};

Sample.defaultProps = defaultProps;
export default SamplePage;
