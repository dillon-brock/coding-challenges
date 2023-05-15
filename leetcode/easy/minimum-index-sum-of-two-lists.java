class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {

        List<String> result = new ArrayList<>(Math.min(list1.length, list2.length));

        int minIndexSum = list1.length + list2.length;

        for (int i = 0; i < list1.length; i++) {
            for (int j = 0; j < list2.length; j++) {
                boolean sameWord = list1[i].equals(list2[j]);
                if ((i + j) > minIndexSum) continue;
                if (i + j == minIndexSum && sameWord) {
                    result.add(list1[i]);
                }
                if (i + j < minIndexSum && sameWord) {
                    minIndexSum = i + j;
                    result.clear();
                    result.add(list1[i]);
                }
            }
        }
        return result.toArray(new String[result.size()]);
    }
}