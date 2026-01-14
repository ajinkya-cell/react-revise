"use client";
import React, { useEffect, useState } from "react";
import { SiFiledotio } from "react-icons/si";
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

interface CardProps {
    user : User
}


const Card = ({ user }:CardProps) => {
  if (!user) return <p>No user</p>;

  return (
    <div>
      <p>{user.id}</p>
      <h2>{user.name}</h2>
      <p>Phone - {user.phone}</p>
      <p>Website - {user.website}</p>
    </div>
  );
};

const UseEffect = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error(`Response error ${response.status}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // 🔥 YOU MISSED THIS
  }, [id]);

  return (
    <div className="bg-neutral-950">
      <h1>useEffect Assignment</h1>
{/* @ts-ignore */}
      {isLoading ? <p>Loading...</p> : <Card user={user} />}

      <button
        className="bg-neutral-900 flex gap-2 items-center hover:scale-110 transition-all duration-200 border-2 p-2 rounded-xl cursor-pointer hover:bg-neutral-800"
        onClick={() => setId((prev) => prev + 1)}
      >
        <SiFiledotio className=" group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 "/>
        Next User
      </button>
    </div>
  );
};

export default UseEffect;
