
import React from 'react'
import ReactDOM from 'react-dom'
import ReactFitText from 'react-fittext'

import swear from './swear.js'

const domContainer = document.getElementById('app');

function App() {
    let state = {
        words: swear(),
    }

    return <PoopBox swear={state.words} />
}

function PoopBox(props) {
    console.log("props:", props)
    return (
        <ReactFitText className="fit">
            <h2>{props.swear}</h2>
        </ReactFitText>
    )
}
console.log(domContainer);
ReactDOM.render(<App />, domContainer);