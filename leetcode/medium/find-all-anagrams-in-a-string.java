class Solution {

    Map<Character, Integer> lettersInP = new HashMap<>();
    Map<Character, Integer> lettersInGroup = new HashMap<>();

    public List<Integer> findAnagrams(String s, String p) {

        List<Integer> starts = new ArrayList<>();

        int[] pc = new int[26];
        int[] sc = new int[26];

        for (int i = 0; i < p.length(); i++) {
            pc[p.charAt(i) - 'a']++;
        }

        int end = 0;

        for (int i = 0; i < s.length(); i++) {
            sc[s.charAt(i) - 'a']++;
            if (i >= p.length()) {
                sc[s.charAt(end) - 'a']--;
                end++;
            }
            if (Arrays.equals(pc, sc)) {
                starts.add(end);
            }
        }

        return starts;
    }
}