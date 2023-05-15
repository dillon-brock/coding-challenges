import java.util.Arrays;

class Solution {

    Map<Integer, int[]> ranks = new HashMap<>();

    public String[] findRelativeRanks(int[] score) {

        for (int i = 0; i < score.length; i++) {
            int rank = findRank(score[i]);
            adjustScores(rank);
            ranks.put(i, new int[] {score[i], rank});

        }

        String[] rankArr = new String[score.length];
        ranks.forEach((k, v) -> rankArr[k] = stringFromRank(v[1]));

        return rankArr;
    }

    private int findRank(int score) {

        if (ranks.isEmpty()) return 1;

        int closestIndex = 0;
        int closestScore = -1;


        for (int k : ranks.keySet()) {
            if (ranks.get(k)[0] > closestScore && ranks.get(k)[0] < score) {
                closestIndex = k;
                closestScore = ranks.get(k)[0];
            }
        }

        if (closestScore != -1)
            return ranks.get(closestIndex)[1];
        else {
            return ranks.keySet().size() + 1;
        }
    }

    private void adjustScores(int insertedRank) {
        
        for (var v : ranks.values()) {
            if (v[1] >= insertedRank)
                v[1]++;
        }
        
    }

    private String stringFromRank(int rank) {
        if (rank == 1) return "Gold Medal";
        if (rank == 2) return "Silver Medal";
        if (rank == 3) return "Bronze Medal";
        return Integer.toString(rank);
    }
}