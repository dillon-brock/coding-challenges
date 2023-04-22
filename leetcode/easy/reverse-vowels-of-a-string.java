import java.util.Arrays;

class Solution {
    public String reverseVowels(String s) {
        List<Character> vowels = Arrays.asList('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U');
        StringBuilder result = new StringBuilder(s);
        List<Character> foundVowels = new ArrayList<>();

        for (int i = 0; i < s.length(); i++) {
            if (vowels.contains(s.charAt(i)))
                foundVowels.add(s.charAt(i));
        }

        for (int i = 0; i < s.length(); i++) {
            if (vowels.contains(s.charAt(i)))
                result.replace(i, i + 1, Character.toString(foundVowels.remove(foundVowels.size() - 1)));
        }

        return result.toString();
    }
}