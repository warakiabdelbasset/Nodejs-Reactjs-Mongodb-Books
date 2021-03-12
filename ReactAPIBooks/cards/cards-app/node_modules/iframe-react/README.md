# iframe-react

[![npm package][npm-badge]][npm]

Simple `iframe` for React.

## Install

```sh
npm i iframe-react -S
```

## Simple Example

```js
import React, { Component } from 'react';
import Frame from 'iframe-react';

class FrameExample extends Component {
  render() {
    return (
      <Frame
        title="iFrame example"
        style={{
          border: 'none',
          width: '100%',
          height: '100%',
        }}
      >
        <h1>iframe-react Demo</h1>
        <p>A simple example</p>
      </Frame>
    );
  }
}
```

## Props

* `title`: iFrame title.
* `head`: Pass script, style, ... tags inside the head prop. You can wrap them inside a `<Fragment>` component or use an array.
* `frameRef`: a callback to get a reference to the iframe element.
* `documentRef`: a callback to get a reference to the iframe document element.

See a detailed example under the demo directory.

## MIT Licensed

[npm-badge]: https://img.shields.io/npm/v/iframe-react.svg?style=for-the-badge
[npm]: https://www.npmjs.com/package/iframe-react
