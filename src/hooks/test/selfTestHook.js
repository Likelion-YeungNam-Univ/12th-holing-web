import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSelfTest = (nextRoute) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const navigate = useNavigate();

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const isButtonActive = selectedAnswer !== null;

  const handleNextButtonClickWithScore = () => {
    if (isButtonActive) {
      navigate(nextRoute);
    }
  };

  return {
    selectedAnswer,
    handleAnswerClick,
    isButtonActive,
    handleNextButtonClickWithScore,
  };
};
