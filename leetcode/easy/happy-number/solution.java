class Solution {
    public boolean isHappy(int n) {
        ArrayList<Integer> foundNums = new ArrayList<>();

        while (n != 1) {

            int val = n;
            int digitSum = 0;

            while (val > 0) {
                digitSum += (val % 10) * (val % 10);
                val /= 10;
            }
            
            if (foundNums.contains(digitSum)) return false;
            foundNums.add(digitSum);
            n = digitSum;
        }
        return true;
    }
}