"use client";

import { useState, useEffect } from "react";
import { Search, Trophy, User, Calendar, Award, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { loadExamResults, type ExamResult, type ResultData } from "@/lib/csvParser";

const availableExams = [
  { value: "entrance-2025", label: "Entrance cum Scholarship Exam 2025" },
];

export default function Results() {
  const [selectedExam, setSelectedExam] = useState<string>("");
  const [candidateId, setCandidateId] = useState<string>("");
  const [searchResult, setSearchResult] = useState<ResultData | null>(null);
  const [searchError, setSearchError] = useState<string>("");
  const [examData, setExamData] = useState<Record<string, ExamResult>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await loadExamResults();
        setExamData(data);
      } catch (error) {
        console.error('Failed to load exam data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

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

    const examResults = examData[selectedExam];
    if (examResults && examResults.results[candidateId]) {
      setSearchResult({
        ...examResults.results[candidateId],
        rollNo: candidateId
      });
    } else {
      setSearchError("No results found for this Roll Number in the selected exam.");
    }
  };

  const getTopPerformers = (): ResultData[] => {
    if (!selectedExam || !examData[selectedExam]) return [];
    return examData[selectedExam].topPerformers || [];
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#800020]" />
          <p className="text-gray-600">Loading exam results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 text-[#800020]">Exam Results</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#e63946] mx-auto mb-6"></div>
        <p className="font-lato text-lg max-w-2xl mx-auto text-gray-600">
          Select an exam and enter your Roll Number to view your results
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Search Your Results Section */}
        <Card className="bg-white shadow-lg border border-gray-100">
          <CardHeader>
            <CardTitle className="font-montserrat text-2xl font-bold text-[#800020] flex items-center gap-2">
              <Search className="w-6 h-6" />
              Search Your Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="font-montserrat font-semibold text-gray-700">Select Exam</label>
              <Select value={selectedExam} onValueChange={setSelectedExam}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an exam" />
                </SelectTrigger>
                <SelectContent>
                  {availableExams.map((exam) => (
                    <SelectItem key={exam.value} value={exam.value}>
                      {exam.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="font-montserrat font-semibold text-gray-700">Roll Number</label>
              <Input
                type="text"
                placeholder="Enter your Roll Number (e.g., 10415)"
                value={candidateId}
                onChange={(e) => setCandidateId(e.target.value)}
                className="w-full"
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
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {searchError}
              </div>
            )}

            {searchResult && (
              <div className="bg-green-50 border border-green-200 rounded-md p-6 space-y-4">
                <h3 className="font-montserrat text-xl font-bold text-green-800 flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Result Found!
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-600">Roll Number:</span>
                    <p className="font-montserrat font-bold text-gray-800">{searchResult.rollNo}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Score:</span>
                    <p className="font-montserrat font-bold text-green-600">{searchResult.score}%</p>
                  </div>
                  <div className="col-span-2">
                    <span className="font-semibold text-gray-600">Rank:</span>
                    <p className="font-montserrat font-bold text-blue-600">#{searchResult.rank}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Top Performers Section */}
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
                <p className="text-gray-500 font-lato">Select an exam to view top performers</p>
                <p className="text-sm text-gray-400 mt-2">The top 10 candidates will be displayed here</p>
              </div>
            ) : (
              <div className="space-y-3">
                {getTopPerformers().slice(0, 10).map((performer, index) => (
                  <div 
                    key={performer.rollNo} 
                    className={`flex items-center justify-between p-3 rounded-lg border ${
                      index < 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        index === 0 ? 'bg-yellow-500 text-white' :
                        index === 1 ? 'bg-gray-400 text-white' :
                        index === 2 ? 'bg-orange-600 text-white' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {performer.rank}
                      </div>
                      <div>
                        <p className="font-montserrat font-semibold text-gray-800">Roll No: {performer.rollNo}</p>
                        <p className="text-xs text-gray-500">Rank #{performer.rank}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{performer.score}%</p>
                      {index < 3 && (
                        <Award className="w-4 h-4 text-yellow-500 mx-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Instructions Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
        <CardContent className="py-6">
          <div className="text-center">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-2">How to Check Your Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">1</div>
                <p className="font-lato text-sm text-gray-700">Select the exam you appeared for from the dropdown menu</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">2</div>
                <p className="font-lato text-sm text-gray-700">Enter your Roll Number exactly as provided during registration</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">3</div>
                <p className="font-lato text-sm text-gray-700">Click 'Search Results' to view your score and rank</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="py-6">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-montserrat text-2xl font-bold text-gray-800">{getTopPerformers().length > 0 ? getTopPerformers()[0]?.score : 'N/A'}%</h3>
            <p className="text-gray-600">Highest Score</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="py-6">
            <User className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-montserrat text-2xl font-bold text-gray-800">{Object.keys(examData['entrance-2024']?.results || {}).length}</h3>
            <p className="text-gray-600">Total Candidates</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="py-6">
            <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-montserrat text-2xl font-bold text-gray-800">{getTopPerformers().length > 0 ? Math.round(getTopPerformers().reduce((sum, p) => sum + p.score, 0) / Math.min(getTopPerformers().length, 10)) : 'N/A'}%</h3>
            <p className="text-gray-600">Average Score (Top 10)</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}