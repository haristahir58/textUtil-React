import React, { useState, useRef } from 'react';
import './Quiz3.css';

const Quiz3 = () => {
  const [gpa, setGpa] = useState('');
  const [name, setName] = useState('');
  const gpaInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const [rollNumber, setRollNumber] = useState('');
  const [semester, setSemester] = useState('');

  const handleSwap = () => {
    const tempGpa = gpa;
    const tempName = name;
    setGpa(rollNumber);
    setName(semester);
    setRollNumber(tempGpa);
    setSemester(tempName);
  };

  return (
    <div>
      <h1>Uncontrolled Component in React JS</h1>
      <form>
        <label>
          GPA:
          <input type="text" onChange={(e) => setGpa(e.target.value)} ref={gpaInputRef} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" onChange={(e) => setName(e.target.value)} ref={nameInputRef} />
        </label>
      </form>

      <h1>Controlled Component</h1>
      <form>
        <label>
          Roll Number:
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Semester:
          <input
            type="text"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
        </label>
      </form>

      <button onClick={handleSwap}>SWAP</button>

      <h1>Swapped Values</h1>
      <p>
        Uncontrolled values:
        <br />
        GPA: {gpa}
        <br />
        Name: {name}
      </p>
      <p>
        Controlled values:
        <br />
        Roll Number: {rollNumber}
        <br />
        Semester: {semester}
      </p>
    </div>
  );
};

export default Quiz3;
