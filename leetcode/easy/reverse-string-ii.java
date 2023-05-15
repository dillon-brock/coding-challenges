class Solution {
    public String reverseStr(String s, int k) {
        if (s.length() <= 1) return s;
        StringBuilder str = new StringBuilder(s);
        for (int i = 0; i < s.length(); i += 2 * k) {
            StringBuilder sub = new StringBuilder(str.substring(i, i + k > s.length() ? s.length() : i + k));
            str.replace(i, i + k, sub.reverse().toString());
        }

        return str.toString();
    }
}