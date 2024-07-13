import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const fecth = (url: string): Promise<UserData> =>
  axios.get(url).then((res) => res.data);

export default function UserDetails() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR<UserData>(
    router.query.id ? `https://dummyjson.com/users/${router.query.id}` : null,
    fecth
  );
  console.log(data);

  if (isLoading) {
    return <h1>loading.....</h1>;
  }
  return (
    <>
      <div>
        <button onClick={() => router.push("/user-details")}>Back</button>
        {data && (
          <>
            <div>{data.firstName}</div>
            <br />
            <div>{data.email}</div>
          </>
        )}
      </div>
    </>
  );
}
