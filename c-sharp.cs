public static class Kata
{
  public static int SquareSum(int[] numbers)
  { 
    int sum = 0
    foreach (int n in numbers)
    {
      sum += n
    }
    return sum
  }
  public static void Main()
  {
    int result = SquareSum(1,2,3)
    Console.WriteLine(result)
  }
}