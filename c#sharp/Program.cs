// using System;
using System.Collections.ObjectModel;
using System.Linq.Expressions;
using System.Numerics;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
// using System.Linq;
// using System.Collections.Generic;
// using System.Runtime.InteropServices;
// using System.Text.RegularExpressions;

public class Program
{
    public static long PowerSumDigTerm(int n) 
    {
      int count = 0;
      var digits = n.ToString().Select(x => int.Parse(x.ToString()));
      foreach (int i in digits)
      {
        count += i;
      }
      int length = n.ToString().Length;

      long result = (long)Math.Pow(count, length);
      
      return result;
    }
  public static void Main()
    {
      long result = PowerSumDigTerm(81);
      Console.WriteLine(result);
    }
} 
