import { getAllQuestions } from "@/services/getAllQuestions";
import { User } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

export const useGetAllQuestions = () => {
  return useQuery<User[]>({
    queryFn: () => getAllQuestions(),
    queryKey: ["getAllQuestions"],
  });
};
