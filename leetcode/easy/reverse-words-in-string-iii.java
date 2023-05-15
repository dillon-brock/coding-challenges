class Solution {
    public String reverseWords(String s) {
        s = s.trim();
        if (s.length() <= 1) return s;
        StringBuilder reversed = new StringBuilder(s);

        int start = 0;

        for (int i = 0; i < reversed.length(); i++) {
            if (reversed.charAt(i) != ' ' && i < reversed.length() - 1) {
                continue;
            }
            else  {
                int end = i == reversed.length() - 1 ? reversed.length() : i;
                String word = reversed.substring(start, end);
                String reversedWord = new StringBuilder(word).reverse().toString();
                reversed.replace(start, end, reversedWord);
                start = i + 1;
            }
        }

        return reversed.toString();
    }
}