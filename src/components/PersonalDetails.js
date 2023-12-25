import React from 'react';
import profilePicture from '../assets/img/profilePicture.webp';

const PersonalDetails = () => {
  return (
    <div id='personalDetails'>
        <div id='details'>
        <h1>
            Dummy Name
        </h1>
        <h5>
            MERN Stack Developer
        </h5>


        <p>
            lkds f sfl ao asjroe asfj alsfjoa ewfa fajsfopa fl afajsope fasj flajoei fsal alj owel ofa dfja lse oai dfj aoeoia djfow efal faosif aw efjoad fjasdofais fjasodfal fas foa ejla dofasief asdkjflsakdfjaose fs dsfjaoelia osk foeia ks eofiasd faj oei fasjodsifjae iosfjas dfooise fsdjosei fsjofd osidf osdf 
        </p>
        </div>
        <img src={profilePicture} alt='profilePicture'/>
    </div>
  )
}

export default PersonalDetails;