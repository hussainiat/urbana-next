export interface ResultData {
  rollNo: string;
  score: number;
  rank: number;
}

export interface ExamResult {
  name: string;
  results: Record<string, ResultData>;
  topPerformers: ResultData[];
}

export async function parseCSV(csvContent: string): Promise<ResultData[]> {
  const lines = csvContent.trim().split('\n');
  
  const results: ResultData[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim());
    
    if (values.length >= 3) {
      results.push({
        rollNo: values[0],
        score: parseInt(values[1]),
        rank: parseInt(values[2])
      });
    }
  }
  
  return results;
}

export async function loadExamResults(): Promise<Record<string, ExamResult>> {
  try {
    // Load result1.csv
    const response = await fetch('/results/result1.csv');
    const csvContent = await response.text();
    const parsedResults = await parseCSV(csvContent);
    
    // Convert to the format expected by the component
    const resultsMap: Record<string, ResultData> = {};
    parsedResults.forEach(result => {
      resultsMap[result.rollNo] = result;
    });
    
    // Sort by rank for top performers
    const topPerformers = [...parsedResults]
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 10);
    
    return {
      'entrance-2025': {
        name: 'Entrance cum Scholarship Exam 2025',
        results: resultsMap,
        topPerformers
      }
    };
  } catch (error) {
    console.error('Error loading exam results:', error);
    return {};
  }
}