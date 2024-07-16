using System;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static int DescendingOrder(int num)
  {
    string numString = num.ToString();
    string sorted = new string(numString.OrderByDescending(n => n).ToArray());
    return int.Parse(sorted);
  }
  public static void Main()
    {
      int result = DescendingOrder(21234);
      Console.WriteLine(result);
    }
} 