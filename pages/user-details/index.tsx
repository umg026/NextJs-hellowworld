import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface user {
  id: number;
  firstName: string;
  lastName: string;
  Loading: boolean;
}

function Index() {
  const [data, setData] = useState<user[] | null>([]);
  const [loading, setLoading] = useState<user[] | boolean>(true);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const get = await axios.get("https://dummyjson.com/users");
      setData(get.data.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return  <h1>Loading data......</h1>
  }

  return (
    <>
      <h1>users list:</h1>
      <br />
      {data &&
        data?.map((user) => {
          return (
            <Link key={user.id} href={`/user-details/${user.id}`}>
              <div>
                {user.firstName} {user.lastName}
              </div>
            </Link>
          );
        })}
    </>
  );
}

export default Index;
