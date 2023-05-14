class Solution {
  public String licenseKeyFormatting(String s, int k) {
    s = s.replace("-", "").toUpperCase();

    StringBuilder result = new StringBuilder(s);
    
    for (int i = s.length() - k; i > 0; i -= k) {
        result.insert(i, "-");
    }

    return result.toString();
  }
}