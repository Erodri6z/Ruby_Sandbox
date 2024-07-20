// using System;
// using System.Numerics;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static int NbYear(int p0, double percent, int aug, int p) 
  {
    // your code
    double percentage = percent / 100;
    int count = 0;
    while (p0 < p)
    {
       p0 = (int)(p0 + (p0 * percentage) + aug);
      count++;
    }
    return count;
  }
  public static void Main()
    {
      int result = NbYear(1500000, 0.25, 1000, 2000000);
      Console.WriteLine(result);
    }
} 

