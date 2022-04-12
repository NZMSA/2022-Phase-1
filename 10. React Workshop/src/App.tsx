import React, { useEffect, useState } from 'react';

// Feel free to take a look at the source code for these as well.
import SampleComponentNoProps from './Components/SampleComponentNoProps';
import SampleComponentWithProps from './Components/SampleComponentWithProps';
import ButtonBoard from './Components/ButtonBoard';

// We can apply CSS by importing the CSS file to put to the rendered component.
import './App.css';

function App() {
  const [effectMessageOnStart, setEffectMessageOnStart] = useState<string>('Dummy getting API...');

  const [startRender, setStartRender] = useState<boolean>(true);
  const [loadingDots, setLoadingDots] = useState<string>('');
  const [dotCount, setDotCount] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      setEffectMessageOnStart('Example useEffect message to simulate loading data from API since they take time to retrieve. Refresh to see the effect in use.');
    }, 5000); // For 5 seconds. 5000 in the argument means 5000 milliseconds.
  }, []) // Each useEffect is run at least once. However, this effect will not run again unless you refresh the page.

  useEffect(() => {
    let number = dotCount + 1;
    if(number > 3) number = 1;
    setDotCount(number); // Number between 1 to 3.

    setTimeout(() => { // Make the animation timer. 
      setStartRender(!startRender);
    }, 500);
  }, [startRender]) // You may have noticed a warning here, safe to ignore in this case.

  useEffect(() => {
    let dots = '';
    for(let i = 0; i < dotCount; i++) dots += '.';
    setLoadingDots(dots);
  }, [dotCount]) // Create the typical loading animation with changing number of dots rendered at the end of loading text.

  return ( 
    <div className="App">
      <h1>Now that you have started this site, you can see the code at "<code>src/App.tsx</code>" and the UI here.</h1>
      <h2>If you are running the project using "<code>npm start</code>", you can make changes and save the code to see the changes live.</h2>
      <div className="SampleComponents">
        <SampleComponentNoProps />
        <SampleComponentWithProps value={'A hard-coded value'} />
      </div>
      <ButtonBoard numberOfButtons={8} />
      <h2>{effectMessageOnStart}</h2>
      <h2>Another example of useEffect in action: Loading{loadingDots}</h2>
    </div>
  );
}

export default App;
