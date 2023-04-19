class Solution {
  public boolean isValidSudoku(char[][] board) {

    Map<Character, Map<String, Set<Integer>>> occurrences = new HashMap<>();

    for (int i = 0; i < board.length; i++) {
      for (int j = 0; j < board[i].length; j++) {
        if (board[i][j] == '.') continue;
        int box = getBox(i, j);
        var o = occurrences.get(board[i][j]);
        if (o != null) {
          if (!o.get("rows").add(i) || !o.get("cols").add(j) || !o.get("boxes").add(box)) {
            return false;
          }
        } else {
          Set<Integer> rows = Stream.of(i).collect(Collectors.toCollection(HashSet::new));
          Set<Integer> cols = Stream.of(j).collect(Collectors.toCollection(HashSet::new));
          Set<Integer> boxes = Stream.of(box).collect(Collectors.toCollection(HashSet::new));
          Map<String, Set<Integer>> newOccurrence = new HashMap<>();
          newOccurrence.put("rows", rows);
          newOccurrence.put("cols", cols);
          newOccurrence.put("boxes", boxes);
          occurrences.put(board[i][j], newOccurrence);
        }
      }
    }
    return true;
  }

  public int getBox(int row, int col) {
    int boxRow = 3 * (row / 3);
    int boxCol = col / 3;
    return boxRow + boxCol;
  }
}