using System;

public class Program
{
  public static string PrinterError(string s)
  { 
    string reg = /[abcdefghijklm]/gi;
    return {s.Replace(reg, '').Length} + '/' + {s.Length};
  }
  public static void Main()
    {
    string result = PrinterError("aaabbbbhaijjjm");
      Console.WriteLine(result);
    }
}