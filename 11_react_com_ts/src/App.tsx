import React, { createContext } from 'react';
import Destructuring, {Category} from './components/Destructuring';
import { FirstComponent  } from './components/FirstComponent'
import { SecondComponent } from './components/SecondComponent';
import State from './components/State';
import Context from './components/Context'

type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo"

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  // 1 - variaveis
  const name: string = "Moisez";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funcões
  const userGreeting = (name: string) => {
    return `Olá, ${name}`;
  }

  const myText:textOrNull = "tem algum texto aqui";
  let mySecondText:textOrNull = null;

  // mySecondText = "opa";

  const textFixed: fixed = "Isso";

  const contextValue:IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript cpm React</h1>
        <h2>Nome: {name}</h2>
        <h2>Idade: {age}</h2>
        {
          isWorking && (
            <p>Está trabalhando</p>
          )
        }
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name={name}/>
        <Destructuring 
          title='Primeiro Post' 
          content='Algum conteúdo'
          commentsQty={10}
          tags={["ts", "js", "css", "node"]}
          category={Category.TS}
        />
        <Destructuring 
          title='Segundo Post' 
          content='Algum conteúdo'
          commentsQty={10}
          tags={["java", "python"]}
          category={Category.P}  
        />
        <State/>
        {
          myText && <p>tem texto na variável</p>
        }
        {
          mySecondText && <p>tem texto na variável</p>
        }
        {
          textFixed && <p>tem texto na variável</p>
        }
      </div>
      <Context/>
    </AppContext.Provider>
  );
}

export default App;
