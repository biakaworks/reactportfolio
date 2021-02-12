function Contact() {
    return (
      <div className="container" id="contact">
        <div className="row">
          <div className="col-12">Contact</div>
        </div>
        {/* <!-- About Me Section and Biography --> */}
        <div className="row">
          <div className="col-12 col-lg-12">
            <form>
              <div className="form-group">
                <label for="formGroupExampleInput">Name</label>
                <input
                  type="text"      
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">Message</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Message"
                />
              </div>
              <button type="button" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;