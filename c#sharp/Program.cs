using System;
using System.Linq;
// using System.Collections.Generic;
// using System.Runtime.InteropServices;
// using System.Text.RegularExpressions;

public class Program
{
    public static string ExpandedForm(long num) 
    {
      int[] digits = num.ToString().Select(o => Convert.ToInt32(o) - 48).ToArray();
      string result = "";

      for (int i = 0; i < digits.Length; i++)
      {
        if (digits[i] != 0)
        {
          result += $" + {digits[i]}{new String('0', digits.Length - i - 1)}";
        }
      }

      if (result.StartsWith(" + "))
      {
        result = result.Substring(3);
      }

      return result;

    }
  public static void Main()
    {
      string result = ExpandedForm(20303040);
      Console.WriteLine(result);
    }
} 
