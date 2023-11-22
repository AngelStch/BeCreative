
export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
      };
    
      return (
        <div className="formToRegister">
          <form className="form-container" onSubmit={handleSubmit}>
            <h2 className="textForm">Wellcome friend!</h2>
            <label htmlFor="username" className="RegisterLabel">Username:</label>
            <input type="text" id="username" name="username" required className="form-input" />
    
            <label htmlFor="password" className="RegisterLabel">Password:</label>
            <input type="password" id="password" name="password" required className="form-input" />
    
            <label htmlFor="repeatPassword" className="RegisterLabel">Repeat Password:</label>
            <input type="password" id="repeatPassword" name="repeatPassword" required className="form-input" />
    
            <a href="#" class="register-button">Register</a>
          </form>
        </div>
      );
}