# ReplyRemoteProcedure Method


Reply to a Remote Procedure Called by another User.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public void ReplyRemoteProcedure(
	uint callID,
	ushort result,
	ProcedureParameters parameters = null,
	ISerializable userData = null
)
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd>The callID of the RPC to reply to.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a></dt><dd>The result of the procedure.</dd><dt>  <a href="T_Alteruna_ProcedureParameters">ProcedureParameters</a>  (Optional)</dt><dd>The parameters to be sent with the reply.</dd><dt>  ISerializable  (Optional)</dt><dd>The user data to be sent with the reply.</dd></dl>

## See Also


#### Reference
<a href="T_Alteruna_Multiplayer">Multiplayer Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
