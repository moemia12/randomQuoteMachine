import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



const QuoteMachine = ({ backgroundQuoteChange, selectedQuote }) => (
   <Card style={{ padding: '2rem' , height: '30rem', position: 'relative', top: '5rem', background: 'linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,1) 100%)', boxShadow: 'box-shadow: 0px 5px 9px 1px rgba(0,0,0,0.75);' }}>
      <CardContent>

         <Typography style={{ fontSize: 40 }} id="text">
            {selectedQuote.quote} 
            <br></br>
            <br></br>
            - <span id='author'>{selectedQuote.author}</span>
         </Typography>

      </CardContent>
      <CardActions>
         <Button style={{ fontSize: 20, position: 'relative', top: '10rem', left: '40rem', marginTop: '-10rem', background: 'linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,1) 100%)' }} id="new-quote" size={'small'} onClick={backgroundQuoteChange}>Next Quote</Button>
         <IconButton id="tweet-quote" target="_blank" href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}`)}>
            <FontAwesomeIcon style={{ position: 'relative', top: '10rem', left: '40rem', marginTop: '-10rem' }} icon={faTwitter} size='lg'></FontAwesomeIcon>
         </IconButton>
      </CardActions>

   </Card>
);



export default QuoteMachine; 