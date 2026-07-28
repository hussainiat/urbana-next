"use client";

import { useState, useEffect } from "react";
import {
  Search, Trophy, User, Calendar, Award,
  Loader2, FileText, Eye, Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { loadExamResults, type ExamResult, type ResultData } from "@/lib/csvParser";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const AVAILABLE_EXAMS = [
  {
    value: "entrance-2025",
    label: "ENTRANCE cum SCHOLARSHIP EXAM Result Held on 2082-03-19",
  },
] as const;

const RESULT_NOTICES = [
  {
    date: "2083-02-06",
    filename: "result-2083-02.pdf",
    viewHref: "/results/result-2083-02.pdf",
  },
] as const;

// ---------------------------------------------------------------------------
// Custom hook
// ---------------------------------------------------------------------------

function useExamResults() {
  const [examData, setExamData] = useState<Record<string, ExamResult>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadExamResults()
      .then(setExamData)
      .catch((err) => console.error("Failed to load exam data:", err))
      .finally(() => setLoading(false));
  }, []);

  return { examData, loading };
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface ResultNoticeCardProps {
  date: string;
  filename: string;
  viewHref: string;
}

function ResultNoticeCard({ date, filename, viewHref }: ResultNoticeCardProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = viewHref;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h3 className="font-montserrat text-lg font-bold text-gray-800 mb-1">
            Official Result Notice — {date}
          </h3>
          <p className="text-gray-600 text-sm mb-1">
            Download the complete result notice for ENTRANCE cum SCHOLARSHIP EXAM
            held on {date} with detailed examination information.
          </p>
          <p className="text-xs text-gray-400">
            PDF • Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
        <Button
          onClick={() => window.open(viewHref, "_blank")}
          variant="outline"
          className="border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white font-montserrat font-semibold flex items-center gap-2"
        >
          <Eye className="w-4 h-4" />
          View PDF
        </Button>
        <Button
          onClick={handleDownload}
          className="bg-[#800020] hover:bg-[#600018] text-white font-montserrat font-semibold flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------

interface SearchResultCardProps {
  result: ResultData;
}

function SearchResultCard({ result }: SearchResultCardProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-md p-6 space-y-4">
      <h3 className="font-montserrat text-xl font-bold text-green-800 flex items-center gap-2">
        <Trophy className="w-5 h-5" />
        Result Found!
      </h3>
      <dl className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="font-semibold text-gray-600">Roll Number</dt>
          <dd className="font-montserrat font-bold text-gray-800">{result.rollNo}</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-600">Score</dt>
          <dd className="font-montserrat font-bold text-green-600">{result.score}%</dd>
        </div>
        <div className="col-span-2">
          <dt className="font-semibold text-gray-600">Rank</dt>
          <dd className="font-montserrat font-bold text-blue-600">#{result.rank}</dd>
        </div>
      </dl>
    </div>
  );
}

// ---------------------------------------------------------------------------

interface PerformerRowProps {
  performer: ResultData;
  index: number;
}

function rankBadgeClass(index: number) {
  if (index === 0) return "bg-yellow-500 text-white";
  if (index === 1) return "bg-gray-400 text-white";
  if (index === 2) return "bg-orange-600 text-white";
  return "bg-blue-100 text-blue-600";
}

function PerformerRow({ performer, index }: PerformerRowProps) {
  const isTopThree = index < 3;

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg border ${
        isTopThree
          ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${rankBadgeClass(index)}`}
        >
          {performer.rank}
        </div>
        <div>
          <p className="font-montserrat font-semibold text-gray-800">
            Roll No: {performer.rollNo}
          </p>
          <p className="text-xs text-gray-500">Rank #{performer.rank}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-bold text-green-600">{performer.score}%</p>
        {isTopThree && <Award className="w-4 h-4 text-yellow-500 mx-auto mt-0.5" />}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function Results() {
  const { examData, loading } = useExamResults();
  const [selectedExam, setSelectedExam] = useState("");
  const [candidateId, setCandidateId] = useState("");
  const [searchResult, setSearchResult] = useState<ResultData | null>(null);
  const [searchError, setSearchError] = useState("");

  const handleSearch = () => {
    setSearchError("");
    setSearchResult(null);

    if (!selectedExam) {
      setSearchError("Please select an exam first.");
      return;
    }
    if (!candidateId.trim()) {
      setSearchError("Please enter your Roll Number.");
      return;
    }

    const found = examData[selectedExam]?.results[candidateId];
    if (found) {
      setSearchResult({ ...found, rollNo: candidateId });
    } else {
      setSearchError("No results found for this Roll Number in the selected exam.");
    }
  };

  const topPerformers: ResultData[] =
    selectedExam ? (examData[selectedExam]?.topPerformers ?? []) : [];

  const totalCandidates = selectedExam
    ? Object.keys(examData[selectedExam]?.results ?? {}).length
    : 0;

  const highestScore = topPerformers[0]?.score ?? null;

  const avgTopTen =
    topPerformers.length > 0
      ? Math.round(
          topPerformers
            .slice(0, 10)
            .reduce((sum, p) => sum + p.score, 0) /
            Math.min(topPerformers.length, 10)
        )
      : null;

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#800020]" />
        <p className="text-gray-600">Loading exam results…</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-[#800020]">
          Exam Results
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto my-6" />
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          Select an exam and enter your Roll Number to view your results
        </p>
      </div>

      {/* Result Notices */}
      <Card className="bg-white shadow-lg border border-gray-100">
        <CardHeader>
          <CardTitle className="font-montserrat text-2xl font-bold text-[#800020] flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Result Notices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {RESULT_NOTICES.map((notice) => (
            <ResultNoticeCard key={notice.date} {...notice} />
          ))}
        </CardContent>
      </Card>

      {/* Search + Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Search */}
        <Card className="bg-white shadow-lg border border-gray-100">
          <CardHeader>
            <CardTitle className="font-montserrat text-2xl font-bold text-[#800020] flex items-center gap-2">
              <Search className="w-6 h-6" />
              Search Your Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="font-montserrat font-semibold text-gray-700">
                Select Exam
              </label>
              <Select value={selectedExam} onValueChange={setSelectedExam}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an exam" />
                </SelectTrigger>
                <SelectContent>
                  {AVAILABLE_EXAMS.map((exam) => (
                    <SelectItem key={exam.value} value={exam.value}>
                      {exam.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="font-montserrat font-semibold text-gray-700">
                Roll Number
              </label>
              <Input
                type="text"
                placeholder="e.g. 10415"
                value={candidateId}
                onChange={(e) => setCandidateId(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>

            <Button
              onClick={handleSearch}
              className="w-full bg-[#800020] hover:bg-[#600018] text-white font-montserrat font-semibold py-3"
              size="lg"
            >
              Search Results
            </Button>

            {searchError && (
              <p className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                {searchError}
              </p>
            )}

            {searchResult && <SearchResultCard result={searchResult} />}
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card className="bg-white shadow-lg border border-gray-100">
          <CardHeader>
            <CardTitle className="font-montserrat text-2xl font-bold text-[#800020] flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!selectedExam ? (
              <div className="text-center py-12">
                <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-lato">
                  Select an exam to view top performers
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  The top 10 candidates will be displayed here
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {topPerformers.slice(0, 10).map((performer, index) => (
                  <PerformerRow
                    key={performer.rollNo}
                    performer={performer}
                    index={index}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* How-to Instructions */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
        <CardContent className="py-8">
          <div className="text-center">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-6">
              How to Check Your Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Select the exam you appeared for from the dropdown menu.",
                "Enter your Roll Number exactly as provided during registration.",
                "Click 'Search Results' to view your score and rank.",
              ].map((text, i) => (
                <div key={i} className="text-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                    {i + 1}
                  </div>
                  <p className="font-lato text-sm text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />}
          value={highestScore !== null ? `${highestScore}%` : "N/A"}
          label="Highest Score"
        />
        <StatCard
          icon={<User className="w-12 h-12 text-blue-500 mx-auto mb-4" />}
          value={totalCandidates || "N/A"}
          label="Total Candidates"
        />
        <StatCard
          icon={<Award className="w-12 h-12 text-green-500 mx-auto mb-4" />}
          value={avgTopTen !== null ? `${avgTopTen}%` : "N/A"}
          label="Average Score (Top 10)"
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card className="text-center">
      <CardContent className="py-6">
        {icon}
        <p className="font-montserrat text-2xl font-bold text-gray-800">{value}</p>
        <p className="text-gray-600 text-sm mt-1">{label}</p>
      </CardContent>
    </Card>
  );
}