// using System;
// using System.Numerics;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static int CountSheeps(bool[] sheeps)
    {
      bool[] present = Array.FindAll(sheeps, c => c == true);
      return present.Count();
    }
  public static void Main()
    {
      int result = CountSheeps([true, false, true]);
      Console.WriteLine(result);
    }
} 

