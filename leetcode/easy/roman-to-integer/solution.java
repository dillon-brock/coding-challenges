class Solution {
  public int romanToInt(String s) {
      
    int convertedInt = 0;

    for (int i = 0; i < s.length(); i++) {
        switch (s.charAt(i)) {
            case 'I' -> {
                if (i < s.length() - 1) {
                    switch (s.charAt(i + 1)) {
                        case 'V' -> {
                            convertedInt += 4;
                            i++;
                        }
                        case 'X' -> {
                            convertedInt += 9;
                            i++;
                        }
                        default -> convertedInt++;
                    }
                } else {
                    convertedInt++;
                }
            }
            case 'V' -> convertedInt += 5;
            case 'X' -> {
                if (i < s.length() - 1) {
                    switch (s.charAt(i + 1)) {
                        case 'L' -> {
                            convertedInt += 40;
                            i++;
                        }
                        case 'C' -> {
                            convertedInt += 90;
                            i++;
                        }
                        default -> convertedInt += 10;
                    }
                } else {
                    convertedInt += 10;
                }
            }
            case 'L' -> convertedInt += 50;
            case 'C' -> {
                if (i < s.length() - 1) {
                    switch (s.charAt(i + 1)) {
                        case 'D' -> {
                            convertedInt += 400;
                            i++;
                        }
                        case 'M' -> {
                            convertedInt += 900;
                            i++;
                        }
                        default -> convertedInt += 100;
                    }
                } else {
                    convertedInt += 100;
                }
            }
            case 'D' -> convertedInt += 500;
            case 'M' -> convertedInt += 1000;
        }
    }
    return convertedInt;
  }
}