import "../style/css/mainbtn.css";

const MainBtn = ({value, onKeyPress}) => {
    return ( 
        <div className="button-border">
            <button className="btn" onClick={() => onKeyPress(value)}>{value}</button>
        </div>
     );
}
 
export default MainBtn;
