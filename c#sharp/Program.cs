using System;
// using System.Linq;
using System.Collections.Generic;
using System.Runtime.InteropServices;
// using System.Text.RegularExpressions;

public class Program
{
  public static List<string> Number(List<string> lines) 
  {
    List<string> result = new List<string>();

    for (int i = 0; i < lines.Count; i++)
    {
      result.Add($"{i + 1}: {lines[i]}");
    }


    return result;
  }
  public static void Main()
    {
      List<string> results = Number(["A", "B", "C"]);
      Console.WriteLine(results[1]);
    }
} 
