import { User } from "@/types/type";
import { useEffect, useState } from "react";

const Csr = () => {
  const [clientTime, setClientTime] = useState<User[] | []>([]);
  useEffect(() => {
    const fetchClientTime = async () => {
      const response = await fetch(`https://randomuser.me/api/?results=5`);
      const data = await response.json();
      setClientTime(data.results);
    };
    fetchClientTime();
  }, []);
  return (
    <div className="p-5">
      <h1 className="font-bold mb-5 text-center text-xl">
        Welcome to the Client-Side Rendered Page
      </h1>
      <div className="grid grid-cols-4 gap-2">
        {clientTime?.map((item: User) => {
          return (
            <div
              className="bg-yellow-400 rounded-md shadow-md p-3 text-white text-center font-bold text-xl"
              key={item?.id?.value}
            >
              {item?.name?.first}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Csr;
