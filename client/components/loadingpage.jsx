import React from "react";

export default class LoadingPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            latitude: undefined,
            longitude: undefined
        }

        this.showPosition = this.showPosition.bind(this);
    }

    componentDidMount() {
        this.getUserLocation();
        console.log("loadingPage props: ", this.props);
    }

    GoToReusltsPage(){
        this.props.setView("recoveryresults", {latitude: this.state.latitude, longitude: this.state.longitude});
    }
    
    getUserLocation(){
        navigator.geolocation.getCurrentPosition(this.showPosition)
    }
    
    showPosition(position){
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })

        console.log("LoadingPage state: ", this.state);
    }

    componentDidUpdate(){
        this.GoToReusltsPage();
    }

    render(){
        return(
            <div>loading...</div>
        )
    }
}