import MainBtn from "./mainBtn";
import "../style/css/other.css";

const KeyPad = (props) => {
    const handleNumberKeyPress = () => {};
    const handleFunctionKeyPress = () => {};
    const handleEqualKeyPress = () => {};
    const handleResetKeyPress = () => {};

    return ( 
        <div className="keypad">
            <MainBtn value={7} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={8} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={9} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={"DEL"} onKeyPress={handleFunctionKeyPress}/>
            <MainBtn value={4} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={5} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={6} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={"+"} onKeyPress={handleFunctionKeyPress}/>
            <MainBtn value={1} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={2} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={3} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={"-"} onKeyPress={handleFunctionKeyPress}/>
            <MainBtn value={"."} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={0} onKeyPress={handleNumberKeyPress}/>
            <MainBtn value={"/"} onKeyPress={handleFunctionKeyPress}/>
            <MainBtn value={"x"} onKeyPress={handleFunctionKeyPress}/>
            <div className="bottomLine">
                <MainBtn value={"RESET"} onKeyPress={handleResetKeyPress}/>
                <MainBtn value={"="} onKeyPress={handleEqualKeyPress}/>
            </div>
        </div>
     );
}
 
export default KeyPad;
