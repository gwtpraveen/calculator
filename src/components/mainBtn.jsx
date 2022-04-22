import "../style/css/mainbtn.css";

const MainBtn = ({value}) => {
    return ( 
        <div className="button-border">
            <button className="btn">{value}</button>
        </div>
     );
}
 
export default MainBtn;
