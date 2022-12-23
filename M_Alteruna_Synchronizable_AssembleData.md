# AssembleData Method


Called by the `SynchronizableManager` after Commit() to collect the data to be synced before sending it.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public abstract void AssembleData(
	Writer writer,
	byte LOD = 100
)
```



#### Parameters
<dl><dt>  <a href="T_Alteruna_Writer">Writer</a></dt><dd>Used to write the data we want to be synchronized.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a>  (Optional)</dt><dd>Defines with what NetLOD to send the data.</dd></dl>

## See Also


#### Reference
<a href="T_Alteruna_Synchronizable">Synchronizable Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
