/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {

        if (n == 1 || isBadVersion(1)) return 1;
        
        int lower = 1;
        int upper = n;

        while (lower <= upper) {
            int mid = lower + (upper - lower) / 2;

            if (!isBadVersion(mid - 1) && isBadVersion(mid))
                return mid;

            if (!isBadVersion(mid)) lower = mid + 1;
            else upper = mid;
        }

        return 0;
    }
}