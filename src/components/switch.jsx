import "../style/css/switch.css";

const Switch = (props) => {
    return ( 
        <div className="switch-container">
            <p>THEME</p>
            <div className="switch">
                <div className="switch-labels">
                    <label htmlFor="theme1">1</label>
                    <label htmlFor="theme2">2</label>
                    <label htmlFor="theme3">3</label>
                </div>
                <div className="switchers">
                    <input type="radio" name="theme" id="theme1" />
                    <input type="radio" name="theme" id="theme2" />
                    <input type="radio" name="theme" id="theme3" />
                </div>
            </div>
        </div>
     );
}
 
export default Switch;