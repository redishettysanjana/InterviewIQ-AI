import { motion } from "framer-motion"
import { FaMicrophoneAlt, FaChartLine, FaRobot } from "react-icons/fa"
export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"></div>

            {/* Navbar */}
            <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">
                <h1 className="text-2xl font-bold text-purple-400">
                    InterviewIQ
                </h1>

                <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl transition">
                    Get Started
                </button>
            </nav>

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center text-center px-6 py-32"
            >

                <div className="bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-6">
                    AI Powered Interview Analysis
                </div>

                <h1 className="text-6xl font-bold max-w-4xl leading-tight">
                    Master Your Interviews with
                    <span className="text-purple-400"> AI Feedback</span>
                </h1>

                <p className="text-gray-400 text-lg mt-6 max-w-2xl">
                    Practice mock interviews, analyze communication skills,
                    track confidence levels, and get personalized AI-powered
                    improvement suggestions.
                </p>

                <div className="flex gap-4 mt-10">
                    <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl text-lg font-semibold transition hover:scale-105">
                        Start Interview
                    </button>

                    <button className="border border-gray-700 hover:border-purple-500 px-8 py-4 rounded-2xl text-lg transition hover:scale-105">
                        Watch Demo
                    </button>
                </div>

            </motion.section>

            {/* Features */}
            <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">

                <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gray-900/70 backdrop-blur-lg p-8 rounded-3xl border border-gray-800"
                >
                    <FaRobot className="text-4xl text-purple-400 mb-4" />

                    <h2 className="text-2xl font-semibold mb-4">
                        AI Feedback
                    </h2>

                    <p className="text-gray-400">
                        Get detailed analysis on communication,
                        confidence, and technical clarity.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gray-900/70 backdrop-blur-lg p-8 rounded-3xl border border-gray-800"
                >
                    <FaMicrophoneAlt className="text-4xl text-purple-400 mb-4" />

                    <h2 className="text-2xl font-semibold mb-4">
                        Speech Analysis
                    </h2>

                    <p className="text-gray-400">
                        Detect filler words, speaking pace,
                        and communication quality in real time.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gray-900/70 backdrop-blur-lg p-8 rounded-3xl border border-gray-800"
                >
                    <FaChartLine className="text-4xl text-purple-400 mb-4" />

                    <h2 className="text-2xl font-semibold mb-4">
                        Performance Tracking
                    </h2>

                    <p className="text-gray-400">
                        Monitor your improvement with detailed
                        analytics and interview history.
                    </p>
                </motion.div>

            </section>

            {/* Stats Section */}

            {/* Stats Section */}

            <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 pb-24">

                <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 text-center">
                    <h2 className="text-4xl font-bold text-purple-400">
                        AI
                    </h2>

                    <p className="text-gray-400 mt-2">
                        Powered Analysis
                    </p>
                </div>

                <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 text-center">
                    <h2 className="text-4xl font-bold text-purple-400">
                        Voice
                    </h2>

                    <p className="text-gray-400 mt-2">
                        Speech Evaluation
                    </p>
                </div>

                <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 text-center">
                    <h2 className="text-4xl font-bold text-purple-400">
                        Live
                    </h2>

                    <p className="text-gray-400 mt-2">
                        Interview Feedback
                    </p>
                </div>

                <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 text-center">
                    <h2 className="text-4xl font-bold text-purple-400">
                        Smart
                    </h2>

                    <p className="text-gray-400 mt-2">
                        Performance Tracking
                    </p>
                </div>

            </section>

        </div>
    )
}