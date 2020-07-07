import React from 'react';



const UserHeader =()=>{
    return(
        <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>role</th>
            <th>active</th>
        </tr>
    )
}

const UserData =(props)=> {
    return(
        <tr>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.role}</td>
            <td><input type="checkbox" checked={props.user.isActive}/></td>
        </tr>
    )

}
const Usertable =(props)=>{
    return(
        <div>
            <table>
            <UserHeader/>
            {
                props.UserData.map(
                    user=>{
                        return <UserData user={user} />


                })
            }
            </table>
        </div>
    )
}
export default Usertable;