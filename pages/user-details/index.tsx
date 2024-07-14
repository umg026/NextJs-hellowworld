import React, { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import styles from "../../styles/server.module.css";
import Image from "next/image";

interface user {
  id: number;
  firstName: string;
  lastName: string;
}
interface UserData {
  users: user[];
}

const fetcher = (url: string): Promise<UserData> =>
  fetch(url).then((res: any) => res.json()); // fetch data using SWR

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
      <Image height={200} width={300} src={"https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"} alt="next image" />
      <br />
      {data.users &&
        data.users.map((item) => (
          <Link key={item.id} href={`/user-details/${item.id}`}>
            <div className={styles.text}>
              {item.firstName} {item.lastName}
            </div>
          </Link>
        ))}
    </>
  );
}

export default Index;
