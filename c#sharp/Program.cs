// using System;
// using System.Numerics;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static string GetMiddle(string s)
  {
  //Code goes here!
  int count = s.Count();
  bool even = count % 2 == 0;
  int middle = count / 2;
  string centerChar = s.Substring(middle, 1 ); 
  string middleTwo = middle > 0 ? s.Substring(middle - 1, 2) : s.Substring(0, 1);

  return even? middleTwo : centerChar;

  }
  public static void Main()
    {
      string result = GetMiddle("Manmma");
      Console.WriteLine(result);
    }
} 

