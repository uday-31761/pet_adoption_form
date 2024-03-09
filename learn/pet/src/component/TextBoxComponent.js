import React from 'react';
import TextField from '@mui/material/TextField';

const TextBoxComponent = () => {
  const [textBoxValue, setTextBoxValue] = React.useState('');

  const handleTextBoxChange = (event) => {
    setTextBoxValue(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Enter Text"
        variant="outlined"
        fullWidth
        value={textBoxValue}
        onChange={handleTextBoxChange}
        style={{ marginBottom: '20px' }}
      />
      {/*<p>Typed Value: {textBoxValue}</p>*/}
    </div>
  );
};

export default TextBoxComponent;
