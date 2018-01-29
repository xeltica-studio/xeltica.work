# ねいことは？
ねいことは，ねいあのことである．

# ねいあとは？
ねいあとは，ねいこのことである．

# C# 実装

```cs
using System;
using System.Threading.Task;
class Neiko
{
  static async Task Main()
  {
    var r = new Random();
    string[] neikos = {"あ", "こ", "そ", "えいこ", "えいそ", "えいあ"};
    for (;;)
    {
      Console.WriteLine("ねい" + neikos[r.Next(neikos.Length)]);
      await Task.Delay(1000);
    }
  }
}
```

# つまり
<span style="text-size: 64pt; color: #00ff00; background-color: black">ねこかわいい！</span>
