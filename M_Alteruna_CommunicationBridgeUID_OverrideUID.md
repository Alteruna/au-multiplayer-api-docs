# OverrideUID Method


Override this `Synchronizables` current unique ID with a new Guid.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public void OverrideUID(
	Guid newUID,
	bool deregisterOld = true
)
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.guid" target="_blank" rel="noopener noreferrer">Guid</a></dt><dd>The new Guid.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Should this <code>Synchronizable</code> be deregistered from the <code>SerializableManager</code> before re-registering with the new ID?</dd></dl>

## See Also


#### Reference
<a href="T_Alteruna_CommunicationBridgeUID">CommunicationBridgeUID Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
