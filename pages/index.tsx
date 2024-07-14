import { useSession, signIn, signOut } from "next-auth/react";
import GitSignIn from "./component/Login";

export default function Page() {
  const session = useSession();

  if (session.data === null) {
    return <GitSignIn signIn={signIn} />;
  }
  console.log(session);
  return (
    <>
      <h1 className="text-center">Auth</h1>
      <div>hello! {session?.data?.user?.name}</div>
      <button className="btn btn-primary" onClick={signOut}>LogOut</button>
    </>
  );
}
