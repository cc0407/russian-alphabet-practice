import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export interface dictEntry {
    letter: string,
    sound: string,
}

const dict:dictEntry[] = [
    {letter:'Аа', sound:''},
    {letter:'Бб', sound:''},
    {letter:'Вв', sound:''},
    {letter:'Гг', sound:''},
    {letter:'Дд', sound:''},
    {letter:'Ее', sound:''},
    {letter:'Ёё', sound:''},
    {letter:'Жж', sound:''},
    {letter:'Зз', sound:''},
    {letter:'Ии', sound:''},
    {letter:'Йй', sound:''},
    {letter:'Кк', sound:''},
    {letter:'Лл', sound:''},
    {letter:'Мм', sound:''},
    {letter:'Нн', sound:''},
    {letter:'Оо', sound:''},
    {letter:'Пп', sound:''},
    {letter:'Рр', sound:''},
    {letter:'Сс', sound:''},
    {letter:'Тт', sound:''},
    {letter:'Уу', sound:''},
    {letter:'Фф', sound:''},
    {letter:'Хх', sound:''},
    {letter:'Цц', sound:''},
    {letter:'Чч', sound:''},
    {letter:'Шш', sound:''},
    {letter:'Щщ', sound:''},
    {letter:'Ъъ', sound:''}, // NOSOUND SOFT MODIFIER
    {letter:'Ыы', sound:''},
    {letter:'Ьь', sound:''}, // NOSOUND HARD MODIFIER
    {letter:'Ээ', sound:''},
    {letter:'Юю', sound:''},
    {letter:'Яя', sound:''},
  ];

export const CreateLetterDictionary = () => {
    const data = useStaticQuery(graphql`
        {
            allFile(filter: {relativeDirectory: {eq: "audio"}, extension: {eq: "mp3"}}) {
                edges {
                    node {
                        relativePath
                        name
                    }
                }
            }
        }
    `)

    data.allFile.edges.map( ({node}) => {
        for(var i = 0; i < dict.length; i++) {
            if(node.name == i) {
                dict[i].sound = "/" + node.relativePath;
            }
        }
        return;
    });
    return dict;
};

