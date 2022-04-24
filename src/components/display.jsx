import "../style/css/display.css";

const Display = ({displayValue}) => {
    return ( 
        <div className="display">
            <p className="answer">{displayValue}</p>
        </div>
     );
}
 
export default Display;