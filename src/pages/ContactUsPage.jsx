import React from "react";
import ContactUs from "../components/ContactUs/contactUs";
import PageTop from "../components/PageTop/PageTop";

export default function ContactUsPage(){
    return(
        <React.Fragment>
            <PageTop title='contactUs' />
            <ContactUs/>
        </React.Fragment>
    )
}