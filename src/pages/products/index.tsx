import { withCSR } from "@/hooks/use-with-ssr";
import { useGetAllQuestions } from "@/hooks/useGetAllQuestions";
import { getAllQuestions } from "@/services/getAllQuestions";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export default function Home() {
  const { data: qData, isLoading } = useGetAllQuestions();

  return (
    <div>
      <h1>Welcome to the Server-Side Rendered Page</h1>
      <div>
        {qData?.map((item: any, index: number) => {
          return <div key={index}>{item?.name?.first}</div>;
        })}
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
