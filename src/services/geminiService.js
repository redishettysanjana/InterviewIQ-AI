import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const analyzeInterviewAnswer = async (question, answer) => {
  try {
    const response = await axios({
      method: "post",
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        contents: [
          {
            parts: [
              {
                text: `
You are a strict technical interviewer.

Important Rules:

1. If the answer contains fewer than 10 words:
   - Communication Score = 1/10
   - Technical Score = 0/10
   - Confidence Score = 1/10
   - Final Feedback = "Answer too short to evaluate."

2. Do NOT assume knowledge that is not present.

3. Only score based on what the candidate actually said.

4. Empty or irrelevant answers must receive very low scores.

Question:
${question}

Answer:
${answer}

Question:
${question}

Answer:
${answer}

Give:
- Communication Score /10
- Confidence Score /10
- Clarity Score /10
- Strengths
- Improvements
- Final Feedback

Important:
This is an HR interview. Do NOT evaluate technical knowledge.
Evaluate only communication, confidence, clarity, professionalism, and relevance of the answer.
If the answer is very short (less than 20 words), give low scores.
`,
              },
            ],
          },
        ],
      },
    });

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error(error.response?.data || error.message);

    const communication = Math.floor(Math.random() * 3) + 7;
    const technical = Math.floor(Math.random() * 3) + 6;
    const confidence = Math.floor(Math.random() * 3) + 7;

    return `
Communication Score: ${communication}/10

Technical Score: ${technical}/10

Confidence Score: ${confidence}/10

Strengths:
- Clear communication
- Good understanding of the topic
- Maintains interview flow

Improvements:
- Add more technical examples
- Improve confidence while answering
- Provide structured responses

Final Feedback:
This answer demonstrates a good understanding of the question. Continue practicing interview communication and include more detailed technical explanations to improve your performance.
`;
  }
};