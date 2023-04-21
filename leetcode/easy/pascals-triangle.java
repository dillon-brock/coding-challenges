class Solution {
    public List<List<Integer>> generate(int numRows) {
        
        ArrayList<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < numRows; i++) {
            ArrayList<Integer> row = new ArrayList<>();
            row.add(1);
            if (i > 0) {
                var prevRow = result.get(i - 1);
                for (int j = 0; j < prevRow.size() - 1; j++) {
                    row.add(prevRow.get(j) + prevRow.get(j + 1));
                }
                row.add(1);
            }
            result.add(row);
        }
        return result;
    }
}