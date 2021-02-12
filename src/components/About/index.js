import Profileimage from "./BiakaZResponsiveSite.jpg"
function About() {
  return (
    <div>
       <div className="container pt-3" id="Aboutme">
            <div className="row">
                <div className="col-12" id="pagetitle"> 
                    About Me 
                </div>
            </div>
    {/* <!-- About Me Section and Biography --> */}
        <div className="row">
            <div className="col-12 col-lg-12">

            <img src={Profileimage} className="img-fluid float-left" alt="Biaka Z Photo" id="aboutme-img" />
            
            {/* <!--Biography Area --> */}
            <p className="text-wrap">
                My name is Biaka Zaidarhzauva and I have been a graphic design for over 11 years. I am experienced in many areas of design and marketing. Born in Aizawl, India, and growing up in Taiwan where my passion for drawing grew into a love for design, visual communications, and marketing. Over the years while working with many talented developers on websites, software and day-to-day conversations, I found myself more and more drawn to the world of developement.
            </p>
            <p className="text-wrap">
                I'm very thankful for the opportunity to dive into fullstack development at KU's bootcamp. I look forward to utilizng my graphic design skills into fulstack developement in the future.
            </p>
            <p className="text-wrap">
                Biaka is working on developing his coding skills through the Kansas University Fullstack Development Bootcamp.  He and his wife and daughter live in Kansas City, MO where they are expecting their second kid in March of 2021.
            </p>

            </div>

        </div>


        </div>
        </div>
  );
}

export default About;
