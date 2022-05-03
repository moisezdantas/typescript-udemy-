import * as React from 'react';

export interface Props {
    title: string;
    content: string;
    commentsQty: number;
    tags: string[]
    category: Category

}
export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python",
}

export default function Destructuring ({title, commentsQty, content, tags, category}: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários : {commentsQty}</p>
      <div>
        <ul>
        {tags.map(tag => (
            <li>
                <span>{tag}</span>
            </li>
        ))}
        </ul>
        <h4>Categoria: {category}</h4>
      </div>
    </div>
  );
}
