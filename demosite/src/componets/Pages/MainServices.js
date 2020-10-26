import React, { Component } from 'react';

import image from "../assests/img/human.png";

// Pages
import Header from "../Common/Header";
import Services from "../Common/Services";
import ServiceDetails from "../Common/ServiceDetails";
import Contact from "../Common/Contact";
import Footer from "../Common/Footer";
import Copyright from '../Common/Copyright'


class MainServices extends Component 
{
    render()



    {
        return (
          <div>
            <Header
              title="Services!"
              subtitle="Medical Imaging And Diagnoses using Ai techniques"
              showButton={false}
              image={image}
            />
            <Services />
            <ServiceDetails />
            <Contact />
            <Footer />
            <Copyright />
            
          </div>
        );
        //oooorrrrr tu sun gashthiii shela saif kisi madar chood ki bachiiii haan pata haa kyaa karna mujy kyaa nhi soo apnii paish naa karoo   dur maa yawaoooo loriii

      
    }
}
export default MainServices;