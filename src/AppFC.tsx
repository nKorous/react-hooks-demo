import React, { FC, useState, useEffect, useMemo } from "react";
import "./App.css";

export interface OwnProps {
  name: string | undefined;
}

export type Props = OwnProps;

const AppFC: FC<Props> = ({
  name = "Some Name Here",
}) => {
  const [currentName, setCurrentName] = useState<string | undefined>(undefined);
  const [clicked, setClicked] = useState<number>(0);

  useEffect(() => {
    //Do this
    setCurrentName(name);

    return () => {
      //On onUnmount
    };
  }, [name]); //When this changes

  const handleNameChange = (event: any) => {
    setCurrentName(event.target.value);
  };

  const handleClick = () => {
    setClicked(clicked + 1);
  };

  const revertClickCounter = () => {
    setClicked(0);
  };

  return (
    <div className="App">
      <h5>Functional Component with Hooks!!!</h5>
      <h1>The current name is: {currentName}</h1>
      <h2>You have clicked the button {clicked} times!</h2>
      <div>
        <span>
          What is the new name?{" "}
          <input
            type="text"
            placeholder={name}
            onChange={event => handleNameChange(event)}
          />
        </span>
      </div>
      <div>
        <button onClick={() => handleClick()}>Add Click</button>
        <br />
        <button onClick={() => revertClickCounter()}>
          Revert Click Counter
        </button>
      </div>
    </div>
  );
};

export default AppFC;
