# InvokeRemoteMethod(Int32, UInt16, Object[]) Method


Invoke a method with the `SynchronizableMethod` attribute on target user with given parameters.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public void InvokeRemoteMethod(
	int id = 0,
	ushort user = 65535,
	params Object[] parameters
)
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd>Id of method. Get the id by calling <a href="M_Alteruna_AttributesSync_GetMethodAttributeId">GetMethodAttributeId(string)</a>.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a>  (Optional)</dt><dd>target user</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>[]</dt><dd>Argument(s) of a target method</dd></dl>

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.indexoutofrangeexception" target="_blank" rel="noopener noreferrer">IndexOutOfRangeException</a></td>
<td>Thrown when id is grater or equal to the amount of registered methods</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>Thrown when parameters count of target method does not match count of given parameters</td></tr>
</table>

## See Also


#### Reference
<a href="T_Alteruna_AttributesSync">AttributesSync Class</a>  
<a href="Overload_Alteruna_AttributesSync_InvokeRemoteMethod">InvokeRemoteMethod Overload</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
