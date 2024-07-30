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
    static string ConvertToHex( int x )
    {
      if ( x < 0 )
      {
        return "00";
      }
      else if ( x > 255 )
      {
        return "FF";
      }
      else
      {
        return x.ToString("X2");
      }
    }
    string red = ConvertToHex(r);
    string green = ConvertToHex(g);
    string blue = ConvertToHex(b);

    return "#" + red + green + blue;  
  }
  public static void Main()
    {
      string result = Rgb(255, 255, 300);
      Console.WriteLine(result);
    }
} 
