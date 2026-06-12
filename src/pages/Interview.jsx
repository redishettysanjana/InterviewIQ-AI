import { useState, useRef } from "react";

import {
    FaMicrophone,
    FaVideo,
    FaStop,
} from "react-icons/fa";

import { analyzeInterviewAnswer } from "../services/geminiService";

export default function Interview() {

    const [transcript, setTranscript] = useState("")
    const [feedback, setFeedback] = useState("")
    const [loading, setLoading] = useState(false)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [interviewCompleted, setInterviewCompleted] = useState(false);

    const recognitionRef = useRef(null)

    // START RECORDING
    const startRecording = () => {

        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition

        if (!SpeechRecognition) {
            alert("Speech Recognition not supported")
            return
        }

        const recognition = new SpeechRecognition()

        recognition.lang = "en-IN"
        recognition.continuous = true
        recognition.interimResults = true
        recognition.maxAlternatives = 1

        recognition.onresult = (event) => {

            let text = ""

            for (
                let i = 0;
                i < event.results.length;
                i++
            ) {

                text += event.results[i][0].transcript + " "
            }

            setTranscript(text)
        }

        recognition.start()

        recognitionRef.current = recognition
    }

    // STOP RECORDING
    const stopRecording = () => {

        if (recognitionRef.current) {
            recognitionRef.current.stop()
        }
    }

    const handleAnalyze = async () => {

        if (transcript.trim().split(" ").length < 25) {
            setFeedback(`
                            Communication Score: 1/10

                            Technical Score: 0/10

                            Confidence Score: 1/10

                            Final Feedback:
                            Answer is too short. Please provide a more detailed response.
                         `);
            return;
        }

        if (!transcript.trim()) {
            alert("Please record or type an answer first.");
            return;
        }

        setLoading(true);

        const result = await analyzeInterviewAnswer(
            questions[currentQuestionIndex],
            transcript
        );

        setFeedback(result);

        setLoading(false);
    };

    const handleNextQuestion = () => {

        if (!transcript.trim()) {
            alert("Please answer the question first.");
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {

            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTranscript("");
            setFeedback("");

        } else {

            setInterviewCompleted(true);

        }
    };

    const questions = [
        "Tell Me about Yourself.",
        "Why should We Hire You?",
        "Why are you Interested in this Role?",
        "Where do you see yourself in the next 5 years?",
        "What is one weakness you are currently working on?"
    ];

    if (interviewCompleted) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">

                <h1 className="text-5xl font-bold text-purple-500 mb-6">
                    🎉 Interview Completed
                </h1>

                <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-[600px]">

                    <h2 className="text-2xl font-semibold mb-4">
                        Interview Summary
                    </h2>

                    <p className="text-lg mb-2">
                        Questions Answered: {questions.length}/{questions.length}
                    </p>

                    <p className="text-lg mb-6">
                        Great job completing the mock interview!
                    </p>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">
                            Strengths
                        </h3>
                        <ul className="list-disc ml-6 text-gray-300">
                            <li>Completed all questions</li>
                            <li>Practiced interview communication</li>
                            <li>Improved confidence through mock sessions</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                            Suggestions
                        </h3>
                        <ul className="list-disc ml-6 text-gray-300">
                            <li>Provide more detailed technical examples</li>
                            <li>Use structured answers (STAR method)</li>
                            <li>Practice speaking clearly and confidently</li>
                        </ul>
                    </div>

                    <button
                        onClick={() => window.location.reload()}
                        className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
                    >
                        Start Again
                    </button>

                </div>

            </div>
        );
    }

    return (

        <div className="min-h-screen bg-black text-white flex">

            {/* LEFT SECTION */}
            <div className="flex-1 p-10">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-10">

                    <div>

                        <h1 className="text-5xl font-bold mb-3">
                            InterviewIQ
                        </h1>

                        <p className="text-gray-400 text-lg">
                            Answer the questions naturally. AI will analyze your response.
                        </p>

                    </div>

                    <div className="bg-purple-600 px-6 py-4 rounded-2xl font-semibold">
                        Question {currentQuestionIndex + 1}/{questions.length}
                    </div>

                </div>

                {/* QUESTION CARD */}
                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 mb-8">

                    <p className="text-purple-400 mb-5">
                        Frontend Developer Interview
                    </p>

                    <h2 className="text-4xl font-semibold leading-relaxed">
                        {questions[currentQuestionIndex]}
                    </h2>

                </div>

                {/* LIVE TRANSCRIPT */}
                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-8">

                    <h3 className="text-3xl font-bold mb-5">
                        Live Transcript
                    </h3>

                    <textarea
                        value={transcript}
                        onChange={(e) => setTranscript(e.target.value)}
                        className="w-full h-40 bg-gray-800 text-white p-4 rounded-xl"
                        placeholder="Your answer will appear here..."
                    />

                </div>

                <p className="text-yellow-400 text-sm mt-2">
                    Review and edit your transcript before analysis.
                </p>

                {/* AI FEEDBACK */}
                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-8">

                    <h3 className="text-3xl font-bold mb-5 text-purple-400">
                        AI Feedback
                    </h3>

                    <p className="text-gray-300 whitespace-pre-line leading-relaxed text-lg">

                        {loading
                            ? "Analyzing answer..."
                            : feedback || "AI analysis will appear here..."}

                    </p>

                </div>

                {/* BUTTONS */}
                <div className="flex gap-5 flex-wrap">

                    {/* START */}
                    <button
                        onClick={startRecording}
                        className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl flex items-center gap-3 transition text-lg"
                    >

                        <FaMicrophone />

                        Start Recording

                    </button>

                    {/* STOP */}
                    <button
                        onClick={stopRecording}
                        className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl flex items-center gap-3 transition text-lg"
                    >

                        <FaStop />

                        Stop

                    </button>

                    {/* ANALYZE */}
                    <button
                        onClick={handleAnalyze}
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-white font-semibold"
                    >
                        Analyze Answer
                    </button>

                    <button
                        onClick={handleNextQuestion}
                        className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl text-white font-semibold"
                    >
                        Next Question
                    </button>

                </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="w-96 border-l border-gray-800 bg-gray-950 p-8">

                {/* AI TIPS */}
                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

                    <h2 className="text-3xl font-bold mb-8">
                        AI Interview Tips
                    </h2>

                    <ul className="space-y-6 text-gray-400 text-lg">

                        <li>
                            • Speak clearly and confidently
                        </li>

                        <li>
                            • Avoid filler words
                        </li>

                        <li>
                            • Maintain concise explanations
                        </li>

                        <li>
                            • Structure answers properly
                        </li>

                    </ul>

                </div>

            </aside>

        </div>

    )
}