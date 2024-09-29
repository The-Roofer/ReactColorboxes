import { useState } from "react";

function Square({ color, onMouseEnter }) {
  return (
    <div
      className="colorbox"
      style={{ backgroundColor: color }}
      onMouseEnter={onMouseEnter}
    >   
    </div>
  );
}

export default function Container({boxNumber}) 
{
  const randomColors = ["red", "blue", "yellow","purple","orange","green"];
  const [colors, setColors] = useState(Array(boxNumber).fill("grey")||Array(9).fill("grey"));

  function handleMouseEnter(mapKey)
    {
      const newColors = [...colors];
      let randomColor;

      console.log("Square is", Square, "and its type is", typeof Square);
      console.log("<Square/> is", <Square/>, "and its type is", typeof <Square/>);
      console.log("colors is", colors, "and its type is", typeof colors);
      console.log("useState is ",useState," and its type is ",typeof useState)
      console.log("newColors is ", newColors, "and its type is", typeof newColors);
      console.log("mapKey is ", mapKey, "and its type is", typeof mapKey);
      console.log("colors.map is", colors.map( (mapElement, mapKey) => (<Square key={mapKey} color={mapElement} 

      onMouseEnter={() => { handleMouseEnter(mapKey); } } /> ) ), "and its type is", typeof colors.map((mapElement, mapKey) => (<Square key={mapKey} color={mapElement} 
      onMouseEnter={() => { handleMouseEnter(mapKey); } } /> ) ));

      do 
      {
        randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
      } 
      while (randomColor === newColors[mapKey]);

      newColors[mapKey] = randomColor;

      console.log("randomColor is ",randomColor,"and its type is ",typeof randomColor);

      setColors(newColors);
  }

  return (
    <>
      <div className="container">
        {
          colors.map((mapElement, mapKey) => (<Square key={mapKey} color={mapElement} 
            onMouseEnter={() => { handleMouseEnter(mapKey); } } /> ) )
          }
      </div>
    </>
  );
}