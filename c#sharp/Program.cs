// using System;
using System.Collections.ObjectModel;
// using System.Linq;
// using System.Collections.Generic;
// using System.Runtime.InteropServices;
// using System.Text.RegularExpressions;

public class Program
{
  public static string CountSheep(int n)
  {
    string result = "";

    for (int i = 1; i < n; i++) 
    {
      result += $"{i} sheep...";
    }

    return result;
  }
  public static void Main()
    {
      string result = CountSheep(3);
      Console.WriteLine(result);
    }
} 
