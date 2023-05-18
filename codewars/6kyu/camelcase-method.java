public class Solution {

    public static String camelCase(String str) {
        // your code here
      String[] words = str.split(" ");
      System.out.println(java.util.Arrays.toString(words));
      String result = "";
      for (String word : words) {
        result += word.isEmpty() ? "" : (word.toUpperCase().charAt(0) + word.substring(1).toLowerCase());
      }
      return result;
    }

}