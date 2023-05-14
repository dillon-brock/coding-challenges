class Solution {
    public int arrangeCoins(int n) {
        if (n == 1) return n;

        int rowCount = 1;
        while (n > 0) {
            n -= rowCount;
            if (n > 0) rowCount++;
        }

        return n == 0 ? rowCount : rowCount - 1;
    }
}