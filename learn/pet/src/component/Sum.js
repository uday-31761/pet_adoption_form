import React, { useState } from 'react';
const Sum = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleSum = () => {
    const sum = parseInt(number1) + parseInt(number2);
    setResult(sum);
  };

  const handleCancel = () => {
    setNumber1('');
    setNumber2('');
    setResult('');
  };

  return (
    <div style={{ backgroundColor: 'cyan' }}>
      <center>
        <h6>
          <u>Addition of two numbers</u>
        </h6>
        <form>
          <table>
            <tr>
              <td>Enter the first number</td>
              <td>
                <input
                  type="text"
                  name="t1"
                  size="12"
                  value={number1}
                  onChange={(e) => setNumber1(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Enter the second number</td>
              <td>
                <input
                  type="text"
                  name="t2"
                  size="12"
                  value={number2}
                  onChange={(e) => setNumber2(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Final Result</td>
              <td>
                <input type="text" name="t3" size="12" value={result} readOnly />
              </td>
            </tr>
          </table>
          <input type="button" name="sum" value="Sum" onClick={handleSum} />&nbsp;&nbsp;&nbsp;
          <input type="button" name="cancel" value="Cancel" onClick={handleCancel} />
        </form>
      </center>
    </div>
  );
};

export default Sum;
