using System;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static string AreYouPlayingBanjo(string name)
  {
    string firstChar = name.Substring(0, 1);
    if (firstChar.ToUpper() == "R")
    {
      return name + " plays Banjo";
    }
    else 
    {
      return name + " does not play banjo";
    }

  }
  public static void Main()
    {
      string result = AreYouPlayingBanjo("ryan");
      Console.WriteLine(result);
    }
}