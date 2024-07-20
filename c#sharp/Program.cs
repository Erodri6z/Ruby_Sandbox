// using System;
// using System.Numerics;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static bool CheckForFactor(int num, int factor)
  {
    // code here
    return num % factor == 0;
  }
  public static void Main()
    {
      bool result = CheckForFactor(10, 2);
      Console.WriteLine(result);
    }
} 

