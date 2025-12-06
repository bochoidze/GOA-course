 function Child({ numberProp, textProp, arrayProp, objectProp, cityProp }) {
  return (
    <>
      <p>Number Prop: {numberProp}</p>
      <p>Text Prop: {textProp}</p>
      <p>Array Prop: {arrayProp.join(", ")}</p>
      <p>Object Prop: {objectProp.name} — {objectProp.age}</p>
      <p>City Prop: {cityProp}</p>
    </>
  );
}

export default Child;
