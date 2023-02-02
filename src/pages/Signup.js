const Signup = (handleToken) => {
  return (
    <form className="signup-container">
      <h1>S'inscrire</h1>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <input type="checkbox" />
      <input type="submit" value="S'inscrire" />
    </form>
  );
};

export default Signup;
