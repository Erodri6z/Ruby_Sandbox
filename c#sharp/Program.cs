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
  public static bool IsSquare(int n)
  {
    double x = (int)Math.Round(Math.Sqrt(n));
    return n >= 0 ? (x * x == n) : false; 
  }

  public static void Main()
    {
      bool result = IsSquare(459182);
      Console.WriteLine(result);
    }
} 
