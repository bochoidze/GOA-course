import "./Home.css";
export default function Home(props) {

    console.log(props.data)
    console.log(props)
  return <div>{props.children}</div>;
}