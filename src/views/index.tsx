import React, { useState } from "react";
import Head from "../components/Head";

import { dictEntry, dictNoSound } from "../components/LetterDictionary";
import { graphql, useStaticQuery } from "gatsby";


// This is a high-level view of what the page will be
export const SamplePage = () => {
  return (
    <div className="h-full w-full bg-lightBlue column centered overflow-hidden">
      <Head
        title="Russian Letter Practice" // Title of page for metadata, displayed on tab menu
        description="Presents a random Russian letter, and plays its associated sound when prompted." // Description of page for metadata
        url="" // This is the final url of the page, used for embed/meta data
      />
      <Sample />
    </div>
  );
};

const getRandomLetter = (currentLetter:string) => {
  var nextLetter;
  do {
  const length = dictNoSound.length;
  const randomIndex = Math.floor(Math.random() * length);
  nextLetter = dictNoSound[randomIndex];
  } while(nextLetter.letter == currentLetter);
  return nextLetter;
}


// This is the Body of the page, does not include header, nav, or footer
// Custom props are defined in this interface
interface props {}
// Default values are defined in this interface
const defaultProps: Partial<props> = {};

const Sample: React.FC<props> = () => {

  const [letter, setLetter] = useState(getRandomLetter(''));
  const [playAudio, setPlayAudio] = useState(false);

  return (
    <div className="midground">
      <div className="foreground column centered">
        <div className="letterDisplay centered">
          {letter.letter}
        </div>

        {playAudio // Plays audio if playAudio is set to true, sets it to false once finished playing
        ? <audio autoPlay={true} className="h-12 text-8 my-4" onEnded={() => {setPlayAudio(false);}}>
            <source src={"audio/" + letter.filename + ".mp3"} type="audio/mpeg"/>
          </audio>
        : ''}
        
        <div className="buttonWrapper">
          <div 
            className={'button leftButton ' + (playAudio ? `` : `activeButton`)} 
            onClick={() => {setPlayAudio(true);}}
          >
            { !playAudio ? "Play Sound" : "Playing..." }
          </div>
          <div 
            className={"button rightButton " + (playAudio ? ' inactiveButton' : 'activeButton')} 
            onClick={() => {(playAudio ? '' : setLetter(getRandomLetter(letter.letter)))}}
          >
            Next Letter
          </div>
        </div>
      </div>
      
    </div>
  );
};

Sample.defaultProps = defaultProps;
export default SamplePage;
