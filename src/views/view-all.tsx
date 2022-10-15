import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Head from "../components/Head";

import { dictEntry, letterDict } from "../components/LetterDictionary";


// This is a high-level view of what the page will be
export const ViewAll = () => {
  return (
    <div className="h-full w-full bg-lightBlue column centered overflow-hidden">
      <Head
        title="Russian Alphabet" // Title of page for metadata, displayed on tab menu
        description="Select a letter to play it's sound!" // Description of page for metadata
        url="" // This is the final url of the page, used for embed/meta data
      />
      <Sample/>
    </div>
  );
};

// This is the Body of the page, does not include header, nav, or footer
// Custom props are defined in this interface
interface props {}
// Default values are defined in this interface
const defaultProps: Partial<props> = {};

const Sample: React.FC<props> = () => {

  const [letter, setLetter] = useState<dictEntry>();
  const [playAudio, setPlayAudio] = useState(false);

  return (
    <div className="midground">
      <div className="foreground column centered">
        {/*@ts-ignore*/}
        <Link 
            className="fixed bottom-0 text-pink-600 p-2 underline cursor-pointer select-none"
            to="/"
        >
            {"< Go Back"}
        </Link>

        <div className="letterDisplayViewAll centered column">
        { letter?.letter }
        {playAudio // Plays audio if playAudio is set to true, sets it to false once finished playing
        ? <audio autoPlay={true} className="h-12 text-8 my-4" onEnded={() => {setPlayAudio(false);}}>
            <source src={letter?.filename} type="audio/mpeg"/>
          </audio>
        : ''}
        </div>
        
        <div className="dictionaryDisplay">
          {
            letterDict.map((l) => {
                return (
                    <div 
                        className={"letterInRow " + (playAudio ? "inactiveButton" : "activeButton") }
                        key={l.letter}
                        onClick={() => { if(!playAudio) {setLetter(l); setPlayAudio(true);} }}
                    > 
                        {l.letter} 
                    </div>
                );
            })
          }
        </div>
      </div>
      
    </div>
  );
};

Sample.defaultProps = defaultProps;
export default ViewAll;
