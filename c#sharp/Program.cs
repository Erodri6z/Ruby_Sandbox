// using System;
using System.Collections.ObjectModel;
using System.Linq.Expressions;
using System.Numerics;
using System.Runtime.InteropServices;
// using System.Linq;
// using System.Collections.Generic;
// using System.Runtime.InteropServices;
// using System.Text.RegularExpressions;

public class Program
{
  public static string CreatePhoneNumber(int[] numbers)
  {
    string number = string.Join("", numbers);
    if (numbers.Length >= 10)
    {
      string v = $"({number.Substring(0, 3)}) {number.Substring(3, 3)}-{number.Substring(6, 4)}";
      return v;
    }
    else
    {
      return "error";
    }
  }
  public static void Main()
    {
      string result = CreatePhoneNumber(new int[] {3, 1, 2, 6, 5, 4, 7, 8, 9, 0});
      Console.WriteLine(result);
    }
} 
