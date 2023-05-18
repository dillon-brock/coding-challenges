import java.util.Arrays;

public class MexicanWave {

    public static String[] wave(String str) {
      
        int numOfLetters = str.replaceAll("\\s", "").length();
 
        String[] wavyWords = new String[numOfLetters];
        
        int offset = 0;
      
        for (int i = 0; i < numOfLetters; i++) {
          StringBuilder word = new StringBuilder("");
          System.out.println(str.charAt(i));
          while (str.charAt(i + offset) == ' ') {
            offset++;
          }
        
          System.out.println(i + offset);
          word.append(str.toLowerCase().substring(0, i + offset));
          word.append(str.toUpperCase().charAt(i + offset));
          word.append(str.toLowerCase().substring(i + 1 + offset));
          wavyWords[i] = word.toString();
          
        }
      
        
        return wavyWords;
    }
    
}