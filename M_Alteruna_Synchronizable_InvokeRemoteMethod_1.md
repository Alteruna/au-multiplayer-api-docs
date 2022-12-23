# InvokeRemoteMethod(String, Object[]) Method


Commits method with the `SynchronizableMethod` attribute on evey client excluding sender with given parameters. with given parameters.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public void InvokeRemoteMethod(
	string methodName,
	params Object[] parameters
)
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>Name of target method.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>[]</dt><dd>Argument(s) of a target method</dd></dl>

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
<a href="T_Alteruna_Synchronizable">Synchronizable Class</a>  
<a href="Overload_Alteruna_Synchronizable_InvokeRemoteMethod">InvokeRemoteMethod Overload</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
