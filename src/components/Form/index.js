function Form() {

    return (
        <form id="contact-form">
            <h4 style={{color:"black"}}>Send me an email</h4>
            <div className="form-group">
                <label for="exampleFormControlInput1"></label>
                <input type="text" name="user_name" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1"></label>
                <input type="email" name="user_email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1" style={{color:"black"}}>Message</label>
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <br/>
            <input className="btn btn-success" type="submit" value="Send" />
        </form>
    )
}
export default Form