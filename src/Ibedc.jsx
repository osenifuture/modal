import React, { useState } from "react";

const Ibedc = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick((prevOpen) => !prevOpen);
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
    setIsOpen9(false)

  };
  const handleToggle1 = () => {
    setIsOpen1((prevOpen) => !prevOpen);
    setIsClick(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
    setIsOpen9(false)
  };
  const handleToggle2 = () => {
    setIsOpen2((prevOpen) => !prevOpen);
    setIsOpen1(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
    setIsOpen9(false)
  };
  const handleToggle3= () => {
    setIsOpen3((prevOpen) => !prevOpen);
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
    setIsOpen9(false)
  };
  const handleToggle4 = () => {
    setIsOpen4((prevOpen) => !prevOpen);
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
    setIsOpen9(false)
  };
  const handleToggle5 = () => {
    setIsOpen5((prevOpen) => !prevOpen);
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
    setIsOpen9(false)
  };
  const handleToggle6 = () => {
    setIsOpen6((prevOpen) => !prevOpen);
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen7(false)
    setIsOpen8(false)
    setIsOpen9(false)
  };
  const handleToggle7 = () => {
    setIsOpen7((prevOpen) => !prevOpen);
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen8(false)
    setIsOpen9(false)
  };
  const handleToggle8 = () => {
    setIsOpen8((prevOpen) => !prevOpen);
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen9(false)
  };
  const handleToggle9 = () => {
    setIsOpen9((prevOpen) => !prevOpen);
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
    setIsOpen6(false)
    setIsOpen7(false)
    setIsOpen8(false)
  };

  return (
    <>
      <div className="faq-container1">
        <h2>FAQs</h2>
      </div>
      <div className="faq-container2">
        <div className="faq-box1">
          <h1>FAQs</h1>
          <h4>FREQUENTLY ASKED QUESTIONS</h4>
          <p>Click question to view answer</p>
        </div>
        <div className="answer-container">
        <div className="faq-box">
          <span onClick={handleClick}>
          Who are Meter Asset Provider (MAP)?
          </span>
          {isClick && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vitae culpa, modi sit minus rerum deleniti architecto aliquam
              provident ullam.
            </p>
          )}
          <span onClick={handleToggle1}>
            When will MAP be re-launced?
          </span>
          {isOpen1 && (
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis temporibus nihil, ab quidem laborum accusantium?
            </p>
          )}
          <span onClick={handleToggle2}>
          What is the role of IBEDC under the MAP  scheme?
          </span>
          {isOpen2 && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vitae culpa, modi sit minus rerum deleniti architecto aliquam
              provident ullam.
            </p>
          )}
          <span onClick={handleToggle3}>
          How long will it take to be metered under MAP?
          </span>
          {isOpen3 && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vitae culpa, modi sit minus rerum deleniti architecto aliquam
              provident ullam.
            </p>
          )}
          <span onClick={handleToggle4}>
          How can i pay for the MAP meter?
          </span>
          {isOpen4 && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vitae culpa, modi sit minus rerum deleniti architecto aliquam
              provident ullam.
            </p>
          )}
          <span onClick={handleToggle5}>
          Where can i pay for a MAP meter?
          </span>
          {isOpen5 && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vitae culpa, modi sit minus rerum deleniti architecto aliquam
              provident ullam.
            </p>
          )}
          <span onClick={handleToggle6}>
          Do i have to pay for meter installation?
          </span>
          {isOpen6 && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vitae culpa, modi sit minus rerum deleniti architecto aliquam
              provident ullam.
            </p>
          )}
          <span onClick={handleToggle7}>
          I want a MAP meter, what should i do?
          </span>
          {isOpen7 && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vitae culpa, modi sit minus rerum deleniti architecto aliquam
              provident ullam.
            </p>
          )}
          <span onClick={handleToggle8}>
          What if i dont want a Meter?
          </span>
          {isOpen8 && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vitae culpa, modi sit minus rerum deleniti architecto aliquam
              provident ullam.
            </p>
          )}
          <span onClick={handleToggle9}>
          Can i approach the MAP Vendor directly?
          </span>
          {isOpen9 && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              vitae culpa, modi sit minus rerum deleniti architecto aliquam
              provident ullam.
            </p>
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default Ibedc;
