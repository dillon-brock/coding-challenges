class Solution {
    public boolean repeatedSubstringPattern(String s) {

        int i = 1;
        
        while (i < s.length() / 2 + 1) {
            if (s.length() % i != 0) {
                i++;
                continue;
            }
            String sub = s.substring(0, i);
            if (s.equals(sub.repeat(s.length() / i))) {
                return true;
            }
            i++;
        }

        return false;
    }
}