using System;
// using System.Text.RegularExpressions;

public class Program
{
  public static int PaperWork(int n, int m)
  {
    if ( n< 0 || m < 0)
    {
      return 0;
    } 
    else
    {
      return n * m;
    }
  }
  public static void Main()
    {
      int result = PaperWork(5, -5);
      Console.WriteLine(result);
    }
}