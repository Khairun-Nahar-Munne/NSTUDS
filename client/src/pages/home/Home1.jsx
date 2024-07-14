
import Footer from "../../components/footer/Footer";
import Header1 from "../../components/header/Header1";

import "./home.css";


export default function Home1() {

    
  return (
    <>
      <Header1 />
      <div className="about">
            <div className="description">
                <div className="first-half-div">
                    <h1>Welcome to NSTU Debating Society</h1>
                    <p>Upholding the motto 'যুক্তির উচ্ছ্বাসে, চেতনার বিকাশে' we are creating enthusiasm about debate
                        among
                        the students of NSTU. NSTU DEBATING SOCIETY is the first registered organization of Noakhali
                        Science
                        and Technology University. It has been able to show the extent of its co-educational activities
                        since its inception on 25th November,2007. Since then the organization has
                        been
                        creating an environment for students to practice debate and learn debate. As a result,
                        university
                        students are becoming national-level debaters at the hands of society. As the organization
                        continues
                        to increase its achivements at the national level. It also maintains a strong position in
                        ethical
                        matters. The organiztion is already making debut as a national judge as well as a debater, for
                        which
                        regular breaks are proof. In its continuation, it gained the honor of being runner-up at the
                        national level.On 21st May 2023, the 7th Executive Board of the organization was given the
                        responsibility to take forward all these achivements which is being conducted in collaboration
                        with
                        modarators, assistant modarators, 21 executive members, and about 32 sub executive</p>
                </div>
                <div className="second-half-div">
                    
                    <div className="image">
                        <div className="slide main">
                            <img src="./image/champion.jpg" alt="" height="500px" width="690px"/>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            <Footer/>
     
        </>
   
  );
}