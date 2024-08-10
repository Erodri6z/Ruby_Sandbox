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
    if (n >= 0)
    {
      double x = Math.Sqrt(n);
      return (x * x == n);
    }
    return false;
  }

  public static void Main()
    {
      bool result = IsSquare(25);
      Console.WriteLine(result);
    }
} 
