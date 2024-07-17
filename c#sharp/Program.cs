// using System;
// using System.Numerics;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static string GetMiddle(string s)
  {
  //Code goes here!
  bool even = s.Count() % 2 == 0;
  int middle = s.Count() / 2;
  Console.WriteLine(even);

  if (even)
  {
    Console.WriteLine("even");
    return s.Substring(middle - 1, 2);
  }
  else
  {
    Console.WriteLine("Odd");
    return s.Substring(middle, 1 );
  }

  }
  public static void Main()
    {
      string result = GetMiddle("Manma");
      Console.WriteLine(result);
    }
} 

