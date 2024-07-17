// using System;
// using System.Numerics;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static string EvenOrOdd(int number)
  {
    return number % 2 == 0 ? "Even" : "Odd";
  }
  public static void Main()
    {
      string result = EvenOrOdd(13);
      Console.WriteLine(result);
    }
} 

