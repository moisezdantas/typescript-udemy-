import * as React from 'react';

export interface Props {
    name: string;

}

export function SecondComponent ({name}: Props) {
  return (
    <div>
      <p>Meu segundo componente</p>
      <p>O nome dele é {name}</p>
    </div>
  );
}
