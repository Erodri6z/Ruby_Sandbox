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
      // int[] mainDigits = digits.Where(c => c != 0).ToArray();
      // List<int> idx = new List<int>(); 

      // for (int i = 0; i < digits.Length; i++)
      // {
      //   if (mainDigits.Contains(digits[i]))
      //   {
      //     idx.Add(i);
      //   }
      // }

      // int[] idxArray = idx.ToArray();

      // string result = "";

      // for (int y = 0; y < mainDigits.Length; y++ )
      // {
      //   int position = Array.IndexOf(digits, mainDigits[y]);
      //   result = result + $" + {mainDigits[y]}{new String('0', digits.Length - position - 1)}";
      // }  
      // return result;
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
