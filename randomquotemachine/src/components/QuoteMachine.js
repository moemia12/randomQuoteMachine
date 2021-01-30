import React from 'react';
import Button from './Button';

const QuoteMachine = (props) =>(
    <>
    {props.selectedQuote ? `"${props.selectedQuote.quote}" - ${props.selectedQuote.author}` : ''} {/*Uses the selectedQuote func to receive random quote & autho */}
    <Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuoteIndex}/>
    </>
);

export default QuoteMachine;