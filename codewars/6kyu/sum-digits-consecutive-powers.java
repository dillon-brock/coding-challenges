import java.util.List;
import java.util.ArrayList;

class SumDigPower {
    
    public static List<Long> sumDigPow(long a, long b) {
        List<Long> result = new ArrayList<>();
      
        for (long i = a; i <= b; i++) {
          if (isMagicNumber(i)) {
            Long num = i;
            result.add(num);
          }
        }
      
        return result;
    }
  
  private static boolean isMagicNumber(long n) {
    List<Integer> list = new ArrayList<>();
    
    int sum = 0;
    
    long val = n;
    while (val > 0) {
      Integer digit = (int) val % 10;
      list.add(0, digit);
      val /= 10;
    }
    
    for (int i = 0; i < list.size(); i++) {
      sum += Math.pow(list.get(i), i + 1);
    }
    
    return sum == n;
  
  }
}