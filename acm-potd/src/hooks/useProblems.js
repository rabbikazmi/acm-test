import { useState, useEffect } from 'react'
import { potdData, EVENT_START_DATE } from '../data/potdData'
import { springPotdData, EVENT_START_DATE as SPRING_START_DATE } from '../data/springPotdData'
import { getScheduledProblems } from '../lib/scheduler'

export function useProblems() {
  const [data,    setData]    = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    const updateProblems = () => {
      try {
        const processedProblems = [
          ...getScheduledProblems(springPotdData, SPRING_START_DATE),
          ...getScheduledProblems(potdData.filter(problem => problem.eventId === 'autumn-2026-cf'), EVENT_START_DATE),
        ];

        setData({
          events: [
            {
              id: "spring-2026",
              name: "Spring 2026",
              isActive: false,
              phases: {
                beginner:     { startDate: SPRING_START_DATE, endDate: "2026-04-25T23:59:59Z" },
                intermediate: { startDate: SPRING_START_DATE, endDate: "2026-04-25T23:59:59Z" },
                advanced:     { startDate: SPRING_START_DATE, endDate: "2026-04-25T23:59:59Z" }
              }
            },
            {
              id: "autumn-2026-cf",
              name: "Autumn 2026",
              isActive: true,
              phases: {
                beginner:     { startDate: EVENT_START_DATE, endDate: "2026-12-01T23:59:59Z" },
                intermediate: { startDate: EVENT_START_DATE, endDate: "2026-12-01T23:59:59Z" },
                advanced:     { startDate: EVENT_START_DATE, endDate: "2026-12-01T23:59:59Z" }
              }
            }
          ],
          problems: processedProblems
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    updateProblems();
    const interval = setInterval(updateProblems, 10000);

    return () => clearInterval(interval);
  }, [])

  // Returns the active event, or the first one if none is flagged active
  const getActiveEvent = () =>
    data?.events.find(e => e.isActive) ?? data?.events[0] ?? null

  // Returns the phase currently running based on today's date
  const getActivePhase = (event) => {
    if (!event?.phases) return 'beginner'
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    for (const [phase, range] of Object.entries(event.phases)) {
      const start = new Date(range.startDate)
      const end   = new Date(range.endDate)
      end.setHours(23, 59, 59, 999)
      if (today >= start && today <= end) return phase
    }
    // Past all phases → return advanced (latest)
    return 'advanced'
  }

  const getEvent = (eventId) =>
    data?.events.find(e => e.id === eventId) ?? null

  // Returns problems for an event+phase, sorted newest first. Drafts are excluded.
  const getProblems = (eventId, phase) =>
    (data?.problems ?? [])
      .filter(p => p.eventId === eventId && p.phase === phase && p.status !== 'draft')
      .sort((a, b) => b.day - a.day)

  const getProblem = (eventId, phase, day) =>
    data?.problems.find(
      p => p.eventId === eventId && p.phase === phase && p.day === Number(day)
    ) ?? null

  return { data, loading, error, getActiveEvent, getActivePhase, getEvent, getProblems, getProblem }
}
