// using System;
// using System.Numerics;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
	public static string Longest(string s1, string s2) 
  {
    // your code
    string combined = s1 + s2;

    string result = String.Concat(combined.Distinct().OrderBy(c => c));

    return result;
  }

  public static void Main()
    {
      string result = Longest("aretheyhere", "yestheyarehere");
      Console.WriteLine(result);
    }
} 
