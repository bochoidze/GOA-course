function comp2() {
    const items = ["React", "Vite", "JSX"];

    return (
        <ul>
            {items.map((el, i) => (
                <li key={i}>{el}</li>
            ))}
        </ul>
    );
}

export default Comp2;
