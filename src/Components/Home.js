import React, {Component} from 'react';
import Table from './Table';

class Home extends Component{

    constructor(props) {
        super(props);
        this.state={
            Userprofiles:[{isActive: true, _id: "5c4cc2109487b0003924f1e3", 
            role: "Administrator", 
            firstName: "Test", 
            lastName: "Admin"}, 
{isActive: true, _id: "5e2cc6df7a91aaf820510a55", 
            role: "Volunteer", 
            firstName: "Sidd", 
            lastName: "Test"}, 
{isActive: true, _id: "5ede6be453a0480017164a5b", 
            role: "Volunteer", 
            firstName: "Volunteer 1", 
            lastName: "Test"},
{isActive: false, _id: "5ede6be453a0480017164a48", 
            role: "Volunteer", 
            firstName: "Volunteer 2", 
            lastName: "Test"}]
        }
    }

    toLogout=()=>{
        this.props.history.push("/")
    }

    render() {
        return(
            <div>
                <span>Welcome to Home Page!</span><br /><br />
                <Table UserData={this.state.Userprofiles}/>
                <button onClick={this.toLogout}>Logout</button>
            </div>
        )
    }
}

export default Home
