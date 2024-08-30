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
    public static int ConsecutiveSum(BigInteger[] arr)
    {
      int[] arrWithoutDuplicates = arr.Where(x => x <= int.MaxValue && x >= int.MinValue).Select(x => (int)x).Distinct().OrderBy(x => x).ToArray();
      List<int> conNumbers = new List<int>();

      for (int i = 0; i < arrWithoutDuplicates.Length - 1; i++)
      {
        if (arrWithoutDuplicates[i] + 1 == arrWithoutDuplicates[i + 1] || arrWithoutDuplicates[i] - 1 == arrWithoutDuplicates[i - 1] )
        {
          conNumbers.Add(arrWithoutDuplicates[i]);
        }
      }

      int sum = conNumbers.Sum(x => x);
      int result = sum.ToString().Select(b => int.Parse(b.ToString())).ToArray().Sum();
      return result;
      // for (int i = 0; i < arrWithoutDuplicates.Length; i++)
      // {
      //   if (arrWithoutDuplicates[i] + 1 == arrWithoutDuplicates[i + 1])
      //   {

      //   }
      // }
      // foreach (BigInteger item in arrWithoutDuplicates)
      // {
      //   sum += item;
      // }


      // int[] finalDigits = sum.ToString().Select(b => int.Parse(b.ToString())).ToArray();
      // Array.ForEach(arrWithoutDuplicates, i => Console.WriteLine(i));
      // Console.WriteLine(finalDigits);
    }

  public static void Main()
    {
      int result = ConsecutiveSum([3, 1, 100, 120, 101, 99, 2]);
      Console.WriteLine(result);
    }
} 
