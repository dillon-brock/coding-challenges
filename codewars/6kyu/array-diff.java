import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Collectors;

public class Kata {

  public static int[] arrayDiff(int[] a, int[] b) {
    
    System.out.println(Arrays.toString(a));
    
    ArrayList<Integer> remainingInts = new ArrayList<>();
    outer:
    for (int i = 0; i < a.length; i++) {
      for (int j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
          continue outer;
        }
      }
      remainingInts.add(a[i]);
    }
    
  
    return remainingInts.stream().mapToInt(Integer::intValue).toArray();
  }

}