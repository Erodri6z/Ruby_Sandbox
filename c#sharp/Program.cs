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
      return ConsecutiveSumM(new BigInteger[][] { arr });
    }
    public static int ConsecutiveSumM(BigInteger[][] arr)
    {
      List<BigInteger> flat = new List<BigInteger>();
      foreach (var item in arr)
      {
        flat.AddRange(item);
      }

      BigInteger[] flattened = flat.ToArray();

      int[] arrWithoutDuplicates = flattened.Where(x => x <= int.MaxValue && x >= int.MinValue).Select(x => (int)x).Distinct().OrderBy(x => x).ToArray();
      List<int> conNumbers = new List<int>();

      for (int i = 0; i < arrWithoutDuplicates.Length; i++)
        {
        if ((i > 0 && arrWithoutDuplicates[i] - 1 == arrWithoutDuplicates[i - 1])
        || 
        (i < arrWithoutDuplicates.Length - 1 && arrWithoutDuplicates[i] + 1 == arrWithoutDuplicates[i + 1])
        ||
        (i == arrWithoutDuplicates.Length - 1 && conNumbers.Count > 0 && arrWithoutDuplicates[i] - 1 == arrWithoutDuplicates[i - 1]))
        {
            conNumbers.Add(arrWithoutDuplicates[i]);
        }
      }

      int sum = conNumbers.Distinct().Sum();
      foreach(int i in conNumbers)
      {
        Console.WriteLine(i);
      }
      int result = sum.ToString().Select(b => int.Parse(b.ToString())).Sum();
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
      int result = ConsecutiveSum(new BigInteger[] {BigInteger.Parse("99999999999999999999999999999999999999999999999999"),BigInteger.Parse("100000000000000000000000000000000000000000000000000"), BigInteger.Parse("100000000000000000000000000000000000000000000000001")});
      Console.WriteLine(result);
    }
} 
