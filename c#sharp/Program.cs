using System;
using System.Collections.ObjectModel;
using System.Linq;
// using System.Collections.Generic;
// using System.Runtime.InteropServices;
// using System.Text.RegularExpressions;

public class Program
{
  public static string Rgb(int r, int g, int b) 
  {
    string red = r.ToString("X2");
    string green = g.ToString("X2");
    string blue = b.ToString("X2");
    return "#" + red + green + blue;
  }
  public static void Main()
    {
      string result = Rgb(225, 165, 0);
      Console.WriteLine(result);
    }
} 
