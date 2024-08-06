import { getAllQuestions } from "@/services/getAllQuestions";
import { useQuery } from "@tanstack/react-query";

export const useGetAllQuestions = () => {
  return useQuery({
    queryFn: () => getAllQuestions(),
    queryKey: ["getAllQuestions"],
  });
};
