import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



const QuoteMachine = ({ backgroundQuoteChange, selectedQuote}) => (
   <Card style={{height: '30rem'}}>
      <CardContent>

         <Typography style={{fontSize: 40}} id="text">
            {selectedQuote.quote} - <span id='author'>{selectedQuote.author}</span>
         </Typography>

      </CardContent>
      <CardActions>
         <Button style={{fontSize: 20, position: 'relative', top: '10rem', left: '5rem', marginTop: '-10rem'}} id="new-quote" size={'small'} onClick={backgroundQuoteChange}>Next Quote</Button>
         <IconButton id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}`}>
            <FontAwesomeIcon style={{position: 'relative', top: '10rem', left: '5rem', marginTop: '-10rem'}}icon={faTwitter} size='lg'></FontAwesomeIcon>
         </IconButton>
      </CardActions>

   </Card>
);



export default QuoteMachine; 