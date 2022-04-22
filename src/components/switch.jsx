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
                    <div>
                        <input type="radio" name="theme" id="theme1" defaultChecked={true}/>
                        <span className="circle"></span>
                    </div>
                    <div>
                        <input type="radio" name="theme" id="theme2" />
                        <span className="circle"></span>
                    </div>
                    <div>
                        <input type="radio" name="theme" id="theme3" />
                        <span className="circle"></span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Switch;