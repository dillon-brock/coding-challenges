class Solution {
    public boolean checkInclusion(String s1, String s2) {
        
        int[] c1 = new int[26];
        int[] c2 = new int[26];

        for (int i = 0; i < s1.length(); i++) {
            c1[s1.charAt(i) - 'a']++;
        }

        int start = 0;

        for (int i = 0; i < s2.length(); i++) {
            c2[s2.charAt(i) - 'a']++;
            if (i >= s1.length()) {
                c2[s2.charAt(start) - 'a']--;
                start++;
            }
            System.out.println(Arrays.toString(c2));
            if (Arrays.equals(c1, c2)) return true;
        }

        return false;
    }
}