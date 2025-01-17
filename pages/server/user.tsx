import { GetServerSideProps } from "next";
// import style from "../../styles/server.module.css";
import style from "../../styles/server.module.css";


interface User {
  id: number;
  email: string;
  fristName?: string;
}

interface Props {
  res: {
    users: User[];
  };
}

const User: React.FC<Props> = ({ res }) => {
  // this is server side rendering in nextjs

  return (
    <>
      <h1 className="text-red-600 text-center">Users (SSR)</h1>
      <br />
      {res.users.map((user: any) => {
        return <li key={user.id}>{user.email}</li>;
      })}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // if you use this export func name then next automatically consider as server side render page
  const data = await fetch("https://dummyjson.com/users");
  const res = await data.json();

  //   console.log("this is server task");
  return {
    props: {
      res,
    },
  };
};

export default User;
