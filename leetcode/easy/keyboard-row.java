class Solution {
    public String[] findWords(String[] words) {
        List<String> validWords = new ArrayList<String>();
        String[] rows = {"qwertyuiop", "asdfghjkl", "zxcvbnm"};
        
        w:
        for (String word : words) {
            String lowercaseWord = word.toLowerCase();
            r:
            for (String row: rows) {
                
                for (int i = 0; i < lowercaseWord.length(); i++) {
                    if (row.indexOf(lowercaseWord.charAt(i)) == -1) {
                        continue r;
                    }
                    if (i == lowercaseWord.length() - 1) {
                        validWords.add(word);
                    }
                }
            }
        }

        return validWords.toArray(new String[validWords.size()]);
    }
}