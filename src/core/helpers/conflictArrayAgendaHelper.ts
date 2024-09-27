export type TimeInterval = {
    startAt: Date;
    endAt: Date;
};
  
export function hasTimeConflicts(intervals: TimeInterval[]): boolean {
    // Step 1: Sort the intervals by startAt
    const sortedIntervals = intervals.sort((a, b) => a.startAt.getTime() - b.startAt.getTime());

    // Step 2: Compare each interval's endAt with the next interval's startAt
    for (let i = 0; i < sortedIntervals.length - 1; i++) {
        const current = sortedIntervals[i];
        const next = sortedIntervals[i + 1];

        if (current.endAt > next.startAt) {
        // There is an overlap
        return true;
        }
    }

    // No conflicts found
    return false;
}
  