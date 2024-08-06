import Link from "next/link";

const Home = () => {
  return (
    <div className="p-5 flex flex-col gap-4">
      <Link href={"/csr"} rel="no-follow">
        <div className="bg-yellow-400 w-40 p-4 text-center shadow-md rounded-md hover:bg-yellow-500 cursor-pointer">
          Go To Csr
        </div>
      </Link>

      <Link href={"/ssr"}>
        <div className="bg-red-400 w-40 p-4 text-center shadow-md rounded-md hover:bg-red-500 cursor-pointer">
          Go To Ssr
        </div>
      </Link>
      <Link href={"/ssg"}>
        <div className="bg-blue-400 w-40 p-4 text-center shadow-md rounded-md hover:bg-blue-500 cursor-pointer">
          Go To Ssg
        </div>
      </Link>
    </div>
  );
};

export default Home;
