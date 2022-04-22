import MainBtn from "./mainBtn";
import "../style/css/other.css";

const KeyPad = (props) => {
    return ( 
        <div className="keypad">
            <MainBtn value={7}/>
            <MainBtn value={8}/>
            <MainBtn value={9}/>
            <MainBtn value={"DEL"}/>
            <MainBtn value={4}/>
            <MainBtn value={5}/>
            <MainBtn value={6}/>
            <MainBtn value={"+"}/>
            <MainBtn value={1}/>
            <MainBtn value={2}/>
            <MainBtn value={3}/>
            <MainBtn value={"-"}/>
            <MainBtn value={"."}/>
            <MainBtn value={0}/>
            <MainBtn value={"/"}/>
            <MainBtn value={"x"}/>
            <div className="bottomLine">
                <MainBtn value={"RESET"}/>
                <MainBtn value={"="}/>
            </div>
        </div>
     );
}
 
export default KeyPad;
