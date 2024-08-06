import { withCSR } from "@/hooks/use-with-ssr";
import { useGetAllQuestions } from "@/hooks/useGetAllQuestions";
import { getAllQuestions } from "@/services/getAllQuestions";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export default function Ssr() {
  const { data: qData, isLoading } = useGetAllQuestions();
  return (
    <div className="p-5">
      <h1 className="font-bold mb-5 text-center text-xl">
        Welcome to the Server-Side Rendered Page
      </h1>
      <div className="grid grid-cols-4 gap-2">
        {!isLoading ? (
          qData?.map((item: any, index: number) => {
            return (
              <div
                className="bg-red-400 rounded-md shadow-md p-3 text-white text-center font-bold text-xl"
                key={index}
              >
                {item?.name?.first}
              </div>
            );
          })
        ) : (
          <div>loading ...</div>
        )}
      </div>
    </div>
  );
}
export const getServerSideProps = withCSR(async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["getAllQuestions"],
      queryFn: () => getAllQuestions(),
    }),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});
