import {
  FaChartLine,
  FaMicrophone,
  FaRobot,
  FaHistory,
} from "react-icons/fa"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-950 border-r border-gray-800 p-6">

        <h1 className="text-3xl font-bold text-purple-400 mb-10">
          InterviewIQ
        </h1>

        <nav className="space-y-6">

          <div className="flex items-center gap-3 text-purple-400">
            <FaChartLine />
            <span>Dashboard</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400 hover:text-purple-400 cursor-pointer transition">
            <FaMicrophone />
            <span>Interview</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400 hover:text-purple-400 cursor-pointer transition">
            <FaRobot />
            <span>AI Feedback</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400 hover:text-purple-400 cursor-pointer transition">
            <FaHistory />
            <span>History</span>
          </div>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Track your interview performance with AI insights.
            </p>
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl font-semibold transition">
            Start Interview
          </button>

        </div>

        {/* Stats Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8">
            <h2 className="text-gray-400 mb-3">
              Interviews Completed
            </h2>

            <p className="text-5xl font-bold text-purple-400">
              12
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8">
            <h2 className="text-gray-400 mb-3">
              Average Score
            </h2>

            <p className="text-5xl font-bold text-purple-400">
              84%
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8">
            <h2 className="text-gray-400 mb-3">
              Confidence Level
            </h2>

            <p className="text-5xl font-bold text-purple-400">
              High
            </p>
          </div>

        </section>

        {/* Recent Activity */}
        <section className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Recent Interview Feedback
          </h2>

          <div className="space-y-6">

            <div className="border border-gray-800 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">
                Frontend Developer Interview
              </h3>

              <p className="text-gray-400">
                Strong communication skills. Improve technical depth
                while explaining React concepts.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">
                Java Backend Interview
              </h3>

              <p className="text-gray-400">
                Good confidence level. Reduce filler words and improve
                API explanation clarity.
              </p>
            </div>

          </div>

        </section>

      </main>

    </div>
  )
}