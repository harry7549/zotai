"use client";
import { useAtom } from "jotai";
import React, { Suspense, useEffect } from "react";
import { DataAtom } from "./atom";
import UsersList from "./userlist";

const URL = "https://jsonplaceholder.typicode.com/users";

const Home = () => {
  const [, setData] = useAtom(DataAtom);

  const FetchData = async () => {
    const res = await fetch(URL);
    const resJson = await res.json();
    setData(resJson);
  };
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <h3>Fake Users Ftech Using Jotai</h3>
      <UsersList />
    </>
  );
};

export default Home;
