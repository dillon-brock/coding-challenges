class Solution {
    public boolean checkRecord(String s) {

        int absences = 0;
        int lates = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'A') absences++;
            if (s.charAt(i) == 'L') lates++;
            else lates = 0;
            if (absences == 2 || lates == 3) return false;
        }

        return true;
    }
}