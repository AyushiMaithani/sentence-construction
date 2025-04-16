import { useEffect, useState } from "react";

export interface Question {
  questionId: string;
  question: string;
  questionType: string;
  answerType: string;
  options: string[];
  correctAnswer: string[];
}

interface TestData {
  testId: string;
  questions: Question[];
}

const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`${baseUrl}/data`);
        if (!response.ok) throw new Error("Failed to fetch questions");
        const data: TestData = await response.json();
        setQuestions(data.questions);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return { questions, loading, error };
};

export default useQuestions;
