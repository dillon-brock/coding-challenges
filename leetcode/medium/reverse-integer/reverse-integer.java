class Solution {
    public int reverse(int x) {

        long reversedDigits = 0;

        int temp = Math.abs(x);
        while (temp > 0) {
            reversedDigits *= 10;
            reversedDigits += temp % 10;
            temp /= 10;
        }

        if (x < 0) reversedDigits *= -1;

        if (reversedDigits > Integer.MAX_VALUE || reversedDigits < Integer.MIN_VALUE) {
            return 0;
        }
        else {
            return (int) reversedDigits;
        }
    }
}