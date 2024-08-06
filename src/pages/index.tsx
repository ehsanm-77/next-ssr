import { useEffect, useState } from "react";

const Home = () => {
  const [clientTime, setClientTime] = useState<any>([]);

  useEffect(() => {
    // Fetch client time on the client side
    const fetchClientTime = async () => {
      const response = await fetch(`https://opentdb.com/api.php?amount=5`); // Assuming an API route for fetching client time
      const data = await response.json();
      setClientTime(data.results);
    };
    fetchClientTime();
  }, []);
  console.log(clientTime);
  return (
    <div>
      <h1>Welcome to the Client-Side Rendered Page</h1>
      <div>
        {clientTime?.map((item: any) => {
          return <>{item?.type}</>;
        })}
      </div>
    </div>
  );
};

export default Home;
