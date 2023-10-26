import React from 'react'

const contact = () => {
  return (

    <div className='de' id='de'>
    <div className="container contact ">
    <h5>Contact-Us</h5>
 
    <div className="row justify-content-center">
        <div className=" opop col-md-8 col-lg-6 bg-black p-4 "> 
        {/* rounded shadow-lg */}
            <form action="https://formspree.io/f/xvondrqk" method="POST">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your first name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your last name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="4" name="message" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" value="send" className="k btn text-white bg-danger   w-100 p-2 ">Submit</button>
            </form>
         
        </div>
    </div>
    </div>
</div>
  )
}

export default contact
