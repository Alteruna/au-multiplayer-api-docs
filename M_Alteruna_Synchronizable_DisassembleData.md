# DisassembleData Method


Called by the `SynchronizableManager` after recieving new data to be synced with this `Synchronizable`.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public abstract void DisassembleData(
	Reader reader,
	byte LOD = 100
)
```



#### Parameters
<dl><dt>  <a href="T_Alteruna_Reader">Reader</a></dt><dd>Contains the received data.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a>  (Optional)</dt><dd>Describes at which NetLOD the data was sent.</dd></dl>

## See Also


#### Reference
<a href="T_Alteruna_Synchronizable">Synchronizable Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
