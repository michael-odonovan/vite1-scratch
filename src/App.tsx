import { useState } from 'react';
import './App.css'

// @ts-ignore
import FixedPacker from './my-packer';


function App() {
  const [myBlocks, setMyBlocks] = useState(
    [
      { width: 100, height: 100 },
      { width: 40, height: 40 },
    ]
  );


  let packer = new FixedPacker(500, 500);
  packer.fit(myBlocks);

  for(let n = 0 ; n < myBlocks.length ; n++) {
    let block = myBlocks[n];
    // @ts-ignore
    if (block.fit) {
      console.log(block)
    } else {
      console.log("nope")
    }
  }

  return (
    <>
      <h1>v1 scratch</h1>
      <button onClick={() => setMyBlocks(
        [
          { width: 200, height: 200 },
          { width: 80, height: 80 },
        ]
      )}>click</button>
    </>
  )
}

export default App
