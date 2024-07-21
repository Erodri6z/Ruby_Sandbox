// using System;
// using System.Numerics;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
	public static string Longest(string s1, string s2) 
  {
    // your code
    string string1 = String.Concat(new string(s1.Distinct().ToArray()).OrderBy(c => c));
    string string2 = String.Concat(new string(s2.Distinct().ToArray()).OrderBy(c => c));

    if (string1.Count() > string2.Count())
    {
      return string1;
    }
    else
    {
      return string2;
    };
  }

  public static void Main()
    {
      string result = Longest("aretheyhere", "yestheyarehere");
      Console.WriteLine(result);
    }
} 
