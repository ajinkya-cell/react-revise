"use client";
import React, { useEffect, useState } from "react";
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
    <div>
      <h1>useEffect Assignment</h1>
{/* @ts-ignore */}
      {isLoading ? <p>Loading...</p> : <Card user={user} />}

      <button
        className="bg-gray-400 p-2 rounded-2xl cursor-pointer hover:bg-amber-300"
        onClick={() => setId((prev) => prev + 1)}
      >
        Next User
      </button>
    </div>
  );
};

export default UseEffect;
