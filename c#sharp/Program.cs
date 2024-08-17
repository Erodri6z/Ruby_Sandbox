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
  public static char FindMissingLetter(char[] array)
  {
    string alpha = "abcdefghijklmnopqrstuvwxyz";
    bool isUpperCase = char.IsUpper(array[0]);
    alpha = isUpperCase ? alpha.ToUpper() : alpha;
    
    int start = alpha.IndexOf(array[0]);

    for (int i = start; i < alpha.Length; i++) 
    {
      if (!array.Contains(alpha[i]))
      {
        return alpha[i];
      }
    }
    return ' ';
  }
  public static void Main()
    {
      char result = FindMissingLetter(['B','C','E']);
      Console.WriteLine(result);
    }
} 
