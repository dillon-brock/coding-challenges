class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        int total = 0;
        for (int i = 0; i < timeSeries.length; i++) {
            if (i == timeSeries.length - 1) {
                total += duration;
                break;
            }
            if (timeSeries[i + 1] - timeSeries[i] < duration) {
                total += timeSeries[i + 1] - timeSeries[i];
            } else {
                total += duration;
            }
        }
        return total;
    }
}