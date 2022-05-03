import React, {Fragment, useContext} from 'react';

import { AppContext } from '../App';

export default function Context () {

    const details = useContext(AppContext);
  return (
    <Fragment>
      {details && (
          <div>
              <h2>Linguagem?: {details.language}</h2>
              <h4>FW: {details.framework}</h4>
              <p>QTD: {details.projects}</p>
          </div>
      )}
    </Fragment>
  );
}
