class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        Map<Character, Integer> magazineLetterCount = new HashMap<>();
        for (int i = 0; i < magazine.length(); i++) {
            magazineLetterCount.merge(magazine.charAt(i), 1, (a, b) -> a + b);
        }

        StringBuilder note = new StringBuilder(ransomNote);
        for (int i = note.length() - 1; i >= 0; i--) {
            char c = note.charAt(i);
            Integer letterCount = magazineLetterCount.get(note.charAt(i));
            if (letterCount == null || letterCount == 0) return false;
            else magazineLetterCount.put(note.charAt(i), letterCount - 1);
        }

        return true;
    }
}