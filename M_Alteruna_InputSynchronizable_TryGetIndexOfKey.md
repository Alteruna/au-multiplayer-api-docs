# TryGetIndexOfKey Method


Attempts to get index of a registered `keyCode`. If the target `keyCode` dos not exist, return `false` and `index` will be 0



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public bool TryGetIndexOfKey(
	KeyCode keyCode,
	out int index
)
```



#### Parameters
<dl><dt>  KeyCode</dt><dd>target</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>Index of target registered <code>keyCode</code></dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True on success

#### Implements
<a href="M_Alteruna_IInput_TryGetIndexOfKey">IInput.TryGetIndexOfKey(KeyCode, Int32)</a>  


## See Also


#### Reference
<a href="T_Alteruna_InputSynchronizable">InputSynchronizable Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
