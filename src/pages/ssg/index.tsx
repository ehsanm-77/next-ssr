import { useGetAllQuestions } from "@/hooks/useGetAllQuestions";
import { getAllQuestions } from "@/services/getAllQuestions";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export default function Home() {
  const { data: qData, isLoading } = useGetAllQuestions();
  return (
    <div className="p-5">
      <h1 className="font-bold mb-5 text-center text-xl">
        Welcome to the Static Site Generated Page
      </h1>
      <div className="grid grid-cols-4 gap-2">
        {!isLoading ? (
          qData?.map((item: any, index: number) => (
            <div
              className="bg-red-400 rounded-md shadow-md p-3 text-white text-center font-bold text-xl"
              key={index}
            >
              {item?.name?.first}
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getAllQuestions"],
    queryFn: getAllQuestions,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 5, // Re-generate the page every 60 seconds if a request comes in
  };
}
