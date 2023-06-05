import java.util.Arrays;

class Solution {
    public int titleToNumber(String columnTitle) {
        char[] titleChars = columnTitle.toCharArray();
        int columnNum = 0;
        int lastIdx = titleChars.length - 1;
        for (int i = lastIdx; i >= 0; i--) {
            columnNum += (((int) titleChars[i]) - 64) * ((int) Math.pow(26, lastIdx - i));
        }
        return columnNum;
    }
}