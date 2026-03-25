export function getScheduledProblems(problems, startDateString) {
  // IST is UTC+5:30
  const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;
  
  // Parse start date (March 22, 2026 00:00:00 UTC)
  const startDateUTC = new Date(startDateString);
  
  // Get current time
  const nowUTC = new Date();
  
  // Convert both to IST and get milliseconds since midnight IST
  const startIST = new Date(startDateUTC.getTime() + IST_OFFSET_MS);
  const nowIST = new Date(nowUTC.getTime() + IST_OFFSET_MS);
  
  // Calculate midnight IST for each
  const startMidnightIST = Math.floor(startDateUTC.getTime() / 86400000) * 86400000 + IST_OFFSET_MS;
  const nowMidnightIST = Math.floor(nowUTC.getTime() / 86400000) * 86400000 + IST_OFFSET_MS;
  
  // Days since start
  const daysDiff = Math.floor((nowMidnightIST - startMidnightIST) / 86400000);

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
