import MainBtn from "./mainBtn";
import "../style/css/other.css";

const KeyPad = ({inputKey}) => {
    const handleNumberKeyPress = (key) => {
        inputKey(key)
    };

    return ( 
        <div className="keypad">
            <MainBtn value={7} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={8} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={9} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={"DEL"} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={4} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={5} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={6} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={"+"} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={1} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={2} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={3} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={"-"} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={"."} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={0} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={"/"} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={"x"} onKeyPress={handleNumberKeyPress}/>
            <div className="bottomLine">
                <MainBtn value={"RESET"} onKeyPress={handleNumberKeyPress}/>
                <MainBtn value={"="} onKeyPress={handleNumberKeyPress}/>
            </div>
        </div>
     );
}
 
export default KeyPad;
