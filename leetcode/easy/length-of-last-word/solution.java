class Solution {
    public int lengthOfLastWord(String s) {
        s = s.trim();
        if (s.length() <= 1) return s.length();
        int lastLength = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) == ' ') {
                break;
            }
            lastLength++;  
        }

        return lastLength;
    }
}