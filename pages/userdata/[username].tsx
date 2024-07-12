import { useRouter } from "next/router";
import React, { useEffect } from "react";

const useUser = () => ({
  user: {
    name: "umang",
  },
  loading: false,
});

export default function UserName() {
  const user: any = useUser(); // custom route

  const router: any = useRouter();

  useEffect(() => {
    if (user.user == null) {
      router.replace("/");
    }
  }, [router, user.user]);
  // console.log("router :", router)
  return (
    <>
      <div>This is dynamic page </div>
      <h6>my name is {router.query.username}</h6>
      <span>the path is {router.pathname}</span>
      <br /> <br />
      <div className="flex gap-4">
        <button
          className="border border-black"
          onClick={(e) =>
            router.push({
              pathname: "/userdata",
            })
          }
        >
          go back
        </button>
        {/* // replace dont create browser history  */}
        <button
          className="border border-black"
          onClick={() => router.replace("/")}
        >
          go home
        </button>
        {/* want to reload page  */}
        <button className="border border-black" onClick={() => router.reload()}>
          reload
        </button>
      </div>
    </>
  );
}
