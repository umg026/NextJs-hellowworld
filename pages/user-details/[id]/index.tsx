import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
export default function UserDetails() {
  const router = useRouter()
  const { query } = useRouter();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    if (query.id) {
      fetchData();
    }
  }, [query.id]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/users/${query.id}`);
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <button onClick={()=> router.push("/user-details")}>Back</button>
        {user && (
          <React.Fragment>
            <div>{user.firstName}</div>
            <br />
            <div>{user.email}</div>
          </React.Fragment>
        )}
      </div>
    </>
  );
}
