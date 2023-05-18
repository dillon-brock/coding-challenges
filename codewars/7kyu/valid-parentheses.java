public class Kata {
  
  public static boolean validParentheses(String parenStr) {
    int open = 0;
    for (int i = 0; i < parenStr.length(); i++) {
      open += parenStr.charAt(i) == '(' ? 1 : -1;
      if (open < 0) return false;
    }
    return open == 0;
  }
}