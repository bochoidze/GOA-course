import Child from "./Child";

function Parent() {
  const numberProp = 10;
  const textProp = "Hello world";
  const arrayProp = [1, 2, 3];
  const objectProp = { name: "Luka", age: 16 };
  const cyty ="marneuli"

  return (
    <div>
      <h1>Parent Component</h1>

      <Child
        numberProp={numberProp}
        textProp={textProp}
        arrayProp={arrayProp}
        objectProp={objectProp}
        funcProp={cyty}
      />
    </div>
  );
}

export default Parent;

