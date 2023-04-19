class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        int reversed = 0;
        int val = x;
        while (val > 0) {
            reversed *= 10;
            reversed += val % 10;
            val /= 10;
        }
        return x == reversed;
    }
}