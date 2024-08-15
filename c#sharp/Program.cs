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
  public static int Solution(int value)
  {
    List<int> multiples = new List<int>();
    for (int i = 0; i < value; i++)
    {
      if (i % 3 == 0 || i % 5 == 0)
      {
        multiples.Add(i);
      }
    }
    // multiples.ForEach(i => Console.WriteLine("{0}\t", i));
    return multiples.Sum();
  }

  public static void Main()
    {
      int result = Solution(200);
      Console.WriteLine(result);
    }
} 
