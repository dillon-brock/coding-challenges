class Solution {
    public int lengthOfLongestSubstring(String s) {

        if (s.length() == 0) return 0;

        int maxLength = 1;
        
        for (int i = 0; i < s.length(); i++) {
            Set<Character> foundChars = Stream.of(s.charAt(i)).collect(Collectors.toCollection(HashSet::new));
            int currentLength = 1;
            for (int j = i + 1; j < s.length(); j++) {
                if (foundChars.add(s.charAt(j))) currentLength++;
                else break;
            }
            maxLength = Math.max(maxLength, currentLength);
        }

        return maxLength;
    }
}