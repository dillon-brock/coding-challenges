class Solution {
    public String[] equalizeStrings(String num1, String num2) {
        if (num1.length() > num2.length()) {
            StringBuilder n2 = new StringBuilder(num2);
            while (n2.length() < num1.length()) {
                System.out.println(n2.length() + ", " + num1.length());
                n2.insert(0, '0');
            }
            return new String[] {num1, n2.toString()};

        }
        else if (num2.length() > num1.length()) {
            StringBuilder n1 = new StringBuilder(num1);
            while (n1.length() < num2.length()) {
                n1.insert(0, '0');
            }
            return new String[] {n1.toString(), num2};

        }
        return new String[] {num1, num2};
    }

    public String addStrings(String num1, String num2) {
        String[] adjustedStrings = equalizeStrings(num1, num2);
        num1 = adjustedStrings[0]; num2 = adjustedStrings[1];

        StringBuilder result = new StringBuilder();


        int i = num1.length() - 1;
        int carryOver = 0;
        
        while (i >= 0) {
            int d1 = Character.getNumericValue(num1.charAt(i));
            int d2 = Character.getNumericValue(num2.charAt(i));
            int digitSum = d1 + d2 + carryOver;
            if (digitSum >= 10) {
                carryOver = 1;
                digitSum -= 10;
            }
            else {
                carryOver = 0;
            }
            result.insert(0, (char) (digitSum + '0'));
            i--;
        }

        if (carryOver == 1) result.insert(0, '1');

        return result.toString();
    }
}