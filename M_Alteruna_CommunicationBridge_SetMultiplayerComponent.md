# SetMultiplayerComponent Method


If the `Multiplayer` reference is null, set it to active `Multiplayer` component. 

## Example


**C#**  
``` C#
void OnEnable() => SetMultiplayerComponent();
```
`SetMultiplayerComponent` call it in `OnEnable` unless hidden.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
protected bool SetMultiplayerComponent(
	bool force = false
)
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>When set to true, it will ignore the current value of the <code>Multiplayer</code> reference</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True when Multiplayer is not null.

## See Also


#### Reference
<a href="T_Alteruna_CommunicationBridge">CommunicationBridge Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
