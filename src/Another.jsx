import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function TextToSpeech() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support text-to-speech.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Text to Speech
      </Typography>
      <TextField
        label="Type your text here..."
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={text}
        onChange={handleTextChange}
        sx={{ mb: 2 }}
      />
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={speak}>
          Speak
        </Button>
      </Box>
    </Container>
  );
}

export default TextToSpeech;
