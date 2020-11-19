import React,{useRef,useEffect,Component, createRef} from 'react';

const {tableau} = window

class HealthRisk extends Component{
    constructor(){
        super()
        this.ref=createRef()
    }
    url = "https://public.tableau.com/views/NearACYHourlyHealthRisk/NearACYHourlyHealthRisk?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    option = {device: "desktop" , hideTabs: true}

    initVitz() {
        new tableau.Viz(this.ref.current,this.url, this.option)
    }

    componentDidMount(){
        this.initVitz()
    }
    
    render(){
        return(<div id="HealthRisk" style={{width:"100%",height:"100%"}}>
                <p>Hourly Health Risk</p>
                <div   ref={this.ref}></div>
            </div>);
    }
}



export default HealthRisk;