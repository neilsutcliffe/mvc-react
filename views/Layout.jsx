import React from 'react';
import styles from './Layout.module.scss'

export default (props) => {

  if (props.children == undefined) return null

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href='./normalize.css' />
      </head>
      <body>
        {props.children}
      </body>
    </html>
  )
}