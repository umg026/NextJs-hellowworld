// import "./style.css";
interface GitHubProps {
    signIn: () => void;
}

const GitSignIn :React.FC<GitHubProps> = ({ signIn}) => {
  return (
    <div className="container">
      <h1>Sign In with GitHub</h1>
      <a onClick={signIn}
        href="https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID"
        className="github-btn flex"
      >
        <img
          src="https://github.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
        />
        Sign in with GitHub
      </a>
    </div>
  );
};
export default GitSignIn;
