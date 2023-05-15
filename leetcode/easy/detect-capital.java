class Solution {
    public boolean detectCapitalUse(String word) {
        if (word.substring(1).equals(word.substring(1).toLowerCase())) {
            return true;
        }
        if (word.equals(word.toUpperCase())) {
            return true;
        }
        return false;
    }
}