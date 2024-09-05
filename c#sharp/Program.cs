using System;
using System.Collections.ObjectModel;
using System.Linq.Expressions;
using System.Numerics;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
// using System.Linq;
using System.Collections.Generic;
using System.Linq;
// using System.Runtime.InteropServices;
// using System.Text.RegularExpressions;

public class Program
{
  public static bool IsDivisible(int n, int x, int y) 
  {
		return n / x == y ;
	}


  public static void Main()
    {
      bool result = IsDivisible(3,3,4);
      Console.WriteLine(result);
    }
} 
