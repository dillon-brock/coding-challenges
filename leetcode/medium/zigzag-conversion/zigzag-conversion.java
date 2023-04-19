class Solution {
    public String convert(String s, int numRows) {

        List<List<Character>> rows = new ArrayList<>(numRows);

        if (numRows == 1 || s.length() <= 1) return s;

        int r = 0;
        int d = 1;

        for (int i = 0; i < s.length(); i++) {
            if (rows.size() < r + 1) rows.add(new ArrayList<Character>());
            rows.get(r).add(s.charAt(i));
            r += d;
            if (r == 0 || r == numRows - 1) d *= -1;
        }

        StringBuilder result = new StringBuilder();

        for (List<Character> row : rows) {
            for (Character c : row) {
                result.append(c);
            }
        }

        return result.toString();

    }
}