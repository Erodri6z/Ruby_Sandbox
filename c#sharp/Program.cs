// using System;
using System.Collections.ObjectModel;
using System.Numerics;
// using System.Linq;
// using System.Collections.Generic;
// using System.Runtime.InteropServices;
// using System.Text.RegularExpressions;

public class Program
{
  public static string Maskify(string cc)
  {
    if (cc.Length < 4)
    {
      return cc;
    }    
    
    return $"{new String('#', cc.Length - 4)}{cc.Substring(cc.Length - 4)}";
  }
  public static void Main()
    {
      string result = Maskify("321210934237192");
      Console.WriteLine(result);
    }
} 
