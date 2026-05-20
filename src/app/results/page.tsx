"use client";

import { FileText, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// TODO: Restore these imports when search & stats features are implemented
// import { useState, useEffect } from "react";
// import { Search, Trophy, User, Calendar, Award, Loader2 } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { loadExamResults, type ExamResult, type ResultData } from "@/lib/csvParser";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const RESULT_NOTICES = [
  {
    date: "2083-02-06",
    filename: "result-2083-02.pdf",
    viewHref: "/results/result-2083-02.pdf",
  },
] as const;

// TODO: Restore when search feature is implemented
// const AVAILABLE_EXAMS = [
//   {
//     value: "entrance-2025",
//     label: "ENTRANCE cum SCHOLARSHIP EXAM Result Held on 2082-03-19",
//   },
// ] as const;

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

// TODO: Restore when search feature is implemented
// function SearchResultCard({ result }: { result: ResultData }) { ... }

// TODO: Restore when top performers feature is implemented
// function rankBadgeClass(index: number) { ... }
// function PerformerRow({ performer, index }: PerformerRowProps) { ... }

// TODO: Restore when statistics feature is implemented
// function StatCard({ icon, value, label }: StatCardProps) { ... }

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function Results() {
  // TODO: Restore when search & stats features are implemented
  // const { examData, loading } = useExamResults();
  // const [selectedExam, setSelectedExam] = useState("");
  // const [candidateId, setCandidateId] = useState("");
  // const [searchResult, setSearchResult] = useState<ResultData | null>(null);
  // const [searchError, setSearchError] = useState("");

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-[#800020]">
          Exam Results
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto my-6" />
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          Download the official result notices below
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

      {/* TODO: Restore when search & top performers features are implemented */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
      {/*   <SearchCard ... /> */}
      {/*   <TopPerformersCard ... /> */}
      {/* </div> */}

      {/* TODO: Restore when how-to instructions are needed */}
      {/* <HowToCard /> */}

      {/* TODO: Restore when statistics feature is implemented */}
      {/* <StatisticsGrid ... /> */}
    </div>
  );
}