class Solution {
    public boolean isIsomorphic(String s, String t) {

        // my solution:
        
        // if (s.length() != t.length()) return false;

        // HashMap<Character, Character> charMap = new HashMap<>();

        // for (int i = 0; i < s.length(); i++) {

        //     if (charMap.containsKey(s.charAt(i)) && charMap.get(s.charAt(i)) == t.charAt(i)) {
        //         continue;
        //     }

        //     char tChar = t.charAt(i);
        //     if (charMap.containsValue(t.charAt(i)) && !charMap.entrySet()
        //         .stream()
        //         .filter(entry -> Objects.equals(entry.getValue(), tChar))
        //         .map(Map.Entry::getKey)
        //         .collect(Collectors.toSet())
        //         .contains(s.charAt(i))) {
        //           return false;
        //     }
        
        //     if (charMap.containsKey(s.charAt(i)) && charMap.get(s.charAt(i)) != t.charAt(i)) {
        //         return false;
        //     }
                
        //     charMap.putIfAbsent(s.charAt(i), t.charAt(i));
        // }
        // return true;

        
        // better solution;

        Map<Character, Character> charMap = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            
            if (charMap.containsKey(s.charAt(i)) && charMap.get(s.charAt(i)) == t.charAt(i)) continue;
            if (charMap.containsValue(t.charAt(i)) || charMap.containsKey(s.charAt(i))) return false;
            charMap.put(s.charAt(i), t.charAt(i));
        }

        return true;
    }
}