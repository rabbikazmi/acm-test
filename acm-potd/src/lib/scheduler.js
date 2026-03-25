export function getScheduledProblems(problems, startDateString) {
  // IST is UTC+5:30
  const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;
  const MS_PER_DAY = 86400000;
  
  // Parse start date (March 22, 2026 00:00:00 UTC)
  const startDateUTC = new Date(startDateString);
  
  // Get current time
  const nowUTC = new Date();
  
  // Convert to IST times
  const startIST = new Date(startDateUTC.getTime() + IST_OFFSET_MS);
  const nowIST = new Date(nowUTC.getTime() + IST_OFFSET_MS);
  
  // Calculate how many complete days have passed since start in IST timezone
  // Get the IST date at midnight (00:00:00 IST)
  const startDateAtMidnightIST = new Date(startIST.getFullYear(), startIST.getMonth(), startIST.getDate());
  const nowDateAtMidnightIST = new Date(nowIST.getFullYear(), nowIST.getMonth(), nowIST.getDate());
  
  // Days since start (0-indexed)
  const daysDiff = Math.floor((nowDateAtMidnightIST.getTime() - startDateAtMidnightIST.getTime()) / MS_PER_DAY);

  return problems
    .map((prob) => {
      const problemDayIndex = prob.day - 1;
      const status = problemDayIndex <= daysDiff ? 'published' : 'locked';

      const problemDate = new Date(startDateUTC.getTime() + problemDayIndex * 86400000);

      return {
        ...prob,
        status,
        date: problemDate.toISOString(),
        problemLink: status === 'locked' ? '#' : prob.problemLink,
        solutionLink: status === 'locked' ? '#' : prob.solutionLink,
        solution: status === 'locked' ? null : prob.solution,
        title: status === 'locked' ? `Day ${prob.day} - Unlocks at 12:00 AM` : prob.title
      };
    })
    .filter(prob => prob.status === 'published'); // Only show published problems
}
