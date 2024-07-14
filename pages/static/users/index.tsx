import { GetStaticProps } from "next";

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
  //   console.log(res);
  return (
    <>
      <h1>Users (SSG)</h1>
      <br />
      {res.users.map((user: any) => {
        return <li key={user.id}>Number :{user.phone}</li>;
      })}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
