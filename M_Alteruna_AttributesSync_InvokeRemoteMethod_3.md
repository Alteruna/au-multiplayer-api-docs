# InvokeRemoteMethod(String, UInt16, Object[]) Method


Invoke a method with the `SynchronizableMethod` attribute on target user with given parameters.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public void InvokeRemoteMethod(
	string methodName,
	ushort user = 65535,
	params Object[] parameters
)
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>Name of target method.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a>  (Optional)</dt><dd>target user</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>[]</dt><dd>Argument(s) of a target method</dd></dl>

## Remarks
For a more optimized call method use InvokeRemoteMethod(int, params ... )

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>Thrown when methodName does not mach a name of a registered method.</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>Thrown when parameters count of target method does not match count of given parameters</td></tr>
</table>

## See Also


#### Reference
<a href="T_Alteruna_AttributesSync">AttributesSync Class</a>  
<a href="Overload_Alteruna_AttributesSync_InvokeRemoteMethod">InvokeRemoteMethod Overload</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
