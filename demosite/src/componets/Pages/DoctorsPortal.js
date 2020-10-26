import React, { Component } from 'react';
import Portal from '../Common/portal'

class DoctorsPortal extends Component {
    render() {

      //ull bul kaaa gora jo putha questions kary barha bhen kaaa loraaaa

      //atikaaa naaa maa yawain kisi kothi k bacha  main pahlay bata raha agar bajiii paish ki too main tere ghr war jana haa haa



      
        return (
          <div>
            <Portal 
            PortalName="Doctors Portal"

            showHistory1="true"
            History1="Patient History"
            showHistory2=""
            History2="Patients History"
            
            showRequest1=""
            Request1=""
            showRequest2="true"
            Request2="Patients Request"

            uploadImage="true"

            PersonName="Dr. Muhammad Umar"
            />
           
           </div>
        );}
 }
                           
export default DoctorsPortal;