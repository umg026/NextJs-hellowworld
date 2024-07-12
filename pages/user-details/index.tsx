import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
interface user {
  id: number;
  firstName: string;
  lastName: string;
}
interface UserData {
  users: user[];
}

const fetcher = (
  url: string
): Promise<UserData> => fetch(url).then((res: any) => res.json()); // fetch data using SWR

function Index() {
  const { data, error } = useSWR<UserData>(
    "https://dummyjson.com/users",
    fetcher
  );

  if (!data) {
    return <h1>Loading data......</h1>;
  }
  if (error) {
    return <h1>Error loading data.</h1>;
  }

  return (
    <>
      <h1>users list:</h1>
      <br />
      {data.users &&
        data.users.map((item) => (
          <Link key={item.id} href={`/user-details/${item.id}`}>
            <div>
              {item.firstName} {item.lastName}
            </div>
          </Link>
        ))}
    </>
  );
}

export default Index;
