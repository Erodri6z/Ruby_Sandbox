using System;
using System.Text.RegularExpressions;

public class Program
{
  public static string PrinterError(string s)
  { 
    string pattern = "[^abcdefghijklm]";
    Regex reg = new Regex(pattern);
    int errorCount = reg.Matches(s).Count;
    return $"{errorCount}/{s.Length}";
  }
  public static void Main()
    {
      string result = PrinterError("aaabbbbhaijjjm");
      Console.WriteLine(result);
    }
}