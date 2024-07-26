using System;
// using System.Linq;
using System.Collections.Generic;
using System.Runtime.InteropServices;
// using System.Text.RegularExpressions;

public class Program
{
  public static string MakeUpperCase(string str)
  {
    return str.ToUpper();
  }
  public static void Main()
    {
      string result = MakeUpperCase("aaaaaaa");
      Console.WriteLine(result);
    }
} 
