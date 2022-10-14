import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "../components/Head";
import ImageSwap from "../components/ImageSwap";

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
  console.log(letter);
  return (
    <div className="w-3/4 h-screen bg-white overflow-hidden column centered">
      <div className="text-56 h-108 w-128 flex centered bg-main text-white rounded-2">
        {letter.letter}
      </div>

      <div className="h-12 text-8 my-4">
        {letter.sound}
      </div>

      <div className="row">
        <div className="button">
          Play Sound
        </div>
        <div className="button" onClick={() => {setLetter(getRandomLetter);}}>
          Next Letter
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
    {letter:'Аа', sound:'aaa'},
    {letter:'Бб', sound:'aaa'},
    {letter:'Вв', sound:'aaa'},
    {letter:'Гг', sound:'aaa'},
    {letter:'Дд', sound:'aaa'},
    {letter:'Ее', sound:'aaa'},
    {letter:'Ёё', sound:'aaa'},
    {letter:'Жж', sound:'aaa'},
    {letter:'Зз', sound:'aaa'},
    {letter:'Ии', sound:'aaa'},
    {letter:'Йй', sound:'aaa'},
    {letter:'Кк', sound:'aaa'},
    {letter:'Лл', sound:'aaa'},
    {letter:'Мм', sound:'aaa'},
    {letter:'Нн', sound:'aaa'},
    {letter:'Оо', sound:'aaa'},
    {letter:'Пп', sound:'aaa'},
    {letter:'Рр', sound:'aaa'},
    {letter:'Сс', sound:'aaa'},
    {letter:'Тт', sound:'aaa'},
    {letter:'Уу', sound:'aaa'},
    {letter:'Фф', sound:'aaa'},
    {letter:'Хх', sound:'aaa'},
    {letter:'Цц', sound:'aaa'},
    {letter:'Чч', sound:'aaa'},
    {letter:'Шш', sound:'aaa'},
    {letter:'Щщ', sound:'aaa'},
    {letter:'Ъъ', sound:'aaa'},
    {letter:'Ыы', sound:'aaa'},
    {letter:'Ьь', sound:'aaa'},
    {letter:'Ээ', sound:'aaa'},
    {letter:'Юю', sound:'aaa'},
    {letter:'Яя', sound:'aaa'},
  ];

Sample.defaultProps = defaultProps;
export default SamplePage;
