# GetMethodAttributeName Method


Get name of method with the `SynchronizableMethod` attribute by index.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public string GetMethodAttributeName(
	int methodId
)
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>Index of method with the <code>SynchronizableMethod</code> attribute.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
Name of method with the `SynchronizableMethod` attribute with target Index.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.indexoutofrangeexception" target="_blank" rel="noopener noreferrer">IndexOutOfRangeException</a></td>
<td>methodId is out of range or less than zero.</td></tr>
</table>

## See Also


#### Reference
<a href="T_Alteruna_Synchronizable">Synchronizable Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
