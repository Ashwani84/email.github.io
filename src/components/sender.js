import emailjs from 'emailjs-com'

function Sender() {
    function sendEmail(e){
        e.preventDefault();
    emailjs.sendForm('service_stw66qk', 'template_ggmfrcq',e.target,'user_rNKK0V34RxODNAAZD')
    .then((response)=> {
       console.log('SUCCESS!', response.status, response.text);
    },(error) => {
       console.log('FAILED...', error);
    });
    e.target.reset()
}

    return (
        <div className="container border" style={{marginTop:"50px", width:"50%"}}>
        <h1>Email</h1>
        <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
            <label>name</label>
            <input type="text" name="name" className="form-control"/>
            <label>Email</label>
            <input type="email" name="user-email" className="form-control"/>
            <label>Message</label>
            <textarea name="message" rows="6" className="form-control"/>
            <input type="file" name="upload" className="form-control btn btn-primary" style={{marginTop:"20px"}}/>
            <input type="submit" value="Send" className="form-control btn btn-primary"
            style={{marginTop:"20px"}}/>
            
        </form>
    </div>
      );
}

export default Sender;