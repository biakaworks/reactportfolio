import Easyserveimage from "./easyserve.png";
import Discomfortzoneimage from "./DiscomfortZone.png";
import Readmeimage from "./ReadMeGenerator.png";

function Portfolio() {
  return (
    <div>
        <div className="container" id="main-area">
          <div className="row">
            <div className="col-12" id="pagetitle">
              Portfolio
            </div>
          </div>

          {/* Actual Blocks */}
          <div className="col mb-4">
            <div className="card">
              <img
                src={Discomfortzoneimage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Project 1: Discomfort Zone</h5>
                <p className="card-text">
                  A web application that helps you explore new places to
                  explore.
                </p>
                <a
                  href="https://github.com/MeganGerwick/discomfort_zone"
                  className="btn btn-primary"
                
                >
                  Github Repo
                </a>
                <a
                  href="https://megangerwick.github.io/discomfort_zone/"
                  className="btn btn-primary"
              
                >
                  Deployed App
                </a>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img src={Easyserveimage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Project 2: Easy Care</h5>
                <p className="card-text">
                  A web application that helps you explore new places to
                  explore.
                </p>
                <a
                  href="https://github.com/biakaworks/Easy-Serve"
                  className="btn btn-primary"
                  
                >
                  Github Repo
                </a>
                <a
                  href="https://easyserve.herokuapp.com/"
                  className="btn btn-primary"
                  
                >
                  Deployed App
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={Readmeimage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">ReadMe Generator</h5>
                <p className="card-text">
                  An application that uses Node.js and Inquirer, that allows the
                  user to create fast, simple and clean README.md file to use
                  for their projects. You can see an example here in the
                  directory called Read Generator.
                </p>
                <a
                  href={"https://github.com/biakaworks/Employee-Organizer"}
                  className="btn btn-primary"
                  
                >
                  Github Repo
                </a>
                <a
                  href={
                    "https://www.youtube.com/watch?v=5bQo0lkAAzM&feature=youtu.be"
                  }
                  className="btn btn-primary"
                  
                >
                  Video Example
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Portfolio;
