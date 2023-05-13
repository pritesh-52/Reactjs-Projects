import React from "react";
import Contactcard from "./Contactcard";

const Contactlist=(props)=>{
    console.log(props)

    const deletecontact=(id)=>{
        props.getContactId(id);

    };


    const rendercontact=props.contacts.map((contact)=>{
        return(
            <>
                <Contactcard contact={contact}
                clickHander={deletecontact}
                key={contact.id}></Contactcard>

            </>
        );
    })
    return(
        <>
            <div className="ui celled list">
                {rendercontact}
            </div>
        </>
    )
}
export default Contactlist;