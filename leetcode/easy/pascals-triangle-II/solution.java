class Solution {
    public List<Integer> getRow(int rowIndex) {

        ArrayList<Integer> row = new ArrayList<>();
        row.add(1);
        if (rowIndex == 0) return row;
        row.add(1);
        if (rowIndex == 1) return row;

        for (int i = 2; i <= rowIndex; i++) {
            row.add(0, 1);
            for (int j = 1; j < i; j++) {
                int sum = row.get(j) + row.get(j + 1);
                row.set(j, sum);
            }
        }
        return row;
    }
}