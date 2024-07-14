import { GetStaticPaths, GetStaticProps } from "next";

interface user {
  id: number;
  email: string;
  firstName?: string;
}

const UserPage: React.FC<{ data: user }> = ({ data }: any) => {
  return (
    <div>
      <h1>This is static user id page</h1>
      <p>User ID: {data.id}</p>
      <p>Email: {data.email}</p>
      <p>First Name: {data.firstName}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`https://dummyjson.com/users`)).json();
  const allIds = await data.users.map((user: any) => user.id);
  console.log(allIds);

  return {
    paths: allIds.map((userId: number) => ({ params: { id: `${userId}` } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
  return {
    props: {
      data,
    },
  };
};

export default UserPage;
