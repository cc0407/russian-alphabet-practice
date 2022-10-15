export interface dictEntry {
    letter: string,
    filename: string,
}

const prepend = "/audio/";
const append = ".mp3";

export const letterDict:dictEntry[] = [
    {letter:'Аа', filename:prepend+'0'+append},
    {letter:'Бб', filename:prepend+'1'+append},
    {letter:'Вв', filename:prepend+'2'+append},
    {letter:'Гг', filename:prepend+'3'+append},
    {letter:'Дд', filename:prepend+'4'+append},
    {letter:'Ее', filename:prepend+'5'+append},
    {letter:'Ёё', filename:prepend+'6'+append},
    {letter:'Жж', filename:prepend+'7'+append},
    {letter:'Зз', filename:prepend+'8'+append},
    {letter:'Ии', filename:prepend+'9'+append},
    {letter:'Йй', filename:prepend+'10'+append},
    {letter:'Кк', filename:prepend+'11'+append},
    {letter:'Лл', filename:prepend+'12'+append},
    {letter:'Мм', filename:prepend+'13'+append},
    {letter:'Нн', filename:prepend+'14'+append},
    {letter:'Оо', filename:prepend+'15'+append},
    {letter:'Пп', filename:prepend+'16'+append},
    {letter:'Рр', filename:prepend+'17'+append},
    {letter:'Сс', filename:prepend+'18'+append},
    {letter:'Тт', filename:prepend+'19'+append},
    {letter:'Уу', filename:prepend+'20'+append},
    {letter:'Фф', filename:prepend+'21'+append},
    {letter:'Хх', filename:prepend+'22'+append},
    {letter:'Цц', filename:prepend+'23'+append},
    {letter:'Чч', filename:prepend+'24'+append},
    {letter:'Шш', filename:prepend+'25'+append},
    {letter:'Щщ', filename:prepend+'26'+append},
    //{letter:'Ъъ', filename:prepend+''+append}, // NO SOUND SOFT MODIFIER
    {letter:'Ыы', filename:prepend+'28'+append},
    //{letter:'Ьь', filename:prepend+''+append}, // NO SOUND HARD MODIFIER
    {letter:'Ээ', filename:prepend+'30'+append},
    {letter:'Юю', filename:prepend+'31'+append},
    {letter:'Яя', filename:prepend+'32'+append},
  ];

