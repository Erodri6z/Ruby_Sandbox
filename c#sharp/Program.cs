using System;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static int[] CountBy(int x, int n)
  {
    int[] z = new int[n];

    for (int count = 0; count < n; count++)
    {
      z[count] = x * (count + 1);
    }
    
    return z;
  }
  public static void Main()
    {
      int[] result = CountBy(2,10);
      Console.WriteLine(string.Join(".", result));
    }
}