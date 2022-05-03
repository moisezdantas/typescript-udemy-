// 3- componente

import * as React from 'react';

export interface IAppProps {
}

export function FirstComponent (props: IAppProps):React.ReactElement {
  return (
    <div>
      <h1>Meu Primeiro componente</h1>
    </div>
  );
}
