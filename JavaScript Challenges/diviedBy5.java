
public class MyClass {
    public static boolean divisibleByFive(int num) {
        if (num % 5 == 0)
        return true;
        else
        return false;

}
    public static void main(String args[]) {
    
      System.out.println(divisibleByFive(5));
      System.out.println(divisibleByFive(34));
      System.out.println(divisibleByFive(73));
      System.out.println(divisibleByFive(55));
    }
    
}