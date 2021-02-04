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
   <Card>
      <CardContent>

         <Typography id="text">
            {selectedQuote.quote} - <span id='author'>{selectedQuote.author}</span>
         </Typography>

      </CardContent>
      <CardActions>
         <Button id="new-quote" size={'small'} onClick={backgroundQuoteChange}>Next Quote</Button>
         <IconButton id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}`}>
            <FontAwesomeIcon icon={faTwitter} size='md'></FontAwesomeIcon>
         </IconButton>
      </CardActions>

   </Card>
);



export default QuoteMachine; 