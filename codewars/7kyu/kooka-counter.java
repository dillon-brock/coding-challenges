public class Dinglemouse {

  public static int kookaCounter(final String laughing) {
    // Your code here!
    String current = "";
    int birds = 0;
    for (String c : laughing.split("")) {
      
      if ((current.isEmpty() || current.equals("male")) && c.equals("h")) {
        birds += 1;
        current = "female";
      }
        
      if ((current.isEmpty() || current.equals("female")) && c.equals("H")) {
        birds += 1;
        current = "male";
      }
        
    }
    return birds;
  }
  
}