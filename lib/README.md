# AWS Step Functions Graph

React library to visualise the AWS Step Functions ASL JSON.

## Install

```bash
npm install --save aws-sfn-graph
```

## Usage

```jsx
import React from 'react'

import AWSSfnGraph from '@tshepomgaga/aws-sfn-graph';
import '@tshepomgaga/aws-sfn-graph/index.css';

const aslData = {
  Comment:
    'A Hello World example of the Amazon States Language using Pass states',
  StartAt: 'Hello',
  States: {
    Hello: {
      Type: 'Pass',
      Result: 'Hello',
      Next: 'World'
    },
    World: {
      Type: 'Pass',
      Result: 'World',
      End: true
    }
  }
}

const App = () => {
  return (
    <AWSSfnGraph
      data={aslData}
      width={500}
      height={500}
      onError={console.log}
    />
  )
}

export default App
```

## Results

<!-- ![alt text](aws-sfn-graph.png "Graph") -->

![alt text](https://github.com/tptshepo/aws-sfn-graph/blob/master/aws-sfn-graph.png?raw=true)


## License

MIT © [tptshepo](https://github.com/tptshepo)
