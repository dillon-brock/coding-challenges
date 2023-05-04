class Solution {
    public int addDigits(int num) {
        while (num >= 10) {
            int val = num;
            int sum = 0;
            while (val > 0) {
                sum += val % 10;
                val /= 10;
            }
            num = sum;
        }
        return num;
    }
}