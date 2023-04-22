class Solution {
    public boolean isSubsequence(String s, String t) {
        if (s.isEmpty()) return true;
        int currentChar = 0;
        for (int i = 0; i < t.length(); i++) {
            if (t.charAt(i) != s.charAt(currentChar))
                continue;
            else {
                currentChar++;
                if (currentChar == s.length())
                    break;
            };
        }

        return currentChar == s.length();
    }
}