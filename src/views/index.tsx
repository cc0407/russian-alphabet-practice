import React, { useState } from "react";
import Head from "../components/Head";
import RoundedLink from "../components/RoundedLink"
// @ts-ignore
import bruh from "../audio/Bruh.mp3" ;
// @ts-ignore
import mining from "../audio/IM MINING.mp3" ;
// @ts-ignore
import yeah from "../audio/Yeahh Boy.mp3" ;


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
const getRandomLetter = () => {
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
  const [letter, setLetter] = useState(getRandomLetter());
  const [playAudio, setPlayAudio] = useState(false);

  return (
    <div className="midGround">
      <div className="column centered h-full w-5/6 400:w-3/4 max-w-[550px] mx-auto">
        <div className="letterDisplay centered">
          {letter.letter}
        </div>

        {playAudio // Plays audio if playAudio is set to true, sets it to false once finished playing
        ? <audio autoPlay={true} className="h-12 text-8 my-4" onEnded={() => {setPlayAudio(false);}}>
            <source src={letter.sound} type="audio/mpeg"/>
          </audio>
        : ''}
        
        <div className="flex flex-col 640:flex-row justify-between mt-12 w-full">
          <div className={(playAudio ? `playingButton` : `button leftButton`)} onClick={() => {setPlayAudio(true);}}>
            { !playAudio ? "Play Sound" : "Playing..." }
          </div>
          {playAudio 
            ? '' 
            : <div className="button rightButton" onClick={() => {setLetter(getRandomLetter);}}>
                Next Letter
              </div>
          }
        </div>
      </div>
      
    </div>
  );
};

interface dictEntry {
  letter: string,
  sound: string,
}
const dictionary:dictEntry[] = [
    {letter:'Аа', sound:mining},
    {letter:'Бб', sound:mining},
    {letter:'Вв', sound:mining},
    {letter:'Гг', sound:mining},
    {letter:'Дд', sound:mining},
    {letter:'Ее', sound:mining},
    {letter:'Ёё', sound:mining},
    {letter:'Жж', sound:mining},
    {letter:'Зз', sound:mining},
    {letter:'Ии', sound:yeah},
    {letter:'Йй', sound:yeah},
    {letter:'Кк', sound:yeah},
    {letter:'Лл', sound:yeah},
    {letter:'Мм', sound:yeah},
    {letter:'Нн', sound:yeah},
    {letter:'Оо', sound:yeah},
    {letter:'Пп', sound:yeah},
    {letter:'Рр', sound:yeah},
    {letter:'Сс', sound:bruh},
    {letter:'Тт', sound:bruh},
    {letter:'Уу', sound:bruh},
    {letter:'Фф', sound:bruh},
    {letter:'Хх', sound:bruh},
    {letter:'Цц', sound:bruh},
    {letter:'Чч', sound:bruh},
    {letter:'Шш', sound:bruh},
    {letter:'Щщ', sound:bruh},
    {letter:'Ъъ', sound:bruh}, // NOSOUND SOFT MODIFIER
    {letter:'Ыы', sound:bruh},
    {letter:'Ьь', sound:bruh}, // NOSOUND HARD MODIFIER
    {letter:'Ээ', sound:bruh},
    {letter:'Юю', sound:bruh},
    {letter:'Яя', sound:bruh},
  ];

Sample.defaultProps = defaultProps;
export default SamplePage;
