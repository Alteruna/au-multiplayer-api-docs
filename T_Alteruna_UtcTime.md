# UtcTime Class


Useful time related fields using global time. Note that its its common for the system time to be inaccurate, expect a difference by 5 seconds. If the machine time is not automatically updated, it can be up to much more.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public static class UtcTime
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  UtcTime</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Alteruna_UtcTime_Milliseconds">Milliseconds</a></td>
<td>Get the number of milliseconds that have elapsed since 1970-01-01T00:00:00.000Z in Coordinated Universal Time.</td></tr>
<tr>
<td><a href="P_Alteruna_UtcTime_MillisecondsFloat">MillisecondsFloat</a></td>
<td>Get Coordinated Universal Time in milliseconds casted to float with modulus to avoid losing precision.</td></tr>
<tr>
<td><a href="P_Alteruna_UtcTime_Now">Now</a></td>
<td>Gets a <a href="https://learn.microsoft.com/dotnet/api/system.datetime" target="_blank" rel="noopener noreferrer">DateTime</a> object that is set to the current date and time on this computer, expressed as the Coordinated Universal Time (UTC).</td></tr>
<tr>
<td><a href="P_Alteruna_UtcTime_Seconds">Seconds</a></td>
<td>Get the number of seconds that have elapsed since 1970-01-01T00:00:00.000Z in Coordinated Universal Time.</td></tr>
<tr>
<td><a href="P_Alteruna_UtcTime_SecondsFloat">SecondsFloat</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
