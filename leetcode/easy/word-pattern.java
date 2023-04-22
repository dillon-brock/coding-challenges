class Solution {
  public boolean wordPattern(String pattern, String s) {
    String[] words = s.trim().split(" ");
    if (words.length != pattern.length()) return false;
    Map<Character, String> matches = new HashMap<>();
    
    for (int i = 0; i < pattern.length(); i++) {
      if (matches.containsKey(pattern.charAt(i)) && matches.get(pattern.charAt(i)).equals(words[i])) {
        System.out.println(i);
        continue;
      }
      else if (matches.containsKey(pattern.charAt(i)) || matches.containsValue(words[i])) {
        return false;
      }

      matches.put(pattern.charAt(i), words[i]);
    }
    return true;
  }
}