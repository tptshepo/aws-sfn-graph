# aws-sfn-graph

> Visualise the AWS Step Functions ASL JSON.

[![NPM](https://img.shields.io/npm/v/aws-sfn-graph.svg)](https://www.npmjs.com/package/aws-sfn-graph) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save aws-sfn-graph
```

## Usage

```jsx
import React from 'react'

import AWSSfnGraph from 'aws-sfn-graph'

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
  return <AWSSfnGraph data={aslData} width={500} height={500} />
}

export default App
```

## License

MIT © [tptshepo](https://github.com/tptshepo)
