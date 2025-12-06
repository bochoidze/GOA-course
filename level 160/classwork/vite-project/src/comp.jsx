import comp2 from "./comp2";

function Comp1() {
    const text = "ეს ტექსტი მოდის Comp1-დან";

    return (
        <div>
            <h2>{text}</h2>
            <Comp2 />
        </div>
    );
}

export default Comp1;
