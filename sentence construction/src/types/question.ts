export interface Question {
    questionId: string;
    question: string;
    questionType: string;
    answerType: string;
    options: string[];
    correctAnswer: string[];
  }
  
  export interface TestData {
    testId: string;
    questions: Question[];
  }
  
  export interface ApiResponse {
    status: string;
    data: TestData;
    message: string;
    activity: {
      id: string;
      userId: string;
      type: string;
      coinType: string;
      coins: number;
      description: string;
      createdAt: string;
    };
  }