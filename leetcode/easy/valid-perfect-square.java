class Solution {
    public boolean isPerfectSquare(int num) {
        int i = 3;
        while (num > 1) {
            num -= i;
            i += 2;
        }
        return num == 1;
    }
}