class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

        Map<String, List<String>> groups = new HashMap<>();

        for (String s : strs) {
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            String sortedWord = String.valueOf(chars);
            groups.putIfAbsent(sortedWord, new ArrayList<String>());
            groups.get(sortedWord).add(s);
        }

        return new ArrayList<List<String>>(groups.values());
    }
}